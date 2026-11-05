export const API_VERSION_PREFIX = '/api/v1' as const;
export const CORRELATION_ID_HEADER = 'x-correlation-id' as const;

export type ApiErrorBody = {
  code: string;
  message: string;
  correlationId: string;
  details?: unknown;
};

export type HealthResponse = {
  status: 'ok';
  service: 'api';
  timestamp: string;
};

export type ReadyDependencyStatus = 'ok' | 'not_configured' | 'unavailable';

export type ReadyResponse = {
  status: 'ready' | 'not_ready';
  service: 'api';
  timestamp: string;
  checks: {
    config: ReadyDependencyStatus;
    postgres: ReadyDependencyStatus;
  };
};
