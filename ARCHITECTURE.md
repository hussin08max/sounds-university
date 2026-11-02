# Architecture Entry Point

**Architecture baseline:** AU-PSA-001, Version 1.0  
**Status:** Foundational baseline; formal adoption and task-level decisions remain subject to review.

## Canonical reference

The detailed technical architecture is maintained in:

[`docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md`](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md)

This entry point is a navigation and governance page. It must not become a competing copy of the detailed architecture.

## Foundational document set

1. [University Master Blueprint](./docs/institutional/UNIVERSITY_MASTER_BLUEPRINT.md)
2. [Academic Content Development Standard](./docs/academic/ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md)
3. [Academic Curriculum Architecture](./docs/academic/ACADEMIC_CURRICULUM_ARCHITECTURE.md)
4. [Academic Governance and Quality Assurance Framework](./docs/governance/ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md)
5. [Platform Software Architecture](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md)

## Architecture governance

- Follow the document precedence in section 0.4 of AU-PSA-001.
- Record material technical choices as ADRs in [`docs/architecture/ADR/`](./docs/architecture/ADR/README.md).
- Do not silently change an accepted architectural baseline.
- If implementation evidence exposes a conflict, record it and resolve it through the appropriate authority.
- A roadmap item is not an approved architecture change by itself.

## Core baseline

- Next.js / React / TypeScript web application.
- NestJS TypeScript backend.
- REST APIs documented through OpenAPI.
- PostgreSQL with Prisma.
- Modular monolith first.
- Redis and BullMQ only when actual asynchronous workload requires them.
- Private object storage and protected segmented audio delivery.
- Server-side scoped authorization.
- Multilingual and accessible product foundation.
- Versioned academic objects and auditable consequential decisions.

## Current engineering phase

See [`ROADMAP.md`](./ROADMAP.md). The repository is being established in PSA-0; no application runtime or production architecture component should be considered implemented until verified.
