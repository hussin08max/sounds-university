import {
  API_VERSION_PREFIX,
  CORRELATION_ID_HEADER,
  type ApiErrorBody,
  type HealthResponse,
  type ReadyResponse,
} from '@sounds-university/contracts';

export type ApiClientOptions = {
  baseUrl: string;
  fetchImpl?: typeof fetch;
  getCorrelationId?: () => string;
};

export class ApiClientError extends Error {
  readonly status: number;
  readonly body: ApiErrorBody;

  constructor(status: number, body: ApiErrorBody) {
    super(body.message);
    this.name = 'ApiClientError';
    this.status = status;
    this.body = body;
  }
}

function createCorrelationId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `cid-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function createApiClient(options: ApiClientOptions) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const baseUrl = options.baseUrl.replace(/\/$/, '');

  async function request<T>(path: string): Promise<{ data: T; correlationId: string }> {
    const correlationId = options.getCorrelationId?.() ?? createCorrelationId();
    const response = await fetchImpl(`${baseUrl}${API_VERSION_PREFIX}${path}`, {
      headers: {
        Accept: 'application/json',
        [CORRELATION_ID_HEADER]: correlationId,
      },
    });

    const responseCorrelationId = response.headers.get(CORRELATION_ID_HEADER) ?? correlationId;
    const payload: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      const body: ApiErrorBody =
        payload && typeof payload === 'object' && 'code' in payload && 'message' in payload
          ? {
              code: String((payload as ApiErrorBody).code),
              message: String((payload as ApiErrorBody).message),
              correlationId:
                typeof (payload as ApiErrorBody).correlationId === 'string'
                  ? (payload as ApiErrorBody).correlationId
                  : responseCorrelationId,
              details: (payload as ApiErrorBody).details,
            }
          : {
              code: 'http_error',
              message: `Request failed with status ${response.status}`,
              correlationId: responseCorrelationId,
            };
      throw new ApiClientError(response.status, body);
    }

    return { data: payload as T, correlationId: responseCorrelationId };
  }

  return {
    getHealth: () => request<HealthResponse>('/health'),
    getReady: () => request<ReadyResponse>('/ready'),
  };
}

export type SoundsUniversityApiClient = ReturnType<typeof createApiClient>;
