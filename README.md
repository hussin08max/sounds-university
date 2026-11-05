# Sounds University

> Working project name. Institutional naming, legal status and trademark clearance remain provisional.

Sounds University is being designed as an **audio-first university platform**. Audio is the primary learning medium, not the only evidence of learning. The platform is intended to support academic structure, approved learning content, assessment, learner progress, governance, quality assurance and auditable academic records.

## Project status

**Current phase:** PSA-1 — Runtime and Application Skeleton

**Current status:** PSA-1 PARTIAL pending final CI

**Authoritative progress tracker:** [ROADMAP.md](./ROADMAP.md)

**Repository visibility:** Public repository (temporary; planned return to private after development completion).

No phase or task is complete merely because its documentation has been created. A task is marked `PASS` only when its acceptance criteria have been verified and evidence is recorded.

## Start here

1. [Project roadmap and task tracker](./ROADMAP.md)
2. [Project structure](./PROJECT_STRUCTURE.md)
3. [Engineering instructions for contributors and AI agents](./AGENTS.md)
4. [Architecture entry point](./ARCHITECTURE.md)
5. [Architecture Decision Records](./docs/architecture/ADR/README.md)
6. [Foundational technical architecture](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md)
7. [PSA-1 runtime skeleton tracker](./docs/roadmap/PSA-1-RUNTIME-APPLICATION-SKELETON.md)
8. [REST API strategy](./docs/api/REST_API_STRATEGY.md)

## Foundational institutional documents

The following documents are authoritative project inputs and must be read before work in their respective areas:

- [University Master Blueprint](./docs/institutional/UNIVERSITY_MASTER_BLUEPRINT.md)
- [Academic Content Development Standard](./docs/academic/ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md)
- [Academic Curriculum Architecture](./docs/academic/ACADEMIC_CURRICULUM_ARCHITECTURE.md)
- [Academic Governance and Quality Assurance Framework](./docs/governance/ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md)
- [Platform Software Architecture](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md)

## Non-negotiable principles

- Academic integrity before growth features.
- Audio-first, not audio-only.
- Learning outcomes and assessment evidence before completion claims.
- Approved academic content before publication.
- Server-side authorization; frontend checks are not security controls.
- Preserve academic versions and consequential decision history.
- Jurisdiction-neutral implementation until legal requirements are verified.
- Modular monolith before distributed services.
- No claims of accreditation, degree-awarding authority or legal recognition without evidence and authorization.

## Local development (PSA-1)

Pinned toolchain: Node.js **26.13.0**, pnpm **12.16.1**, TypeScript **6.0.3**.

Development runs directly on the host. Docker is not used.

```text
pnpm install
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
pnpm dev:api
pnpm dev:web
```

- Web: http://localhost:3000/en and http://localhost:3000/ar
- API health (liveness): http://localhost:3001/api/v1/health
- API ready (process readiness): http://localhost:3001/api/v1/ready
- OpenAPI UI: http://localhost:3001/api/v1/docs

PostgreSQL remains the approved database for later phases. PSA-1 does not connect to it and does not install it. When a host PostgreSQL server already exists, the future connection string is:

```text
postgresql://USER:PASSWORD@localhost:5432/sounds_university
```

Put that value in `DATABASE_URL` inside `apps/api/.env` only. Do not commit the real file. Schema, Prisma, and database readiness belong to PSA-2. Readiness in PSA-1 reports process configuration only.

### Quality gates

```text
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
pnpm test
```

Commit only `*.env.example` files. Real `.env*` files stay gitignored. Do not put privileged secrets in `NEXT_PUBLIC_*` variables.

## Working agreement

All work must be tied to a roadmap Task ID, respect the foundational documents, include tests appropriate to the change, and update documentation and evidence. See [AGENTS.md](./AGENTS.md).
