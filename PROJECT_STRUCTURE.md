# Project Structure

**Status:** Initial repository convention  
**Last reviewed:** 2026-11-02

This document describes the intended repository organization. It is not an instruction to create empty directories or speculative modules. Add a directory when a real task requires it.

## Root

```text
sounds-university/
├── apps/                         # Deployable applications (introduced in PSA-1)
│   ├── web/                      # Next.js public and authenticated experience
│   ├── api/                      # NestJS HTTP API
│   └── worker/                   # Background worker entry point when needed
├── packages/                     # Shared, purposeful packages
│   ├── api-client/
│   ├── contracts/
│   ├── config/
│   ├── design-system/
│   ├── i18n/
│   ├── observability/
│   └── test-utils/
├── docs/
│   ├── institutional/            # Institutional blueprint and policy
│   ├── academic/                 # Academic curriculum and content standards
│   ├── governance/               # Governance and quality framework
│   ├── architecture/
│   │   ├── ADR/
│   │   ├── diagrams/
│   │   └── threat-models/
│   ├── security/
│   ├── operations/
│   ├── api/
│   └── roadmap/
├── infra/                        # Infrastructure only when introduced
│   ├── docker/
│   ├── nginx/
│   ├── scripts/
│   └── deployment/
├── prisma/                       # Database schema and migrations (PSA-2)
├── tests/
│   ├── e2e/
│   ├── security/
│   └── architecture/
├── .github/
│   └── workflows/
├── .prettierrc.json              # Prettier options (PSA-0008)
├── .prettierignore               # Excludes canonical academic sources
├── eslint.config.mjs             # ESLint flat config (PSA-0008)
├── tsconfig.json                 # Root TypeScript check baseline
├── toolchain-check.ts            # Minimal non-application TS input
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
| Infrastructure configuration                         | `infra/`                                                |
| Prisma schema and migrations                         | `prisma/`                                               |
| Cross-application tests                              | `tests/`                                                |

## Rules

1. Do not create placeholder packages or empty domain modules.
2. A package is justified by actual shared use, not an anticipated future possibility.
3. Keep application-specific code inside its app until a second genuine consumer exists.
4. Keep academic policy documents separate from engineering implementation notes.
5. Do not copy the same authoritative policy into multiple places; link to its canonical source.
6. Update this document when actual repository organization changes.
