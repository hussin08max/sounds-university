# Project Roadmap

**Project:** Sounds University  
**Current phase:** PSA-0 — Project Foundation  
**Overall status:** IN PROGRESS  
**Last updated:** 2026-11-02

This is the master progress dashboard. Task-level details and verification evidence live in `docs/roadmap/`. Update both locations when phase/task status changes.

## Status legend

| Status | Meaning |
|---|---|
| NOT STARTED | No implementation work has begun |
| IN PROGRESS | Work is actively underway |
| BLOCKED | A missing dependency or decision prevents progress |
| PARTIAL | Some acceptance criteria are satisfied, not all |
| PASS | All acceptance criteria met with recorded evidence |
| NOT VERIFIED | Work may exist but has not been verified |
| DEFERRED | Intentionally postponed with reason |
| REJECTED | Explicitly not accepted, with rationale |

**Completion rule:** Never infer completion from file creation, generated code, a successful-looking screen or an unexecuted test. Evidence is mandatory.

## Phase dashboard

| Phase | Name | Status | Detailed tracker |
|---|---|---|---|
| PSA-0 | Project Foundation | IN PROGRESS | [PSA-0 checklist](./docs/roadmap/PSA-0-FOUNDATION.md) |
| PSA-1 | Runtime and Application Skeleton | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-2 | Database and Persistence Foundation | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-3 | Identity and Access Foundation | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-4 | Academic Core | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-5 | Content and Academic Approval | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-6 | Media and Audio Learning | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-7 | Student and Enrolment | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-8 | Assessment and Academic Records | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-9 | Governance and Quality Operations | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-10 | Commercial and Communications | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-11 | Reporting, Reliability and Production Readiness | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |
| PSA-12 | External Readiness and Evolution | NOT STARTED | [Technical roadmap](./docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md#29-engineering-roadmap-and-execution-gates) |

## Current task snapshot

| Task ID | Short description | Status |
|---|---|---|
| PSA-0001 | Reconcile foundational documents | IN PROGRESS |
| PSA-0002 | Repository and branch strategy | PARTIAL |
| PSA-0003 | AGENTS.md | PASS |
| PSA-0004 | Architecture entry point | PASS |
| PSA-0005 | ADR template/register | PASS |
| PSA-0006 | Master roadmap/status tracking | IN PROGRESS |
| PSA-0007 | Pin toolchain versions | NOT STARTED |
| PSA-0008 | Formatting, lint and typecheck | NOT STARTED |
| PSA-0009 | Basic CI | NOT STARTED |

## Phase execution order

Follow the dependency-ordered phases in AU-PSA-001. Do not begin PSA-1 application implementation before PSA-0 exit criteria pass unless a specific prerequisite is explicitly authorized and tracked.

## Change log

| Date | Change |
|---|---|
| 2026-11-02 | Initial roadmap and PSA-0 tracker created; initial repository checked and documented |

## Project rules

- Every task has a stable Task ID.
- Keep completed tasks visible; never delete completed checklist rows.
- Update statuses only with evidence.
- Log blockers, deferred work and decisions.
- Do not mark an entire phase complete while any required task is not `PASS`.
- See [AGENTS.md](./AGENTS.md) for the complete engineering contract.
