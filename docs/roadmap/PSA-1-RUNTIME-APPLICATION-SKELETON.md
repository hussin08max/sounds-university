# PSA-1 — Runtime and Application Skeleton

**Phase status:** PARTIAL  
**Branch:** `feat/psa-1-runtime-skeleton` (stacked on `chore/psa-0-toolchain`)  
**Last updated:** 2026-11-05

## Objective

Establish a minimal, verifiable monorepo runtime: Next.js web, NestJS API, shared contracts/client, env validation, Docker Postgres (no schema), health/ready, structured logging, correlation IDs, and safe error envelopes.

## Task checklist

| Task ID  | Description                                         | Status  |
| -------- | --------------------------------------------------- | ------- |
| PSA-0101 | Next.js App Router landing with locale/RTL prep     | PARTIAL |
| PSA-0102 | NestJS API application shell                        | PARTIAL |
| PSA-0103 | Shared contracts + typed API client + REST strategy | PARTIAL |
| PSA-0104 | Startup env validation (API + web)                  | PARTIAL |
| PSA-0105 | Docker Compose Postgres 16 (no Prisma/schema)       | PARTIAL |
| PSA-0106 | Health and readiness probes                         | PARTIAL |
| PSA-0107 | Structured logging + correlation ID                 | PARTIAL |
| PSA-0108 | Global safe error envelope + API tests              | PARTIAL |

## Acceptance criteria (phase)

- [ ] Toolchain pins unchanged: Node 26.13.0, pnpm 12.16.1, TypeScript 6.0.3
- [ ] Clean frozen install succeeds
- [ ] `pnpm format:check`, `pnpm lint`, `pnpm typecheck` pass
- [ ] `pnpm build` and `pnpm test` pass (API Vitest covers health/ready/safe 500)
- [ ] Compose Postgres starts; API health/ready behave per contracts
- [ ] Web can call API health via `@sounds-university/api-client` with correlation ID
- [ ] OpenAPI UI reachable at `/api/v1/docs`
- [ ] No Prisma schema; no auth/domain modules; only `*.env.example` committed
- [ ] Stacked PR opened against `chore/psa-0-toolchain`; CI green on push

## Explicit exclusions

Prisma/schema, Redis, BullMQ, auth, academic modules, payments, media, production deploy, design-system/i18n packages.

## Local commands

```text
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
pnpm test
docker compose -f infra/docker/docker-compose.yml up -d
pnpm dev:api
pnpm dev:web
```

## Verification evidence

Recorded after the verification matrix in the phase close-out report below (filled when PASS).

| Check              | Result  | Notes                                                                                                                                                         |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Toolchain versions | PASS    | Node v26.13.0, pnpm 12.16.1, TypeScript 6.0.3                                                                                                                 |
| Frozen install     | PARTIAL | `pnpm install` succeeded after `allowBuilds['@scarf/scarf']=false`. A later `--frozen-lockfile` run is required in CI.                                        |
| Format/lint/types  | PASS    | `pnpm format:check`, `pnpm lint`, `pnpm typecheck` exit 0 on 2026-11-05                                                                                       |
| Build + API tests  | PASS    | `pnpm build` and `pnpm test` exit 0. Vitest: 4 passed (health, ready not_configured, ready 503, safe 500).                                                    |
| Compose + probes   | PARTIAL | Compose file present. `docker compose up` failed: Docker Hub blob `403 Forbidden` while pulling `postgres:16-alpine`. Engine was up (Docker 29.1.2).          |
| Web→API + OpenAPI  | PASS    | `GET /api/v1/health` 200 with echoed `x-correlation-id`. Ready `postgres: not_configured`. OpenAPI and `/docs` 200. Web `/en` and `/ar` showed reachable API. |
| CI on branch push  | TBD     | Record the Actions run after the stacked PR push.                                                                                                             |

## Change log

| Date       | Change                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| 2026-11-04 | PSA-1 tracker created; implementation start                                                            |
| 2026-11-05 | Local skeleton verified. Phase remains PARTIAL until CI is green and the Postgres image pull succeeds. |
