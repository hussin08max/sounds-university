import { Controller, Get, INestApplication, InternalServerErrorException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { CORRELATION_ID_HEADER } from '@sounds-university/contracts';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { AppModule } from '../src/app.module.js';
import { GlobalHttpExceptionFilter } from '../src/common/http-exception.filter.js';
import { API_ENV } from '../src/config/config.module.js';
import type { ApiEnv } from '../src/config/env.js';
import { probePostgresTcp } from '../src/health/postgres-probe.js';

vi.mock('../src/health/postgres-probe.js', async () => {
  const actual = await vi.importActual<typeof import('../src/health/postgres-probe.js')>(
    '../src/health/postgres-probe.js',
  );
  return {
    ...actual,
    probePostgresTcp: vi.fn(actual.probePostgresTcp),
  };
});

@Controller('__test')
class BoomController {
  @Get('boom')
  boom(): never {
    throw new InternalServerErrorException('secret internal detail');
  }
}

describe('API health and errors', () => {
  let app: INestApplication;

  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    process.env.API_PORT = '3001';
    process.env.API_CORS_ORIGINS = 'http://localhost:3000';
    process.env.LOG_LEVEL = 'silent';
    delete process.env.DATABASE_URL;

    const env: ApiEnv = {
      NODE_ENV: 'test',
      API_PORT: 3001,
      API_CORS_ORIGINS: 'http://localhost:3000',
      LOG_LEVEL: 'silent',
      DATABASE_URL: undefined,
      corsOrigins: ['http://localhost:3000'],
    };

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [BoomController],
    })
      .overrideProvider(API_ENV)
      .useValue(env)
      .compile();

    app = moduleRef.createNestApplication({ logger: false });
    app.setGlobalPrefix('api/v1');
    app.useGlobalFilters(new GlobalHttpExceptionFilter());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns liveness payload on GET /api/v1/health', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/health')
      .set(CORRELATION_ID_HEADER, 'test-correlation-1')
      .expect(200);

    expect(response.body.status).toBe('ok');
    expect(response.body.service).toBe('api');
    expect(response.headers[CORRELATION_ID_HEADER]).toBe('test-correlation-1');
  });

  it('returns ready with postgres not_configured when DATABASE_URL is unset', async () => {
    const response = await request(app.getHttpServer()).get('/api/v1/ready').expect(200);

    expect(response.body.status).toBe('ready');
    expect(response.body.checks.config).toBe('ok');
    expect(response.body.checks.postgres).toBe('not_configured');
  });

  it('returns 503 when postgres probe is unavailable', async () => {
    vi.mocked(probePostgresTcp).mockResolvedValueOnce('unavailable');

    const response = await request(app.getHttpServer()).get('/api/v1/ready').expect(503);

    expect(response.body.status).toBe('not_ready');
    expect(response.body.checks.postgres).toBe('unavailable');
  });

  it('maps unexpected errors to a safe ApiErrorBody without leaking internals', async () => {
    const response = await request(app.getHttpServer()).get('/api/v1/__test/boom').expect(500);

    expect(response.body.code).toBe('internal_error');
    expect(response.body.message).toBe('An unexpected error occurred');
    expect(typeof response.body.correlationId).toBe('string');
    expect(JSON.stringify(response.body)).not.toContain('secret internal detail');
  });
});
