import { z } from 'zod';

const webEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url().default('http://localhost:3001'),
});

export type WebEnv = z.infer<typeof webEnvSchema>;

export function loadWebEnv(
  source: Record<string, string | undefined> = {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
): WebEnv {
  const parsed = webEnvSchema.safeParse(source);
  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
      .join('; ');
    throw new Error(`Invalid web environment configuration: ${details}`);
  }
  return parsed.data;
}

export function getPublicApiBaseUrl(): string {
  return loadWebEnv().NEXT_PUBLIC_API_BASE_URL;
}
