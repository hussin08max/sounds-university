import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { CorrelationIdMiddleware } from './common/correlation.middleware.js';
import { ConfigModule } from './config/config.module.js';
import { HealthModule } from './health/health.module.js';

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL ?? 'info',
        redact: {
          paths: [
            'req.headers.authorization',
            'req.headers.cookie',
            'req.headers["set-cookie"]',
            'password',
            'token',
            'accessToken',
            'refreshToken',
            'secret',
          ],
          remove: true,
        },
        customProps: (req) => ({
          correlationId: req.headers['x-correlation-id'],
          service: 'api',
        }),
        transport:
          process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
            ? undefined
            : {
                target: 'pino-pretty',
                options: { singleLine: true, colorize: true },
              },
      },
    }),
    HealthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CorrelationIdMiddleware).forRoutes('{*splat}');
  }
}
