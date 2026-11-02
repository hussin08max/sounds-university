# AGENTS.md — Engineering Rules

These rules apply to all developers, contributors, automated tools and AI coding agents working in this repository.

## 1. Before making changes

Read, in order:

1. `README.md`
2. `ROADMAP.md`
3. `PROJECT_STRUCTURE.md`
4. `ARCHITECTURE.md`
5. This `AGENTS.md`
6. The relevant foundational academic, governance, security or technical document.
7. The relevant ADRs and existing implementation.

Inspect the current branch, working tree, existing code and tests before editing. Do not assume that a task has not been started simply because this conversation is new.

## 2. Task discipline

Every implementation task must identify:

- Task ID from `ROADMAP.md`.
- Objective and user/institutional value.
- Authoritative source documents and ADRs.
- Scope and explicit exclusions.
- Dependencies and prerequisites.
- Expected files/modules.
- Domain rules and invariants.
- Security, privacy and accessibility requirements.
- Acceptance criteria.
- Required tests and verification commands.
- Documentation and roadmap updates.
- Migration, recovery and rollback considerations where relevant.

Work on the smallest complete task that can be safely verified. Do not silently expand scope.

## 3. Architectural rules

- Follow the approved architecture and document precedence.
- Use a modular monolith unless an accepted ADR authorizes another approach.
- Keep domain rules out of controllers, UI components and transport DTOs.
- Respect module ownership. Do not directly mutate another module's persistence tables.
- Use explicit application contracts for cross-module operations.
- Do not create speculative modules, tables, endpoints or abstractions.
- Do not create the entire logical data-model catalogue in one migration.
- Do not hard-code jurisdiction-specific credit, award, grading or legal rules before they are approved.
- Preserve academic version history and consequential decision history.
- Do not treat playback duration as proof of learning or competence.
- Do not let payment status alter academic outcomes.
- Do not publish academic content without the required approval state.
- Never represent the platform or institution as accredited, recognized or degree-authorized without verified legal authority and evidence.

## 4. Security and privacy

- Enforce authorization on the server/API, not only in the frontend.
- Apply least privilege and scoped permissions.
- Never commit secrets, credentials, tokens or private keys.
- Never put privileged secrets in client-side environment variables.
- Never use production personal/student data in local development or automated tests.
- Validate and authorize every access to restricted records and media.
- Do not expose original protected media through permanent public URLs.
- Do not log passwords, tokens, sensitive student records or private media URLs.
- Preserve audit history through ordinary application workflows.
- Treat external webhooks as untrusted until authenticated, verified and processed idempotently.
- Raise privacy, legal or security ambiguity instead of inventing a rule.

## 5. Code quality

- Prefer clear, maintainable, typed code over clever abstractions.
- Validate untrusted input at system boundaries.
- Handle expected failures explicitly.
- Keep dependencies purposeful and maintained.
- Pin runtime/tooling versions and commit the lockfile when package tooling is introduced.
- Do not upgrade unrelated dependencies as part of a narrow task.
- Add tests for success, failure, boundary and authorization cases appropriate to the change.
- Do not weaken or delete tests merely to obtain a passing build.

## 6. Documentation and progress tracking

- Update `ROADMAP.md` whenever task status changes.
- A task status must use the project's exact status vocabulary.
- Record verification evidence, date, commands and limitations.
- Update `PROJECT_STRUCTURE.md` when the actual repository structure changes.
- Update architecture docs when the implementation or an accepted decision materially changes.
- Create an ADR for material architectural decisions.
- Never mark a task `PASS` based only on code generation, file creation or visual appearance.
- Do not claim a command, test, build or deployment succeeded unless it was actually run and its result observed.

## 7. Required completion report

At the end of each task, provide:

```text
Task ID:
Status: PASS / PARTIAL / BLOCKED / FAIL / NOT VERIFIED

Objective:
Scope completed:
Files created or modified:
Dependencies changed:
Database migrations:
API changes:
Security and authorization:
Tests and commands executed:
Build / lint / typecheck:
Manual verification:
Documentation updated:
Evidence:
Known limitations:
Remaining risks:
Next task:
```

## 8. Status definitions

- `NOT STARTED`: no implementation work has begun.
- `IN PROGRESS`: work is actively underway.
- `BLOCKED`: work cannot proceed because a dependency or decision is missing.
- `PARTIAL`: some acceptance criteria are met, but the task is not complete.
- `PASS`: every acceptance criterion is met and supporting evidence is recorded.
- `NOT VERIFIED`: implementation may exist, but verification evidence is missing.
- `DEFERRED`: intentionally postponed with a recorded reason.
- `REJECTED`: explicitly not accepted, with rationale.

## 9. Git workflow

- Use short-lived task branches for implementation work.
- Use descriptive branch names, for example `chore/psa-0003-agent-rules`.
- Keep commits focused and use descriptive commit messages.
- Do not force-push shared branches.
- Do not commit directly to `main` for normal feature work.
- Use pull requests for review and integration.
- Keep secrets and local machine files out of commits.
- Do not rewrite repository history unless explicitly authorized.

## 10. When instructions conflict

Follow applicable law and approved institutional/academic governance first, then the document precedence defined in the technical architecture. If a conflict, missing policy or ambiguous authority affects the task, stop the affected part, document the issue and request a decision. Never resolve legal or academic ambiguity by guessing in code.
