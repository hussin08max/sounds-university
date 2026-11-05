import { Inject, Injectable } from '@nestjs/common';
import type { HealthResponse, ReadyResponse } from '@sounds-university/contracts';
import { API_ENV } from '../config/config.module.js';
import type { ApiEnv } from '../config/env.js';
import { probePostgresTcp } from './postgres-probe.js';

@Injectable()
export class HealthService {
  constructor(@Inject(API_ENV) private readonly env: ApiEnv) {}

  getHealth(): HealthResponse {
    return {
      status: 'ok',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }

  async getReady(): Promise<{ body: ReadyResponse; httpStatus: number }> {
    const postgres = await probePostgresTcp(this.env.DATABASE_URL);
    const ready = postgres !== 'unavailable';

    return {
      httpStatus: ready ? 200 : 503,
      body: {
        status: ready ? 'ready' : 'not_ready',
        service: 'api',
        timestamp: new Date().toISOString(),
        checks: {
          config: 'ok',
          postgres,
        },
      },
    };
  }
}
