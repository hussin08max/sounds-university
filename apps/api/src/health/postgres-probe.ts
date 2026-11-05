import net from 'node:net';

export type PostgresProbeResult = 'ok' | 'unavailable' | 'not_configured';

export async function probePostgresTcp(
  databaseUrl: string | undefined,
  timeoutMs = 1500,
): Promise<PostgresProbeResult> {
  if (!databaseUrl) {
    return 'not_configured';
  }

  let url: URL;
  try {
    url = new URL(databaseUrl);
  } catch {
    return 'unavailable';
  }

  const host = url.hostname;
  const port = Number(url.port || 5432);
  if (!host || !Number.isFinite(port)) {
    return 'unavailable';
  }

  return await new Promise<PostgresProbeResult>((resolve) => {
    const socket = new net.Socket();
    let settled = false;

    const finish = (result: PostgresProbeResult) => {
      if (settled) {
        return;
      }
      settled = true;
      socket.destroy();
      resolve(result);
    };

    socket.setTimeout(timeoutMs);
    socket.once('connect', () => finish('ok'));
    socket.once('timeout', () => finish('unavailable'));
    socket.once('error', () => finish('unavailable'));
    socket.connect(port, host);
  });
}
