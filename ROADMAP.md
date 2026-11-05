# Project Roadmap

**Project:** Sounds University

**Current phase:** PSA-1 — Runtime and Application Skeleton

**Overall status:** IN PROGRESS (PSA-0 PASS; PSA-1 PASS)

**Last updated:** 2026-11-05

**Repository visibility:** Public repository (temporary; planned return to private after development completion).

This is the master progress dashboard. Task-level details and verification evidence live in `docs/roadmap/`. Update both locations whenever a task status changes.

## Status legend

| Status       | Meaning                                            |
| ------------ | -------------------------------------------------- |
| NOT STARTED  | No implementation work has begun                   |
| IN PROGRESS  | Work is actively underway                          |
| BLOCKED      | A missing dependency or decision prevents progress |
| PARTIAL      | Some acceptance criteria are satisfied, not all    |
| PASS         | All acceptance criteria met with recorded evidence |
| NOT VERIFIED | Work may exist but has not been verified           |
| DEFERRED     | Intentionally postponed with reason                |
| REJECTED     | Explicitly not accepted, with rationale            |

**Completion rule:** Never infer completion from file creation, generated code, a successful-looking screen or an unexecuted test. Evidence is mandatory.

## Phase dashboard

| Phase  | Name                                            | Status      | Detailed tracker                                                                                                      |
| ------ | ----------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| PSA-0  | Project Foundation                              | PASS        | [PSA-0 checklist](./docs/roadmap/PSA-0-FOUNDATION.md)                                                                 |
| PSA-1  | Runtime and Application Skeleton                | PASS        | [PSA-1 checklist](./docs/roadmap/PSA-1-RUNTIME-APPLICATION-SKELETON.md)                                               |
| PSA-2  | Database and Persistence Foundation             | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-3  | Identity and Access Foundation                  | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-4  | Academic Core                                   | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-5  | Content and Academic Approval                   | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-6  | Media and Audio Learning                        | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-7  | Student and Enrolment                           | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-8  | Assessment and Academic Records                 | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-9  | Governance and Quality Operations               | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-10 | Commercial and Communications                   | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-11 | Reporting, Reliability and Production Readiness | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-12 | External Readiness and Evolution                | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |

## Current task snapshot

| Task ID  | Short description                           | Status   |
| -------- | ------------------------------------------- | -------- |
| PSA-0001 | Reconcile and import foundational documents | PASS     |
| PSA-0002 | Repository and branch strategy              | PASS     |
| PSA-0003 | AGENTS.md                                   | PASS     |
| PSA-0004 | Architecture entry point                    | PASS     |
| PSA-0005 | ADR template/register                       | PASS     |
| PSA-0006 | Master roadmap/status tracking              | PASS     |
| PSA-0007 | Pin Node.js, pnpm and TypeScript            | PASS     |
| PSA-0008 | Formatting, lint and typecheck              | PASS     |
| PSA-0009 | Basic CI                                    | PASS     |
| PSA-0101 | Next.js landing + locale/RTL prep           | PASS     |
| PSA-0102 | NestJS API shell                            | PASS     |
| PSA-0103 | Contracts + API client + REST strategy      | PASS     |
| PSA-0104 | Env validation (API + web)                  | PASS     |
| PSA-0105 | Docker local dependencies                   | REJECTED |
| PSA-0106 | Health and readiness probes                 | PASS     |
| PSA-0107 | Logging + correlation ID                    | PASS     |
| PSA-0108 | Safe errors + API Vitest                    | PASS     |

## Foundational source documents

The five canonical documents are stored in full at these paths:

1. [University Master Blueprint](./docs/institutional/UNIVERSITY_MASTER_BLUEPRINT.md)
2. [Academic Content Development Standard](./docs/academic/ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md)
3. [Academic Curriculum Architecture](./docs/academic/ACADEMIC_CURRICULUM_ARCHITECTURE.md)
4. [Academic Governance and Quality Assurance Framework](./docs/governance/ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md)
5. [Platform Software Architecture](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md)

Supplementary planning material is preserved under [`docs/academic/research/`](./docs/academic/research/) and [`docs/project-history/`](./docs/project-history/). These sources provide context; they do not override the five canonical documents.

## Phase execution order

Follow the dependency-ordered phases in AU-PSA-001. Do not begin PSA-1 application implementation before PSA-0 exit criteria pass unless a specific prerequisite is explicitly authorized and tracked.

## Change log

| Date       | Change                                                                                         |
| ---------- | ---------------------------------------------------------------------------------------------- |
| 2026-11-02 | Initial repository structure and governance documentation created                              |
| 2026-11-02 | Imported five canonical source documents and supplementary planning notes                      |
| 2026-11-02 | Added pinned toolchain baseline; local clean-install verification remains open                 |
| 2026-11-02 | Verified PSA-0007 toolchain pin and lockfile; established PSA-0008 format/lint/typecheck       |
| 2026-11-02 | Added SHA-pinned GitHub Actions CI workflow for PSA-0009; awaiting successful Actions run      |
| 2026-11-02 | Completed PSA-0001 foundational documents reconciliation report (AU-FDR-001)                   |
| 2026-11-02 | Marked PSA-0009 PASS after successful Actions runs 41427767383 (push) and 41427778229 (PR)     |
| 2026-11-02 | Corrected AU-FDR-001 open-question count from 22 to verified 25                                |
| 2026-11-04 | Closed PSA-0002 with verified `main` branch protection and PR #1 CI evidence; PSA-0 PASS       |
| 2026-11-04 | Started PSA-1 runtime skeleton on `feat/psa-1-runtime-skeleton` (stacked on PSA-0)             |
| 2026-11-05 | PSA-1 CI run 42008338326 succeeded; phase stays PARTIAL until the Postgres image pull succeeds |
| 2026-11-05 | Owner rejected Docker. PSA-0105 is REJECTED. Development runs on the host.                     |
| 2026-11-05 | PSA-1 PASS after host-based verification and CI run 42010023195 on `752a466`.                  |

## Project rules

- Every task has a stable Task ID.
- Keep completed tasks visible; never delete completed checklist rows.
- Update statuses only with evidence.
- Log blockers, deferred work and decisions.
- Do not mark an entire phase complete while any required task is not `PASS`.
- See [AGENTS.md](./AGENTS.md) for the complete engineering contract.
