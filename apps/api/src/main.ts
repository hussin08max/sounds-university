import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_VERSION_PREFIX } from '@sounds-university/contracts';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module.js';
import { GlobalHttpExceptionFilter } from './common/http-exception.filter.js';
import { loadApiEnv } from './config/env.js';

async function bootstrap(): Promise<void> {
  const env = loadApiEnv();
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));
  app.setGlobalPrefix(API_VERSION_PREFIX.replace(/^\//, ''));
  app.enableCors({
    origin: env.corsOrigins.includes('*') ? true : env.corsOrigins,
    credentials: true,
  });
  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sounds University API')
    .setDescription('Runtime skeleton API for Sounds University (PSA-1).')
    .setVersion('0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${API_VERSION_PREFIX.replace(/^\//, '')}/docs`, app, document, {
    jsonDocumentUrl: `${API_VERSION_PREFIX.replace(/^\//, '')}/openapi.json`,
  });

  await app.listen(env.API_PORT);
}

void bootstrap();
