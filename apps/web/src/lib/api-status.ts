import { ApiClientError, createApiClient } from '@sounds-university/api-client';
import { getPublicApiBaseUrl } from './env';

export type ApiStatusResult =
  | {
      ok: true;
      status: string;
      correlationId: string;
    }
  | {
      ok: false;
      message: string;
      correlationId?: string;
    };

export async function fetchApiHealthStatus(): Promise<ApiStatusResult> {
  try {
    const client = createApiClient({ baseUrl: getPublicApiBaseUrl() });
    const result = await client.getHealth();
    return {
      ok: true,
      status: result.data.status,
      correlationId: result.correlationId,
    };
  } catch (error) {
    if (error instanceof ApiClientError) {
      return {
        ok: false,
        message: error.body.message,
        correlationId: error.body.correlationId,
      };
    }
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Unknown API error',
    };
  }
}
