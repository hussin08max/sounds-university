import { Injectable } from '@nestjs/common';
import type { HealthResponse, ReadyResponse } from '@sounds-university/contracts';

@Injectable()
export class HealthService {
  getHealth(): HealthResponse {
    return {
      status: 'ok',
      service: 'api',
      timestamp: new Date().toISOString(),
    };
  }

  getReady(): { body: ReadyResponse; httpStatus: number } {
    return {
      httpStatus: 200,
      body: {
        status: 'ready',
        service: 'api',
        timestamp: new Date().toISOString(),
        checks: {
          config: 'ok',
        },
      },
    };
  }
}
