# PSA-1 — Runtime and Application Skeleton

**Phase status:** PARTIAL
**Branch:** `feat/psa-1-runtime-skeleton` (stacked on `chore/psa-0-toolchain`)
**Last updated:** 2026-11-05

## Objective

Establish a host-based monorepo runtime: Next.js web, NestJS API, shared contracts and client, environment validation, process health and readiness, structured logging, correlation IDs, and safe error envelopes. Docker is not part of this project.

## Task checklist

| Task ID  | Description                                         | Status   |
| -------- | --------------------------------------------------- | -------- |
| PSA-0101 | Next.js App Router landing with locale/RTL prep     | PASS     |
| PSA-0102 | NestJS API application shell                        | PASS     |
| PSA-0103 | Shared contracts + typed API client + REST strategy | PASS     |
| PSA-0104 | Startup env validation (API + web)                  | PASS     |
| PSA-0105 | Docker-based local dependencies                     | REJECTED |
| PSA-0106 | Health and readiness probes                         | PASS     |
| PSA-0107 | Structured logging + correlation ID                 | PASS     |
| PSA-0108 | Global safe error envelope + API tests              | PASS     |

PSA-0105 is rejected because the owner requires host-based development. PostgreSQL stays the future database, installed on the host when PSA-2 begins. PSA-1 does not create a schema and does not treat database connectivity as readiness.

## Acceptance criteria (phase)

- [x] Toolchain pins unchanged: Node 26.13.0, pnpm 12.16.1, TypeScript 6.0.3
- [x] Clean frozen install succeeds
- [x] `pnpm format:check`, `pnpm lint`, `pnpm typecheck` pass
- [x] `pnpm build` and `pnpm test` pass
- [x] API liveness and process readiness behave per contracts
- [x] Web can call API health via `@sounds-university/api-client` with a correlation ID
- [x] OpenAPI UI reachable at `/api/v1/docs`
- [x] No Prisma schema, auth, domain modules, or Docker workflow
- [ ] CI green on the final branch push

## Explicit exclusions

Prisma/schema, Redis, BullMQ, auth, academic modules, payments, media, production deploy, design-system/i18n packages, Docker, and other container runtimes.

## Local commands

```text
pnpm install --frozen-lockfile
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
pnpm test
pnpm dev:api
pnpm dev:web
```

## Host PostgreSQL

PSA-2 will use a PostgreSQL server installed on the host. Expected connection string:

```text
postgresql://USER:PASSWORD@localhost:5432/sounds_university
```

Store it only in `apps/api/.env` as `DATABASE_URL`. The example file keeps that line commented. PSA-1 readiness does not open a database connection.

## Verification evidence

Filled after the docker-free verification run.

| Check              | Result       | Notes                                                                                                                                                                      |
| ------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Toolchain versions | PASS         | `node --version` v26.13.0. `pnpm --version` 12.16.1. TypeScript 6.0.3 remains pinned.                                                                                      |
| Frozen install     | PASS         | `pnpm install --frozen-lockfile` exit 0 on 2026-11-05.                                                                                                                     |
| Format/lint/types  | PASS         | `pnpm format:check`, `pnpm lint`, and `pnpm typecheck` exit 0.                                                                                                             |
| Build + API tests  | PASS         | Nest and Next production builds exit 0. Vitest: 3 passed (health, process ready, safe 500).                                                                                |
| Host runtime       | PASS         | API on port 3001 and web on port 3025. Health echoed `x-correlation-id`. Ready checks `config: ok`. `/en` and `/ar` (`dir=rtl`) showed a reachable API and correlation ID. |
| PostgreSQL         | NOT VERIFIED | Host service `postgresql-x64-18` is running on port 5432. The example role `sounds` was rejected. PSA-1 does not use the database.                                         |
| CI on final push   | TBD          | Record the Actions run for the docker-free commit.                                                                                                                         |

## Change log

| Date       | Change                                                                                |
| ---------- | ------------------------------------------------------------------------------------- |
| 2026-11-04 | PSA-1 tracker created; implementation start                                           |
| 2026-11-05 | Runtime skeleton added. CI run 42008338326 succeeded before Docker removal.           |
| 2026-11-05 | Docker removed from the development workflow. Readiness is process-level until PSA-2. |
