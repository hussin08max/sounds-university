# Project Structure

**Status:** PSA-1 runtime skeleton layout

**Last reviewed:** 2026-11-05

This document describes the intended repository organization. It is not an instruction to create empty directories or speculative modules. Add a directory when a real task requires it.

## Root

```text
sounds-university/
├── apps/
│   ├── web/                      # Next.js 15 App Router (locale/RTL prep + landing)
│   └── api/                      # NestJS 12 HTTP API (health/ready, swagger, logging)
├── packages/
│   ├── api-client/               # Typed fetch client over shared contracts
│   └── contracts/                # Shared DTO/error/health types and constants
├── docs/
│   ├── institutional/
│   ├── academic/
│   ├── governance/
│   │   └── FOUNDATIONAL_DOCUMENTS_RECONCILIATION.md
│   ├── architecture/
│   │   ├── ADR/
│   │   ├── diagrams/
│   │   └── threat-models/
│   ├── security/
│   ├── operations/
│   ├── api/
│   │   └── REST_API_STRATEGY.md
│   └── roadmap/
│       ├── PSA-0-FOUNDATION.md
│       └── PSA-1-RUNTIME-APPLICATION-SKELETON.md
├── .github/
│   └── workflows/
│       └── ci.yml
├── .prettierrc.json
├── .prettierignore
├── eslint.config.mjs
├── tsconfig.json
├── toolchain-check.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── AGENTS.md
├── ARCHITECTURE.md
├── PROJECT_STRUCTURE.md
├── README.md
└── ROADMAP.md
```

## Placement rules

| Content                                              | Location                                                |
| ---------------------------------------------------- | ------------------------------------------------------- |
| Institution-wide vision and master blueprint         | `docs/institutional/`                                   |
| Curriculum and academic content standards            | `docs/academic/`                                        |
| Academic governance and quality assurance            | `docs/governance/`                                      |
| Architecture reference and diagrams                  | `docs/architecture/`                                    |
| Architecture decisions                               | `docs/architecture/ADR/`                                |
| Security policy and threat models                    | `docs/security/` and `docs/architecture/threat-models/` |
| Operational procedures/runbooks                      | `docs/operations/`                                      |
| API contracts and integration notes                  | `docs/api/`                                             |
| Phase plans, verification evidence and release notes | `docs/roadmap/`                                         |
| Deployable applications                              | `apps/`                                                 |
| Shared packages with more than one real consumer     | `packages/`                                             |
| Infrastructure configuration                         | `infra/` when a real host configuration is introduced   |
| Prisma schema and migrations                         | `prisma/` (PSA-2; not introduced yet)                   |
| Cross-application tests                              | `tests/`                                                |

## Rules

1. Do not create placeholder packages or empty domain modules.
2. A package is justified by actual shared use, not an anticipated future possibility.
3. Keep application-specific code inside its app until a second genuine consumer exists.
4. Keep academic policy documents separate from engineering implementation notes.
5. Do not copy the same authoritative policy into multiple places; link to its canonical source.
6. Update this document when actual repository organization changes.
