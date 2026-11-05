import { z } from 'zod';

const envSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    API_PORT: z.coerce.number().int().min(1).max(65535).default(3001),
    API_CORS_ORIGINS: z.string().min(1),
    LOG_LEVEL: z
      .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'])
      .default('info'),
    DATABASE_URL: z
      .string()
      .min(1)
      .optional()
      .transform((value) => (value && value.trim().length > 0 ? value.trim() : undefined)),
  })
  .superRefine((value, ctx) => {
    const origins = value.API_CORS_ORIGINS.split(',')
      .map((origin) => origin.trim())
      .filter(Boolean);

    if (origins.length === 0) {
      ctx.addIssue({
        code: 'custom',
        path: ['API_CORS_ORIGINS'],
        message: 'At least one CORS origin is required',
      });
    }

    if (value.NODE_ENV === 'production' && origins.includes('*')) {
      ctx.addIssue({
        code: 'custom',
        path: ['API_CORS_ORIGINS'],
        message: 'Wildcard CORS origin is not allowed in production',
      });
    }
  });

export type ApiEnv = z.infer<typeof envSchema> & {
  corsOrigins: string[];
};

export function loadApiEnv(source: NodeJS.ProcessEnv = process.env): ApiEnv {
  const parsed = envSchema.safeParse(source);
  if (!parsed.success) {
    const details = parsed.error.issues
      .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
      .join('; ');
    throw new Error(`Invalid API environment configuration: ${details}`);
  }

  const corsOrigins = parsed.data.API_CORS_ORIGINS.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  return {
    ...parsed.data,
    corsOrigins,
  };
}
