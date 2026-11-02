# PLATFORM SOFTWARE ARCHITECTURE
## Permanent Technical Architecture, Domain Model, Security Model, Delivery Standards and Engineering Roadmap

**Document ID:** AU-PSA-001  
**Version:** 1.0  
**Status:** Foundational Technical Architecture — Proposed for formal adoption  
**Date:** 2026-11-02  
**Institution / working brand:** Sounds University (provisional brand; legal and trademark clearance pending)  
**Primary domain candidate:** `soundsuniversity.com` (subject to registration and ownership verification)  
**Document owner:** Platform Architecture Authority  
**Approval authority:** Institutional Founder / Executive Sponsor, with academic and security review  
**Review cycle:** At every material architecture change; formal review at least annually  
**Applies to:** All production software, data, infrastructure, integrations, developer workflows, deployment pipelines and technical operations of the University

**Companion foundational documents**
1. `UNIVERSITY_MASTER_BLUEPRINT.md`
2. `ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md`
3. `ACADEMIC_CURRICULUM_ARCHITECTURE.md`
4. `ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md`

---

# 0. Document Status, Authority and Change Control

## 0.1 Purpose of this document

This is the permanent technical reference architecture for the University platform. It translates the institution's academic, content and governance standards into an implementable software system.

It is intended to guide the project from the first repository commit through the first student cohort, later programmes, additional languages, external quality review, institutional growth and long-term operation.

It is not a one-time implementation plan and it is not a substitute for detailed engineering specifications. It defines the stable architectural boundaries, principles, decisions, constraints and quality gates from which detailed designs, database schemas, API contracts, user stories and code are derived.

## 0.2 Binding force

All developers, contractors, AI coding agents, designers and technical operators must follow this document unless a formally approved Architecture Decision Record (ADR) changes the relevant rule.

No implementation may silently contradict:
- Applicable law and regulator requirements once verified.
- Formally approved academic regulations and governance decisions.
- The four foundational institutional documents.
- This architecture and its approved ADRs.

Where a conflict exists, stop the affected implementation, record the conflict, identify its impact and obtain a decision from the appropriate authority. Do not resolve academic or legal ambiguity by guessing in code.

## 0.3 Architecture change control

A material architecture change requires an ADR containing:
- ADR ID and title.
- Status: Proposed / Accepted / Rejected / Superseded.
- Context and problem.
- Options considered.
- Decision and rationale.
- Consequences and trade-offs.
- Security, privacy and academic impact.
- Migration and rollback strategy.
- Approval owner and date.
- Documents and components affected.

Examples of material changes:
- Replacing the backend framework or database.
- Moving from modular monolith to distributed services.
- Changing identity or authorization architecture.
- Changing the academic data model or versioning model.
- Changing audio delivery, storage or protection.
- Introducing a new payment, identity, analytics or AI provider.
- Changing data residency or hosting jurisdiction.
- Changing how academic records or audit events are stored.

Small implementation choices that do not alter boundaries or long-term constraints may be documented in code review rather than an ADR.

## 0.4 Document precedence

1. Applicable law and regulator requirements.
2. Approved institutional statutes and academic regulations.
3. `ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md`.
4. `ACADEMIC_CURRICULUM_ARCHITECTURE.md`.
5. `ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md`.
6. `UNIVERSITY_MASTER_BLUEPRINT.md`.
7. This technical architecture.
8. Approved ADRs and detailed specifications, provided they do not conflict with higher authority.
9. Existing code, only where it remains compliant.

If the technical architecture and an academic policy appear to conflict, the academic policy is not automatically changed to fit the code. The technical design must be reconsidered.

---

# 1. Product and Institutional Context

## 1.1 Product definition

The platform is the digital operating system of an audio-first university. It supports:

- Institutional public information and academic catalogue.
- Academic structure and programme management.
- Academic content production, review, approval and publication.
- Student identity, enrolment and academic access.
- Audio-first learning and accessible learning resources.
- Formative and summative assessment.
- Academic progress and achievement records.
- Academic governance, quality assurance and evidence.
- Faculty, reviewers and academic staff operations.
- Student services and communication.
- Payments and access entitlements, where enabled.
- Institutional reporting, audit and compliance.

It is not merely a media player, course marketplace, content-management system or subscription website.

## 1.2 Product principles

1. Academic integrity before growth hacks.
2. Audio-first, not audio-only.
3. Learning outcomes before content volume.
4. Assessment evidence before completion claims.
5. Academic approval before publication.
6. Security and privacy by design.
7. Internationalisation from the first data model.
8. Accessible experiences across devices and connection conditions.
9. Evidence and auditability for consequential decisions.
10. Modular architecture without premature distributed-system complexity.
11. Operational simplicity and cost discipline.
12. No feature without a clear user, institutional or academic purpose.

## 1.3 Primary user groups

- Public visitor / prospective learner.
- Applicant, where formal applications are enabled.
- Student / learner.
- Academic adviser.
- Faculty member / instructor.
- Course coordinator.
- Subject matter expert.
- Content author.
- Academic reviewer.
- Assessment marker and moderator.
- Programme director.
- Department / college academic lead.
- Academic Council and committee members.
- Quality assurance officer.
- Academic registry officer.
- Student support officer.
- Finance / operations staff.
- Communications / marketing staff.
- Technology administrator.
- Security / audit personnel.
- External reviewer with restricted, time-bounded access.

A person may hold multiple roles, but permissions must be scoped and conflicts of interest must be enforced.

## 1.4 Product surfaces

The platform shall be logically separated into these surfaces:

1. **Public Website:** institutional identity, public catalogue, policies, admissions information, status disclosures and public learning pages.
2. **Student Portal:** learning, enrolment, assessments, progress, records and support.
3. **Academic Workspace:** programme, course, content, assessment and teaching operations.
4. **Governance Workspace:** committee operations, approvals, evidence, risks, actions and quality reports.
5. **Operations Console:** identity administration, finance operations, support, configuration and technical operations.
6. **Platform API:** authenticated, versioned application interface.
7. **Background Processing:** media processing, notifications, reports, imports, exports and scheduled tasks.

These are logical products, not necessarily separate applications or deployables at launch.

---

# 2. Architecture Principles and Non-Negotiable Constraints

## 2.1 System design principles

- **Domain-driven modularity:** modules own their business rules and data boundaries.
- **Modular monolith first:** one deployable backend with explicit internal modules.
- **Contract-first APIs:** stable OpenAPI contracts and typed client generation.
- **Database integrity:** enforce important invariants in the database and domain layer.
- **Server-side authorization:** UI visibility is never a security boundary.
- **Immutable history:** preserve academic versions and consequential decisions.
- **Explicit state machines:** workflows must use valid transitions, not arbitrary status strings.
- **Idempotent operations:** retries must not create duplicate payments, enrolments or decisions.
- **Observable operations:** logs, metrics, traces and audit events must be distinct and useful.
- **Progressive complexity:** add infrastructure only when evidence justifies it.
- **Portability:** avoid unnecessary vendor lock-in, especially for academic data and media.
- **Recoverability:** backups are meaningful only when restoration is tested.
- **Privacy minimisation:** collect only what is required and restrict access by purpose.
- **Accessibility:** accessibility is a product requirement, not a final styling task.
- **Internationalisation:** language, locale, direction, time zone and formatting are separate concerns.

## 2.2 Explicit constraints

The following are prohibited:
- Direct public access to original protected audio objects.
- Storing raw card details or payment credentials.
- Using a frontend role check as the only authorization control.
- Editing grades or academic history without an auditable correction.
- Hard-deleting referenced academic entities through normal application flows.
- Publishing unapproved academic content.
- Treating audio listening time as proof of learning or competence.
- Treating automated AI output as final academic judgement.
- Creating microservices solely to appear enterprise-grade.
- Building generic abstractions before a real second use case exists.
- Storing secrets in source control or client-side environment variables.
- Using production student data in development or test environments.
- Allowing developers to bypass academic workflow controls through ordinary admin screens.
- Hard-coding a national credit framework, qualification level or award type before jurisdictional approval.

---

# 3. Target Architecture at a Glance

## 3.1 Logical architecture

```text
                         PUBLIC INTERNET
                                |
                         DNS / CDN / WAF
                                |
                    Reverse Proxy / TLS Edge
                                |
          +---------------------+----------------------+
          |                     |                      |
    Public Website        Authenticated Apps      API Gateway Layer
    (Next.js)              (Next.js)               (NestJS API)
          |                     |                      |
          +---------------------+----------------------+
                                |
                       APPLICATION LAYER
                                |
        +-----------------------------------------------------+
        |             MODULAR MONOLITH (NestJS)                |
        |                                                     |
        | Identity & Access       Academic Structure          |
        | Student & Enrolment     Programme & Curriculum      |
        | Content & Sources       Media & Audio Delivery       |
        | Learning & Progress     Assessment & Results        |
        | Academic Records        Governance & Quality        |
        | Faculty & Staff         Student Support             |
        | Payments & Entitlements Notifications & Messaging   |
        | Analytics & Reporting   Audit & Compliance           |
        | Integrations            Platform Configuration      |
        +-----------------------------------------------------+
                |             |             |
                |             |             |
          PostgreSQL        Redis       Object Storage
          system of        cache /      private media,
          record           jobs         documents
                |             |             |
                +-------------+-------------+
                              |
                     BACKGROUND WORKERS
                              |
             Media processing / reports / email /
             scheduled jobs / imports / analytics
                              |
                      External Providers
           Payment / Email / SMS / Identity / Analytics
```

## 3.2 Deployment topology

Initial production should use a small number of clearly separated runtime components:

- Next.js web application.
- NestJS API application.
- Background worker process using the same backend codebase.
- PostgreSQL database.
- Redis, when background jobs or caching are enabled.
- Private S3-compatible object storage.
- Reverse proxy and TLS termination.
- CDN/WAF where commercially and operationally appropriate.
- Centralised logs, uptime monitoring and error reporting.

The API and worker may share one repository and domain code, but must run as separate processes so long-running media and reporting tasks do not block interactive API requests.

## 3.3 Initial deployment principle

Start with a reliable, maintainable deployment rather than a complex cloud topology. The architecture must permit later movement to managed databases, separate worker nodes, dedicated media processing, CDN delivery and additional application replicas without rewriting academic business rules.

---

# 4. Technology Standards and Approved Baseline

Technology selections below are the default baseline. A change requires an ADR and evidence that the alternative improves reliability, security, maintainability or cost.

| Layer | Baseline | Notes |
|---|---|---|
| Web frontend | Next.js + React + TypeScript | Public site and authenticated workspaces |
| UI styling | Tailwind CSS + shadcn/ui or equivalent accessible primitives | Reusable design system |
| Backend | NestJS + TypeScript | Modular monolith |
| API style | REST + OpenAPI | Versioned public/internal contracts |
| Database | PostgreSQL | Primary source of truth |
| ORM / migrations | Prisma | Schema and migration management |
| Cache / queue backend | Redis | Introduce when required |
| Background jobs | BullMQ | Worker queues and retries |
| File storage | Private S3-compatible object storage | Media and controlled documents |
| Audio delivery | HLS audio or equivalent segmented delivery | Protected delivery; no public origin |
| Edge / reverse proxy | Nginx or managed equivalent | TLS, routing, limits |
| Runtime | Supported Node.js LTS | Pin exact supported major version |
| Package manager | pnpm | Lockfile committed |
| Monorepo orchestration | pnpm workspaces; Turborepo only if useful | Avoid unnecessary build tooling |
| Testing | Vitest/Jest, Supertest, Playwright | Unit, integration, end-to-end |
| API documentation | OpenAPI / Swagger | Generated from backend contracts |
| Error monitoring | Sentry or equivalent | Provider selection via ADR |
| Observability | Structured logs + metrics + traces | OpenTelemetry-compatible direction |
| CI | GitHub Actions or equivalent | Automated quality gates |
| Containers | Docker | Reproducible local and production environments |
| Infrastructure | Linux server initially | Infrastructure as code introduced as complexity grows |

## 4.1 Version policy

- Use supported stable releases, not experimental releases, for production foundations.
- Pin runtime and package manager versions.
- Commit lockfiles.
- Upgrade through planned dependency maintenance.
- Review security advisories and dependency health.
- Avoid unmaintained libraries for authentication, cryptography, payment or media protection.
- Document major framework upgrades in ADRs.

## 4.2 Why modular monolith

The University needs strong internal separation, not immediate network separation.

A modular monolith provides:
- One deployment and simpler operations.
- Strong module boundaries.
- Easier transactions for academic workflows.
- Lower infrastructure cost.
- Less distributed tracing and failure complexity.
- A future extraction path if a module genuinely needs independent scaling or release.

Microservices may be considered only when a measurable need exists, such as independent scaling, isolation, separate team ownership, distinct availability requirements or regulatory boundaries. A service extraction must preserve domain ownership and data contracts.

---

# 5. Repository and Codebase Architecture

## 5.1 Recommended repository shape

```text
sounds-university/
├── apps/
│   ├── web/                    # Next.js public and authenticated surfaces
│   ├── api/                    # NestJS HTTP API
│   └── worker/                 # Background worker entry point
│
├── packages/
│   ├── api-client/             # Generated or typed API client
│   ├── contracts/              # Shared API schemas and DTO contracts
│   ├── config/                 # Shared lint, TypeScript and tooling config
│   ├── design-system/          # Shared UI primitives and tokens
│   ├── i18n/                   # Locale metadata and translation utilities
│   ├── observability/          # Logging and telemetry helpers
│   └── test-utils/             # Test fixtures and helpers
│
├── docs/
│   ├── architecture/
│   │   ├── PLATFORM_SOFTWARE_ARCHITECTURE.md
│   │   ├── ADR/
│   │   ├── diagrams/
│   │   └── threat-models/
│   ├── academic/
│   ├── governance/
│   ├── security/
│   ├── operations/
│   ├── api/
│   └── roadmap/
│
├── infra/
│   ├── docker/
│   ├── nginx/
│   ├── scripts/
│   └── deployment/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed/
│
├── tests/
│   ├── e2e/
│   ├── security/
│   └── architecture/
│
├── .github/
│   └── workflows/
│
├── AGENTS.md
├── README.md
├── ROADMAP.md
├── PROJECT_STRUCTURE.md
├── ARCHITECTURE.md
├── SECURITY.md
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

This is a target structure, not a command to create every folder immediately. Create folders when their first real implementation exists.

## 5.2 Backend module structure

Each NestJS domain module should follow a consistent internal structure:

```text
modules/
  academic-programmes/
    domain/
      entities/
      value-objects/
      events/
      policies/
      errors/
    application/
      commands/
      queries/
      handlers/
      services/
    infrastructure/
      persistence/
      repositories/
      integrations/
    presentation/
      http/
        controllers/
        dto/
    tests/
```

Rules:
- Domain rules must not depend on NestJS controllers.
- Controllers validate transport input and call application use cases.
- Application services coordinate domain behaviour and transactions.
- Repositories encapsulate persistence.
- Cross-module access occurs through exported application contracts, not by importing another module's internal Prisma queries.
- Shared code must remain small; do not create a generic `common` dumping ground.

## 5.3 Frontend structure

```text
apps/web/src/
  app/
    (public)/
    (auth)/
    (student)/
    (academic)/
    (governance)/
    (operations)/
  components/
    ui/
    layout/
    forms/
    media/
  features/
    identity/
    catalogue/
    learning/
    assessments/
    academic-records/
    governance/
    support/
  lib/
    api/
    auth/
    i18n/
    accessibility/
  locales/
    en/
    ar/
  styles/
```

Feature components should not contain academic policy or authorization logic that belongs on the server.

---

# 6. Domain Boundaries and Module Ownership

## 6.1 Bounded contexts

| Module | Owns | Must not own |
|---|---|---|
| Identity & Access | Users, credentials integration, sessions, MFA state, roles, permissions | Academic outcomes |
| People & Organisation | Staff profiles, organisational units, affiliations | Authentication secrets |
| Academic Structure | Colleges, departments, programmes, terms, courses, units, lessons metadata | Student payment transactions |
| Curriculum & Qualifications | PLOs, CLOs, level descriptors, credit/workload rules, curriculum maps | Media file bytes |
| Content & Sources | Lesson content, source records, claim-source maps, review versions, rights evidence | Playback session entitlement |
| Media & Audio | Media assets, renditions, processing, manifests, playback authorisation | Academic approval decisions |
| Student & Enrolment | Student profile, applications, enrolment, course registrations | Final grading policy |
| Learning & Progress | Learning activities, progress checkpoints, completion calculations | Award authority |
| Assessment | Assessments, question banks, attempts, marking, moderation | Payment provider state |
| Academic Records | Ratified results, progression decisions, transcripts, awards where authorised | Raw content authoring |
| Governance & Quality | Committees, decisions, delegations, reviews, risks, actions, evidence | Student password/session data |
| Faculty & Teaching | Teaching assignments, workload, teaching groups, academic responsibilities | Staff payroll |
| Student Support | Cases, service requests, advising records, complaints routing | Academic appeal adjudication unless delegated |
| Payments & Entitlements | Orders, payment intents/references, refunds, access grants | Raw card data |
| Notifications | Templates, delivery attempts, preferences, provider adapters | Academic decision making |
| Analytics & Reporting | Aggregated metrics, event definitions, reports | Authoritative academic records |
| Audit & Compliance | Append-only audit events, access records, retention workflows | Editable business state |
| Integrations | External provider adapters, webhooks, sync jobs | Core domain rules |
| Platform Configuration | Feature flags, system settings, service configuration | Academic policy without approval |

## 6.2 Module ownership rules

- Each module owns its tables and domain invariants.
- Other modules must not directly mutate its tables.
- Cross-module operations use application interfaces and explicit events.
- A module may read another module's published query contract where necessary.
- Shared database does not mean shared ownership.
- A transaction may span modules only through a documented application use case; avoid hidden cross-module transactions.
- Database foreign keys may cross modules where they protect integrity, but code ownership remains explicit.

## 6.3 Initial module activation

Not every module must be fully built for the first release. The first implementation should prioritise:

1. Identity & Access.
2. Academic Structure.
3. Curriculum & Qualifications foundations.
4. Content & Sources.
5. Media & Audio.
6. Student & Enrolment.
7. Learning & Progress.
8. Assessment.
9. Academic Records foundations.
10. Governance & Quality foundations.
11. Audit & Compliance.
12. Notifications.

Payments, advanced analytics, research management, complex external integrations and multi-campus functions can be staged according to the first programme's actual needs.

---

# 7. Core Academic Domain Model

## 7.1 Canonical hierarchy

The canonical academic hierarchy follows the curriculum architecture:

```text
University
  └── College
       └── Department
            └── Programme
                 └── Academic Level / Stage
                      └── Term
                           └── Course
                                └── Unit
                                     └── Lesson
```

Not every institution uses the same hierarchy. The model must allow approved variations without allowing arbitrary, invalid nesting.

## 7.2 Academic entities

Core entities include:
- Institution.
- College.
- Department.
- Programme.
- ProgrammeVersion.
- ProgrammeEducationalAim.
- ProgrammeLearningOutcome (PLO).
- QualificationFrameworkMapping.
- AcademicLevelDescriptor.
- Term / AcademicPeriod.
- Course.
- CourseVersion.
- CourseLearningOutcome (CLO).
- CurriculumMap.
- CurriculumMapEntry.
- Unit.
- UnitVersion where needed.
- Lesson.
- LessonVersion.
- LearningActivity.
- AssessmentBlueprint.
- PrerequisiteRule.
- CreditRule and WorkloadModel.
- AcademicApproval.
- AcademicChangeRequest.

## 7.3 Stable identity and versioning

Separate the stable identity of an academic object from its approved versions.

Example:
- `Course` identifies the continuing academic course.
- `CourseVersion` represents a particular approved specification effective during a defined period.
- `Lesson` identifies the continuing lesson concept.
- `LessonVersion` stores a particular script/content/source set and approval status.

Student enrolments, assessments, progress records and transcripts must reference the exact version applicable to the learner.

Never overwrite an approved historical course or lesson in a way that changes what an earlier cohort was taught or assessed against.

## 7.4 Version status model

Recommended controlled states:

`DRAFT → IN_REVIEW → CHANGES_REQUESTED → APPROVED → EFFECTIVE → SUPERSEDED / WITHDRAWN`

Publication state is separate from academic approval state. A version may be academically approved but not yet publicly or student-visible because its effective date has not arrived or required external permission is pending.

## 7.5 Academic rules are data plus policy

Do not hard-code as universal constants:
- Credit values.
- Qualification levels.
- Award types.
- Grading scales.
- Pass marks.
- Academic calendar.
- Reassessment limits.
- Progression thresholds.
- Transfer credit rules.
- RPL rules.

These are governed configuration with version, scope, effective dates and approval evidence. Until jurisdiction and institutional rules are decided, use explicitly provisional configuration and prevent formal awards or claims that depend on unresolved rules.

---

# 8. Content, Sources and Academic Media Model

## 8.1 Content model

The Content module must support:
- Lesson brief and learning objectives.
- Script and transcript.
- Key terms and definitions.
- Examples and misconceptions.
- Assessment alignment.
- Source register.
- Claim-to-source mapping.
- Rights and licensing records.
- Author and reviewer.
- Review checklist.
- Translation and localisation status.
- Version and effective date.
- Academic approval and publication records.

## 8.2 Source integrity

Every source record should include:
- Stable source ID.
- Title and authors.
- Institution or publisher.
- Source type.
- Canonical URL or DOI/ISBN/identifier.
- Edition/version and publication/update dates.
- Exact location supporting the claim.
- Access date.
- Licence and reuse rights.
- Verification status and reviewer.

A source being listed does not prove that it supports every claim in the lesson. The claim-to-source mapping must be explicit for important academic claims.

## 8.3 Rights management

Before publication, record the basis on which content and media may be used:
- Original institutional work.
- Public domain.
- Creative Commons or other open licence.
- Licensed third-party content.
- Permission granted.
- Other lawful basis approved by the institution.

The platform must record attribution and licence conditions where required. A file upload is not proof of permission to use it.

## 8.4 Audio asset model

Separate:
- `MediaAsset`: logical media item.
- `MediaSourceFile`: original uploaded file and checksum.
- `MediaRendition`: encoded output at a particular codec/bitrate.
- `MediaManifest`: HLS or equivalent manifest.
- `MediaProcessingJob`: processing status and logs.
- `PlaybackSession`: short-lived authorised playback context.
- `MediaAccessGrant`: entitlement linking a learner to permitted media.

Audio assets are not public academic records and must be stored in private object storage.

## 8.5 Audio quality and accessibility

For each published audio lesson, the system should support:
- Transcript.
- Language and locale.
- Duration.
- Speaker/pronunciation review where relevant.
- Playback speed.
- Resume position.
- Keyboard-accessible controls.
- Screen-reader labels.
- Low-bandwidth delivery profile where feasible.
- Optional downloadable transcript if rights and policy allow.
- Captions or text alternatives for any meaningful non-speech audio information.

Audio-only delivery must not prevent students with hearing disabilities from accessing equivalent learning information.

---

# 9. Learning Experience and Progress Model

## 9.1 Learning activity is not the same as completion

The platform must distinguish:
- Content access.
- Playback started.
- Playback progress.
- Lesson activity completed.
- Formative practice completed.
- Assessment submitted.
- Outcome demonstrated.
- Course requirements satisfied.
- Programme requirements satisfied.
- Award eligibility confirmed.

A listening percentage alone must never trigger an academic pass or qualification.

## 9.2 Progress records

Recommended records:
- LearningSession.
- PlaybackCheckpoint.
- LessonActivityAttempt.
- LearningObjectiveEvidence.
- CourseProgressSnapshot.
- EnrolmentCourse.
- AssessmentCompletion.
- CompletionRuleEvaluation.

Progress is derived from approved rules and evidence. Where rules change, historical decisions must retain the rule version used.

## 9.3 Resume and synchronization

Playback position should be saved periodically and on pause/exit where possible. The API must handle:
- Out-of-order checkpoint events.
- Duplicate requests.
- Offline/poor connectivity retries.
- Multiple devices.
- Session expiration.
- Concurrent playback policies.

Use event timestamps and monotonic progress logic carefully. A later-arriving older checkpoint must not move a learner's resume position backwards unless the learner explicitly seeks backwards and the product intends that behaviour.

## 9.4 Offline support

Do not promise offline protected audio in the first release unless the security, licensing, expiry and revocation model is designed. Offline access materially changes content protection and device management.

---

# 10. Assessment and Academic Records Architecture

## 10.1 Assessment module

The Assessment module owns:
- Assessment definitions and versions.
- Questions and question versions.
- Rubrics and grading criteria.
- Assessment attempts.
- Responses and submissions.
- Marking assignments.
- Marker decisions.
- Moderation samples and findings.
- Feedback records.
- Reassessment and resubmission rules.
- Academic integrity referrals.

## 10.2 Assessment workflow

```text
ASSESSMENT DRAFT
      ↓
ACADEMIC REVIEW
      ↓
MODERATION / APPROVAL
      ↓
SCHEDULED
      ↓
OPEN
      ↓
SUBMITTED
      ↓
MARKING
      ↓
MODERATION
      ↓
RATIFICATION (where required)
      ↓
RELEASED TO STUDENT
      ↓
APPEAL WINDOW / FINAL
```

Not all assessments require every state, but the applicable workflow must be explicit and policy-driven.

## 10.3 Academic Records boundary

The Academic Records module is the authoritative source for ratified academic outcomes. It consumes approved marking and board decisions but does not simply mirror mutable assessment rows.

It should own:
- Ratified result.
- Course completion decision.
- Progression decision.
- Award eligibility decision.
- Transcript entry.
- Award record where legally authorised.
- Academic correction and amendment history.
- Verification record.

A result amendment must preserve the previous value, reason, authority, evidence, effective date and actor.

## 10.4 Awards and credentials

Credential issuance must be disabled or clearly marked non-formal until the institution has the legal authority and approved award rules.

When enabled, credentials should be:
- Verifiable.
- Versioned.
- Linked to an authorised award decision.
- Protected against unauthorised alteration.
- Revocable or supersedable through a documented process.
- Clear about the issuing legal entity and exact award status.

Do not label a completion badge as a degree, accredited qualification or formal credit unless authorised.

---

# 11. Identity, Authentication and Authorization

## 11.1 Identity architecture

Use one canonical user identity across platform surfaces. Do not create separate student, staff and administrator login silos.

A person may have:
- One User identity.
- One or more role assignments.
- One or more organisational affiliations.
- One or more academic relationships.
- Different permissions in different contexts.

Authentication provider choice must be made through an ADR after evaluating security, maintenance, MFA, account recovery, session management, social login requirements and integration with the Next.js/NestJS split.

## 11.2 Authentication requirements

- Secure password hashing using a modern adaptive algorithm if local passwords are used.
- MFA for privileged roles.
- Email verification where appropriate.
- Secure account recovery.
- Session rotation and revocation.
- Protection against brute force and credential stuffing.
- Rate limiting and anomaly monitoring.
- Secure cookies: HttpOnly, Secure, appropriate SameSite.
- CSRF protection where cookie-based authentication requires it.
- Short-lived access tokens if token architecture is used.
- Refresh token rotation and reuse detection if applicable.
- No secrets or privileged tokens in browser storage.

## 11.3 Authorization model

Use RBAC combined with contextual attributes (RBAC + scoped ABAC).

RBAC answers: what general role does this person hold?

ABAC answers: in which programme, course, committee, cohort, record or time window may the action occur?

Example:
- A Course Coordinator may edit a course only when assigned to that course.
- A reviewer may review only the version assigned to them.
- An external reviewer may access only the evidence package and time window granted.
- A student may access only their own records and enrolled learning.
- A committee member may view papers for committees in which they are an active member, subject to confidentiality and recusal rules.

## 11.4 Permission design

Permissions must be action-specific:
- `programme.read`
- `programme.create`
- `programme.submit`
- `programme.review`
- `programme.approve`
- `programme.publish`
- `assessment.mark`
- `assessment.moderate`
- `academic_record.correct`
- `governance.decision.finalize`
- `evidence.read.restricted`
- `user.role.assign`

Do not grant broad `admin:*` permissions to routine operational users.

## 11.5 Separation of duties

Enforce:
- Authors cannot approve their own high-risk content where independent review is required.
- Programme proposers cannot be sole approvers.
- Markers cannot decide their own grade appeals.
- Developers cannot alter student results through ordinary application roles.
- System administrators cannot erase audit history.
- Commercial roles cannot change academic decisions.
- A user with a conflict must be excluded from the relevant decision action.

## 11.6 Authorization enforcement

Every sensitive API operation must:
1. Authenticate the actor.
2. Resolve role and scope.
3. Check permission.
4. Check resource relationship.
5. Check workflow state.
6. Check delegation and effective date.
7. Check conflict/recusal rules where applicable.
8. Record the action in audit history.
9. Execute atomically where needed.

Frontend route guards are usability features only. The API remains authoritative.

---

# 12. Governance and Quality Assurance Software

## 12.1 Governance module scope

The module must support:
- Governance bodies and committees.
- Terms of Reference and versions.
- Membership and appointment periods.
- Meetings and attendance.
- Agenda items and papers.
- Conflict-of-interest declarations.
- Quorum rules.
- Decisions and rationale.
- Delegations and authority limits.
- Conditions and actions.
- Academic policy register and versions.
- Programme/course/content approval decisions.
- Annual and periodic reviews.
- External reviewers and reports.
- Academic risks and incidents.
- Corrective actions and evidence.
- Academic quality reports.

## 12.2 Decision integrity

A decision record must capture:
- Decision ID.
- Decision category.
- Authority and delegation.
- Meeting or decision route.
- Eligible members and attendance.
- Quorum result.
- Conflicts and recusals.
- Evidence considered.
- Decision and conditions.
- Rationale.
- Effective date.
- Review/appeal route.
- Follow-up actions.
- Immutable audit reference.

## 12.3 Workflow engine

Do not introduce a general-purpose workflow engine in the first release unless requirements justify it. Implement explicit domain state machines with transition services and policy checks.

A workflow transition must record:
- Current state.
- Requested transition.
- Actor.
- Permission and scope.
- Preconditions.
- Resulting state.
- Timestamp.
- Evidence and reason where required.

If workflow complexity later spans many modules and requires non-developer configuration, evaluate a workflow engine through ADR.

---

# 13. API Architecture and Integration Contracts

## 13.1 API principles

- RESTful resource-oriented endpoints for core application operations.
- Base path versioning, e.g. `/api/v1`.
- OpenAPI generated and reviewed.
- Consistent error format.
- Request validation at boundaries.
- Pagination and filtering standards.
- Idempotency keys for sensitive retriable commands.
- Explicit rate limits.
- No internal database models exposed directly as public API contracts.
- No sensitive information in URLs or query strings.
- Stable deprecation policy.

## 13.2 Example API areas

```text
/api/v1/auth
/api/v1/users
/api/v1/students
/api/v1/staff
/api/v1/catalogue
/api/v1/colleges
/api/v1/departments
/api/v1/programmes
/api/v1/courses
/api/v1/lessons
/api/v1/content-reviews
/api/v1/media
/api/v1/playback-sessions
/api/v1/enrolments
/api/v1/learning-progress
/api/v1/assessments
/api/v1/submissions
/api/v1/marking
/api/v1/academic-records
/api/v1/governance
/api/v1/quality
/api/v1/evidence
/api/v1/complaints
/api/v1/appeals
/api/v1/payments
/api/v1/notifications
/api/v1/reports
```

This is a logical inventory, not a requirement to create empty endpoints.

## 13.3 API error model

Errors should include:
- Stable machine-readable code.
- Safe human-readable message.
- Correlation/request ID.
- Field validation details where appropriate.
- Retryability indicator where useful.

Never return stack traces, SQL errors, internal paths, secrets or confidential records to clients.

## 13.4 External integration pattern

All third-party integrations must be behind provider adapters. Domain modules must depend on an internal interface, not directly on a vendor SDK throughout the codebase.

Examples:
- PaymentProvider.
- EmailProvider.
- SMSProvider.
- ObjectStorageProvider.
- IdentityProvider.
- AnalyticsProvider.

Webhooks must be authenticated, signature-verified, idempotent and logged. Never trust a browser redirect as proof that a payment succeeded.

---

# 14. Database Architecture and Data Governance

## 14.1 Database principles

PostgreSQL is the authoritative transactional database.

- Use relational constraints for core integrity.
- Use transactions for multi-step academic decisions.
- Use migrations for every schema change.
- Index real query patterns.
- Avoid premature denormalisation.
- Use JSONB only for genuinely variable metadata, not to hide an unclear relational model.
- Store large media and documents outside PostgreSQL.
- Use UTC timestamps in storage and explicit timezone conversion in presentation.
- Use stable IDs and explicit business identifiers.
- Never reuse a deleted academic code for a different historical entity.

## 14.2 Identity and ID strategy

Use opaque, non-sequential public identifiers for externally exposed entities. UUIDv7 or another approved globally unique strategy may be selected by ADR. Academic codes such as `CS101` are human-readable business identifiers and must not be used as primary database keys.

## 14.3 Versioning strategy

Version controlled:
- Academic policies.
- Programmes and curriculum maps.
- Courses and course outcomes.
- Lessons and scripts.
- Assessments and rubrics.
- Grading and progression rules.
- Committee ToR.
- Approval conditions.
- Public catalogue snapshots where needed.

A version must have:
- Version identifier.
- Status.
- Created by and date.
- Review/approval metadata.
- Effective start/end dates where applicable.
- Change summary.
- Parent/superseding version relationship.

## 14.4 Data classification

| Class | Examples | Minimum handling |
|---|---|---|
| Public | Public catalogue, published policies | Integrity and availability controls |
| Internal | Draft content, routine operational notes | Authenticated access |
| Confidential | Staff records, non-public committee papers | Role and scope restriction |
| Restricted | Student results, appeals, misconduct, identity documents | Least privilege, enhanced audit, encryption and access review |
| Secret | Password hashes, tokens, signing keys, provider credentials | Dedicated secret management; never ordinary application display |

## 14.5 Data retention and deletion

Retention periods must be set in a separate approved policy after legal jurisdiction is selected.

The platform must support:
- Retention schedules.
- Legal holds.
- Archival.
- Secure deletion where lawful.
- De-identification or aggregation where appropriate.
- Audit of retention actions.

Do not keep all personal data indefinitely merely because storage is inexpensive.

## 14.6 Backups and recovery

- Automated database backups.
- Point-in-time recovery where supported and justified.
- Encrypted backup storage.
- Separate backup credentials and access.
- Object storage versioning or equivalent protection for critical assets.
- Documented recovery objectives.
- Regular restoration tests.
- Backup monitoring and failure alerts.

A backup that has never been restored is unverified.

---

# 15. Audio Streaming and Content Protection Architecture

## 15.1 Core requirements

- Original media stored in private object storage.
- No public bucket or permanent public object URL.
- Uploads handled through controlled, short-lived upload permissions.
- Media processing performed asynchronously.
- Validate file type, size, duration and actual media signature.
- Scan uploaded files where appropriate.
- Generate standardised renditions.
- Deliver audio through short-lived authorised playback sessions.
- Enforce enrolment/entitlement and content publication state before playback.
- Log suspicious access patterns.
- Support revocation and expiry.

## 15.2 Processing pipeline

```text
Author Upload
    ↓
Authenticated Upload Permission
    ↓
Private Quarantine / Original Storage
    ↓
File Validation + Security Checks
    ↓
Media Processing Job
    ↓
Audio Renditions + HLS Segments
    ↓
Quality / Metadata Validation
    ↓
Academic Content Approval Check
    ↓
Ready for Publication
    ↓
Private Origin + CDN/Edge Delivery
    ↓
Short-Lived Playback Session
```

## 15.3 Playback authorization

Before issuing a playback session:
1. Authenticate the user.
2. Confirm the lesson version is published/effective.
3. Confirm the user has access through enrolment or approved entitlement.
4. Confirm no relevant suspension or access restriction.
5. Apply concurrency and rate controls.
6. Create a short-lived playback grant.
7. Return a signed, time-limited manifest/segment access mechanism.
8. Record the session and relevant security events.

## 15.4 Protection limitations

No browser-delivered audio can be made impossible to record. The objective is to prevent casual direct downloading, public sharing of origin files and unauthorised automated scraping, while making misuse detectable and access revocable.

Do not promise “100% download prevention”. DRM may be evaluated later if licensing, content value and user devices justify its cost and complexity.

## 15.5 CDN and cache rules

- Private media must not be cached as publicly reusable content.
- Signed delivery and origin access controls must be validated.
- Cache keys must not leak one user's authorisation into another user's session.
- Revocation and expiry behaviour must be tested.
- Sensitive API responses must not be cached publicly.

---

# 16. Internationalisation, Localisation and Accessibility

## 16.1 Internationalisation baseline

The first release language may be English, but the data model and UI must be multilingual from the start.

Support:
- BCP 47 language tags.
- Locale-aware formatting.
- RTL and LTR layout.
- Per-language fonts and typography.
- Translated UI messages.
- Translated academic metadata.
- Language-specific lesson scripts and audio assets.
- Translation review state.
- Per-language availability.
- Locale-aware dates, numbers, currencies and time zones.

## 16.2 Content language model

Do not create a duplicate academic course merely to translate it.

Use a stable academic concept with language-specific versions/translations. Distinguish:
- Original language.
- Translation language.
- Translation version.
- Translation reviewer.
- Audio language and speaker asset.
- Translation completeness.
- Academic equivalence status.

A translation is not automatically academically equivalent. It may require subject and language review.

## 16.3 Accessibility

Target WCAG 2.2 AA as the product design and testing baseline, subject to applicable legal requirements.

Include:
- Keyboard navigation.
- Visible focus.
- Semantic headings and landmarks.
- Screen-reader labels and announcements.
- Contrast and text resizing.
- Accessible forms and error messages.
- Transcript and text alternatives.
- Accessible player controls.
- Reduced motion support.
- Captions for meaningful video or audiovisual media.
- Accessible assessment interactions.
- Reasonable adjustment support.

Accessibility testing must be part of feature acceptance, not a one-time audit.

---

# 17. Security Architecture and Threat Model

## 17.1 Security objectives

Protect:
- Student identity and records.
- Assessment content and submissions.
- Academic decisions and audit history.
- Faculty and staff information.
- Private media and intellectual property.
- Payment references and entitlement state.
- Governance papers and evidence.
- Platform availability and integrity.

## 17.2 Security-by-design controls

- Threat modelling for high-risk features.
- Secure coding standards.
- Dependency scanning.
- Static analysis and secret scanning.
- Input validation and output encoding.
- SQL injection protection through safe parameterised access.
- XSS and CSRF controls.
- SSRF protections for URL-fetching features.
- Rate limiting and abuse detection.
- Secure file upload validation.
- Malware scanning where appropriate.
- Least-privilege service accounts.
- Secret management.
- Encryption in transit and at rest.
- MFA for privileged access.
- Production access review.
- Incident response and breach procedures.
- Regular backup restoration tests.
- Penetration testing before high-stakes production use and periodically thereafter.

## 17.3 Threat scenarios to test

- Student accesses another student's transcript.
- Course author approves own restricted content.
- Suspended user reuses a stale session.
- User changes a programme ID to access another programme.
- Publicly shared audio URL remains valid indefinitely.
- Webhook replay creates duplicate payment or entitlement.
- Developer modifies a grade directly.
- Administrator deletes or alters audit evidence.
- External reviewer accesses unrelated committee papers.
- Malicious uploaded file reaches media processing.
- Brute-force attack compromises privileged account.
- Cross-site scripting steals session or performs actions.
- Incorrect cache configuration leaks restricted content.
- Database backup is exposed.
- AI integration sends confidential student data to an unapproved provider.

## 17.4 Security incident handling

The incident process must define:
- Detection and severity classification.
- Containment.
- Evidence preservation.
- Internal escalation.
- Legal/regulatory notification assessment.
- Student/staff communication.
- Recovery and validation.
- Root-cause analysis.
- Corrective action and verification.

Security incident records must be access-restricted and auditable.

---

# 18. Privacy and Personal Data Protection

## 18.1 Privacy principles

- Purpose limitation.
- Data minimisation.
- Accuracy.
- Storage limitation.
- Confidentiality and integrity.
- Accountability.
- Privacy by default.
- Transparent student notices.
- Controlled processor relationships.
- Cross-border transfer review.

## 18.2 Sensitive data

Treat academic records, identity documents, complaints, appeals, misconduct, disability accommodations and safeguarding data as restricted. Do not collect sensitive categories merely because a future feature might use them.

## 18.3 AI and external processors

Before sending data to an AI or external processing provider:
- Identify the purpose.
- Identify data categories.
- Verify provider terms and retention settings.
- Determine whether personal or confidential data is included.
- Apply minimisation or de-identification.
- Obtain required legal approvals and notices.
- Log the integration and its approved scope.

## 18.4 Privacy rights workflows

After jurisdiction selection, implement the rights and response procedures required by applicable law, including access, correction, deletion, restriction, portability or objection where relevant. These workflows must not erase academic records that must lawfully be retained; legal obligations and rights must be reconciled through documented review.

---

# 19. Payments, Entitlements and Commercial Separation

## 19.1 Commercial boundary

Payment status and academic status are separate domains.

A payment can grant access to learning content under approved terms. It cannot:
- Change grades.
- Waive academic requirements.
- Guarantee completion.
- Grant formal credit without academic rules.
- Alter an academic decision.

## 19.2 Payment architecture

- Use a compliant external payment provider.
- Never store card numbers or security codes.
- Store provider references and transaction state only.
- Verify signed webhooks.
- Use idempotency keys.
- Reconcile payment provider state.
- Record refunds, chargebacks and disputes.
- Separate payment transactions from access entitlements.

## 19.3 Entitlement model

An entitlement represents permission to access a defined resource for a defined period or condition.

Examples:
- Free public course access.
- Paid course access.
- Institutional sponsorship.
- Scholarship or fee waiver.
- Subscription access.
- Staff/reviewer preview access.

Entitlements must include source, scope, start/end dates, status, revocation reason and audit history.

## 19.4 Pricing and advertising are configurable

Pricing, subscription and advertising models are business decisions, not academic constants. They must be configurable and must not alter academic standards.

No audio advertisement may interrupt a lesson unless the institution explicitly approves a pedagogical and student-experience policy. The default learning experience should be free from disruptive advertising during academic instruction.

---

# 20. Notifications, Communication and Student Support

## 20.1 Notification architecture

Support:
- In-app notifications.
- Transactional email.
- Optional SMS or messaging integrations where lawful.
- Notification preferences.
- Delivery attempts and provider responses.
- Retry and dead-letter handling.
- Template localisation.
- Event-triggered notifications.

## 20.2 Notification categories

- Security and account.
- Enrolment and access.
- Academic deadlines.
- Assessment and feedback.
- Governance outcomes where relevant.
- Student support.
- Payment and receipts.
- Service incidents.
- Marketing communications, separately consented where required.

## 20.3 Communication rules

- Do not include sensitive grades, misconduct details or private documents in ordinary email subject lines.
- Link users to authenticated pages for sensitive information.
- Respect notification preferences except mandatory service/security notices as permitted.
- Track delivery status without treating delivery as proof the student read or understood a message.

---

# 21. Analytics, Reporting and Event Architecture

## 21.1 Separate operational, academic and product analytics

- **Operational analytics:** availability, latency, job failures, storage and infrastructure.
- **Product analytics:** navigation, feature usage, onboarding and player interaction.
- **Academic analytics:** assessment performance, progression, PLO achievement and course outcomes.
- **Commercial analytics:** orders, revenue, refunds and entitlements.

These datasets have different access controls and interpretation rules.

## 21.2 Event principles

Events should be:
- Named consistently.
- Versioned.
- Minimal and privacy-aware.
- Timestamped in UTC.
- Attributable to an actor or anonymous session where appropriate.
- Idempotently ingested.
- Documented in an event catalogue.

Do not treat raw product analytics as authoritative academic evidence.

## 21.3 Example events

```text
identity.user_registered
identity.login_succeeded
enrolment.created
enrolment.status_changed
lesson.opened
audio.playback_started
audio.playback_checkpointed
audio.playback_completed
assessment.started
assessment.submitted
assessment.marked
assessment.moderated
academic_result.ratified
content.version_approved
content.version_published
governance.decision_finalized
quality.action_created
quality.action_closed
payment.succeeded
entitlement.granted
entitlement.revoked
```

Events that represent academic decisions must reference the authoritative decision record and must not themselves become the source of truth.

## 21.4 Academic dashboards

Dashboards must show definitions and limitations. Avoid ranking students or faculty solely by engagement metrics. Any early-warning or predictive model must be reviewed for bias, accuracy, explainability, privacy and human oversight.

---

# 22. Reliability, Performance and Scalability

## 22.1 Reliability goals

The first production service should establish measurable service objectives rather than advertise unsupported uptime guarantees.

Initial internal targets to validate:
- API availability objective: 99.5% monthly during the initial stage.
- Public catalogue performance: responsive under normal expected load.
- Playback startup: measured by device, region and connection class.
- Critical academic workflow success: monitored end-to-end.
- Recovery objectives: formally set after hosting and data-loss impact analysis.

These are planning targets, not a contractual service guarantee.

## 22.2 Performance strategy

- Server-side rendering or static generation for public catalogue pages where appropriate.
- Cache public, non-sensitive catalogue content.
- Paginate large administrative datasets.
- Index common filters and foreign keys.
- Avoid N+1 query patterns.
- Use background jobs for expensive processing.
- Stream media from object storage/CDN rather than proxying large files through the API.
- Monitor database connection pool usage.
- Use query plans for slow queries.
- Load test critical paths before major launch.

## 22.3 Scaling path

1. Optimise queries and caching.
2. Increase API/web instance capacity.
3. Add dedicated worker capacity.
4. Move PostgreSQL to managed/high-availability service when justified.
5. Add CDN and regional media delivery.
6. Separate high-volume analytics from transactional database.
7. Extract a module only when independent scaling or isolation is proven necessary.

---

# 23. Environments, CI/CD and Release Management

## 23.1 Environments

Maintain distinct:
- Local development.
- Automated test.
- Staging / pre-production.
- Production.

Each environment must have separate credentials, storage buckets and data. Production data must not be copied into local environments.

## 23.2 CI quality gates

Every pull request must pass applicable checks:
- Formatting.
- Lint.
- Type checking.
- Unit tests.
- Integration tests.
- Build.
- Migration validation.
- Dependency and secret scanning.
- API contract checks.
- Architecture boundary tests where implemented.

High-risk changes additionally require:
- Security review.
- Authorization tests.
- Data migration review.
- Academic policy owner review.
- Accessibility tests.

## 23.3 Deployment rules

- Use reviewed pull requests.
- Protect main branch.
- Build immutable artifacts.
- Deploy through a repeatable pipeline.
- Apply migrations with controlled procedure.
- Back up before risky schema changes.
- Use expand-and-contract migrations for breaking schema changes.
- Support rollback or forward-fix strategy.
- Verify health after deployment.
- Record release version and deployment actor.
- Never edit production database manually without an approved, logged emergency procedure.

## 23.4 Feature flags

Use feature flags for staged release of incomplete or risky features. A feature flag is not a substitute for authorization. Disabled UI must not leave an accessible API operation.

---

# 24. Observability and Operational Management

## 24.1 Logs

Use structured logs with:
- Timestamp.
- Severity.
- Service and environment.
- Correlation/request ID.
- Safe actor identifier where needed.
- Operation name.
- Outcome and duration.
- Error code.

Never log passwords, tokens, full payment details, private audio URLs, full student submissions or unnecessary personal data.

## 24.2 Metrics

Monitor:
- API latency and error rates.
- Database connections and slow queries.
- Queue depth and job failures.
- Media processing duration and failures.
- Playback authorization failures.
- Storage growth.
- Authentication failures and suspicious activity.
- Notification delivery failures.
- Payment reconciliation exceptions.
- Academic workflow bottlenecks.
- Backup success and restore-test results.

## 24.3 Tracing

Use correlation IDs across web/API/worker/provider operations. Adopt distributed tracing standards when service complexity warrants it; do not build a complex observability stack before there is a clear operational need.

## 24.4 Operational runbooks

Create runbooks for:
- Deployment and rollback.
- Database backup and restore.
- Lost privileged access.
- Security incident.
- Media processing failure.
- Audio playback outage.
- Payment webhook failure.
- Queue backlog.
- Email delivery outage.
- Academic record correction.
- Programme publication rollback.
- Student data export and lawful deletion.

---

# 25. Testing Strategy and Quality Gates

## 25.1 Testing pyramid

- Unit tests for domain rules and calculations.
- Integration tests for repositories, transactions and provider adapters.
- API tests for validation, authorization and state transitions.
- End-to-end tests for critical user journeys.
- Security tests for access boundaries and abuse cases.
- Accessibility tests for UI and player interactions.
- Performance tests for high-volume endpoints and media authorization.
- Recovery tests for backups and critical services.

## 25.2 Critical journeys

At minimum, automate tests for:
1. Student registration and verification.
2. Privileged user MFA and role assignment.
3. Programme creation, review and approval.
4. Course and lesson version approval.
5. Publication blocked until approval conditions are met.
6. Student enrolment and entitlement evaluation.
7. Protected audio playback authorization.
8. Playback resume across sessions.
9. Assessment submission and marking.
10. Moderation and result ratification.
11. Student access restricted to own records.
12. Academic appeal independent of original decision-maker.
13. Governance quorum and conflict recusal.
14. Audit event integrity.
15. Payment webhook replay and idempotency.
16. Access revocation after suspension or expiry.
17. Locale and RTL/LTR rendering.
18. Backup restoration and service recovery.

## 25.3 Definition of Done for a feature

A feature is not complete because its page renders.

It is complete only when:
- User and institutional purpose is clear.
- Domain rules are documented.
- Permissions are enforced server-side.
- Validation and failure states exist.
- Relevant audit events are recorded.
- Tests cover success, failure and abuse cases.
- Accessibility requirements are addressed.
- Localization is supported where required.
- Data migration and rollback are considered.
- Documentation and roadmap are updated.
- Build, lint, typecheck and tests pass.
- Staging verification evidence exists.
- No unresolved critical/high risk remains without formal acceptance.

---

# 26. Data Model Catalogue — Initial Logical Inventory

This is a logical catalogue, not a final Prisma schema. Detailed ERD and schema decisions must be produced in the database design phase.

## 26.1 Identity and people

`User`, `UserProfile`, `ExternalIdentity`, `Session`, `Role`, `Permission`, `RolePermission`, `UserRoleAssignment`, `Organisation`, `StaffProfile`, `StaffQualification`, `StaffAppointment`, `ConflictOfInterestDeclaration`.

## 26.2 Academic structure

`Institution`, `College`, `Department`, `Programme`, `ProgrammeVersion`, `ProgrammeOutcome`, `ProgrammeCourse`, `AcademicPeriod`, `AcademicLevelDescriptor`, `Course`, `CourseVersion`, `CourseOutcome`, `Unit`, `Lesson`, `LessonVersion`, `CurriculumMap`, `CurriculumMapEntry`, `PrerequisiteRule`, `CreditRule`, `WorkloadModel`.

## 26.3 Content and sources

`ContentAsset`, `ContentVersion`, `LessonScript`, `Transcript`, `SourceRecord`, `Claim`, `ClaimSourceMap`, `ContentReview`, `ContentApproval`, `RightsRecord`, `Translation`, `TranslationReview`.

## 26.4 Media

`MediaAsset`, `MediaSourceFile`, `MediaRendition`, `MediaManifest`, `MediaProcessingJob`, `PlaybackSession`, `PlaybackGrant`, `MediaAccessEvent`.

## 26.5 Student and learning

`StudentProfile`, `Application`, `Enrolment`, `CourseRegistration`, `Entitlement`, `LearningSession`, `PlaybackCheckpoint`, `LessonActivityAttempt`, `CourseProgress`, `CompletionEvaluation`.

## 26.6 Assessment and records

`Assessment`, `AssessmentVersion`, `Question`, `QuestionVersion`, `Rubric`, `AssessmentAttempt`, `Submission`, `MarkingAssignment`, `MarkingDecision`, `ModerationRecord`, `Feedback`, `RatifiedResult`, `ProgressionDecision`, `Transcript`, `AwardRecord`, `AcademicRecordAmendment`.

## 26.7 Governance and quality

`GovernanceBody`, `Committee`, `CommitteeToRVersion`, `CommitteeMembership`, `Meeting`, `Attendance`, `AgendaItem`, `GovernancePaper`, `GovernanceDecision`, `DecisionCondition`, `Delegation`, `Policy`, `PolicyVersion`, `ProgrammeReview`, `AnnualMonitoringReport`, `ExternalReviewer`, `ExternalReviewReport`, `QualityFinding`, `CorrectiveAction`, `AcademicRisk`, `AcademicIncident`, `EvidenceItem`.

## 26.8 Support and operations

`SupportCase`, `Complaint`, `Appeal`, `MisconductCase`, `Notification`, `NotificationDelivery`, `PaymentTransaction`, `Refund`, `WebhookEvent`, `AuditEvent`, `SecurityEvent`, `IntegrationConnection`, `FeatureFlag`, `SystemSetting`.

## 26.9 Schema design warning

Do not create every table in one migration. Build the schema incrementally by domain and verify each module's actual use cases. The catalogue prevents conceptual omissions; it is not a command for speculative database expansion.

---

# 27. Key Domain Invariants

The following invariants must be enforced in domain services and, where feasible, database constraints:

1. A published lesson must reference an approved version.
2. A programme cannot be active for formal delivery unless mandatory internal and external approvals are satisfied.
3. A student enrolment references a defined programme/course version or an explicitly governed version policy.
4. A student cannot access restricted course media without a valid access basis.
5. A playback session cannot outlive its authorisation expiry.
6. An assessment attempt references the assessment version presented to the student.
7. A ratified result references the relevant assessment and academic rules version.
8. A transcript entry is derived from an authorised academic record decision.
9. An academic record correction preserves the original value and rationale.
10. A committee decision requiring quorum cannot be finalised without quorum.
11. A conflicted member cannot vote on the affected decision.
12. A delegation cannot be used outside its scope or effective period.
13. A reviewer cannot approve content where policy requires independent review and the reviewer is the author.
14. A payment webhook cannot create duplicate financial or entitlement effects.
15. A revoked entitlement prevents new playback sessions.
16. Audit history cannot be deleted through normal application operations.
17. A translation cannot be marked academically equivalent without the required review.
18. A user role assignment must have an authorised grantor and scope.
19. No API response exposes another student's restricted data.
20. No formal award is issued unless the institution and award are legally authorised.

---

# 28. Technical Decision Register

The following decisions are established as the baseline:

| ID | Decision | Status | Revisit trigger |
|---|---|---|---|
| `ADR-BASE-001` | Next.js frontend | Accepted baseline | Material product/operational limitation |
| `ADR-BASE-002` | NestJS backend | Accepted baseline | Material maintainability or scale limitation |
| `ADR-BASE-003` | PostgreSQL primary database | Accepted baseline | Proven data/scale requirement |
| `ADR-BASE-004` | Prisma migrations/ORM | Accepted baseline | Material ORM limitation |
| `ADR-BASE-005` | Modular monolith first | Accepted | Measurable independent scaling/ownership need |
| `ADR-BASE-006` | REST + OpenAPI | Accepted baseline | Strong integration requirement for another protocol |
| `ADR-BASE-007` | Private object storage for media | Accepted | No change without security review |
| `ADR-BASE-008` | Segmented protected audio delivery | Accepted baseline | Rights/device requirements justify another model |
| `ADR-BASE-009` | Redis/BullMQ when async workload requires | Conditional | Queue/cache need confirmed |
| `ADR-BASE-010` | Multilingual data model from inception | Accepted | No planned reversal |
| `ADR-BASE-011` | Academic entities versioned | Accepted | No planned reversal |
| `ADR-BASE-012` | Server-side scoped authorization | Accepted | No planned reversal |
| `ADR-BASE-013` | Append-only/tamper-evident audit | Accepted | No planned reversal |
| `ADR-BASE-014` | English launch locale, architecture multilingual | Proposed baseline | Product/market decision |
| `ADR-BASE-015` | Jurisdiction-neutral rules until legal selection | Accepted | Jurisdiction formally selected |

These are architecture baseline decisions in this document. Where implementation requires choosing a specific provider, algorithm, deployment service or library, create a detailed ADR rather than assuming the provider.

---

# 29. Engineering Roadmap and Execution Gates

The roadmap is deliberately ordered by dependencies. Tasks must be tracked in `ROADMAP.md` with status, owner, dependencies and evidence. Do not mark a phase complete because files or screens exist.

## Phase PSA-0 — Project governance and repository foundation

- [ ] `PSA-0001` Read and reconcile all four foundational documents.
- [ ] `PSA-0002` Establish repository and branch strategy.
- [ ] `PSA-0003` Create `AGENTS.md` with project-specific coding rules.
- [ ] `PSA-0004` Create `ARCHITECTURE.md` and link this document.
- [ ] `PSA-0005` Create ADR template and decision register.
- [ ] `PSA-0006` Create `ROADMAP.md` and task status conventions.
- [ ] `PSA-0007` Pin Node.js, pnpm and TypeScript versions.
- [ ] `PSA-0008` Establish formatting, lint and typecheck.
- [ ] `PSA-0009` Establish CI pipeline for basic checks.
- **Exit gate:** Clean repository, reproducible installation, baseline CI and approved engineering conventions.

## Phase PSA-1 — Runtime and application skeleton

- [ ] `PSA-0101` Create Next.js web application.
- [ ] `PSA-0102` Create NestJS API application.
- [ ] `PSA-0103` Establish shared contracts and API client strategy.
- [ ] `PSA-0104` Establish environment configuration and validation.
- [ ] `PSA-0105` Add Docker-based local dependencies.
- [ ] `PSA-0106` Establish health/readiness endpoints.
- [ ] `PSA-0107` Establish structured logging and correlation IDs.
- [ ] `PSA-0108` Establish initial error handling.
- **Exit gate:** Web and API run locally, communicate through a documented API contract and pass CI.

## Phase PSA-2 — Database and persistence foundation

- [ ] `PSA-0201` Approve initial ERD and domain ownership map.
- [ ] `PSA-0202` Configure PostgreSQL and Prisma.
- [ ] `PSA-0203` Establish migration and seed conventions.
- [ ] `PSA-0204` Implement core institution and organisation entities.
- [ ] `PSA-0205` Implement stable ID and audit metadata conventions.
- [ ] `PSA-0206` Add database integration tests.
- [ ] `PSA-0207` Document backup and local reset procedures.
- **Exit gate:** Reproducible schema, safe migrations, integrity tests and documented recovery.

## Phase PSA-3 — Identity and access foundation

- [ ] `PSA-0301` Evaluate and approve authentication approach through ADR.
- [ ] `PSA-0302` Implement canonical user identity.
- [ ] `PSA-0303` Implement secure sessions and account lifecycle.
- [ ] `PSA-0304` Implement roles, permissions and scoped assignments.
- [ ] `PSA-0305` Implement server-side authorization guards.
- [ ] `PSA-0306` Implement MFA for privileged roles.
- [ ] `PSA-0307` Implement audit events for identity and permission changes.
- [ ] `PSA-0308` Test privilege escalation and cross-user access.
- **Exit gate:** Secure identity and authorization tested against abuse cases.

## Phase PSA-4 — Academic core

- [ ] `PSA-0401` Implement academic organisation structure.
- [ ] `PSA-0402` Implement programme and programme versions.
- [ ] `PSA-0403` Implement PLO and curriculum mapping.
- [ ] `PSA-0404` Implement courses and course versions.
- [ ] `PSA-0405` Implement CLOs, units and lessons.
- [ ] `PSA-0406` Implement prerequisite and academic rule configuration foundations.
- [ ] `PSA-0407` Implement academic change history.
- [ ] `PSA-0408` Add domain invariant tests.
- **Exit gate:** Academic hierarchy and versions work without hard-coded jurisdiction-specific assumptions.

## Phase PSA-5 — Content and academic approval

- [ ] `PSA-0501` Implement lesson brief and learning objective records.
- [ ] `PSA-0502` Implement source register and claim-source mapping.
- [ ] `PSA-0503` Implement rights and licensing records.
- [ ] `PSA-0504` Implement content versioning.
- [ ] `PSA-0505` Implement review and approval workflow.
- [ ] `PSA-0506` Enforce author/reviewer separation.
- [ ] `PSA-0507` Implement translation and language availability records.
- [ ] `PSA-0508` Implement publication gate.
- **Exit gate:** No unreviewed or unapproved academic lesson can be published.

## Phase PSA-6 — Media and audio learning

- [ ] `PSA-0601` Select object storage provider through ADR.
- [ ] `PSA-0602` Implement private upload flow.
- [ ] `PSA-0603` Implement media validation and processing queue.
- [ ] `PSA-0604` Generate audio renditions and HLS manifests.
- [ ] `PSA-0605` Implement playback entitlement checks.
- [ ] `PSA-0606` Implement short-lived playback sessions.
- [ ] `PSA-0607` Implement player and resume progress.
- [ ] `PSA-0608` Implement transcript and accessible controls.
- [ ] `PSA-0609` Test revocation, expiry, concurrency and URL leakage.
- **Exit gate:** Protected, accessible audio learning works end-to-end.

## Phase PSA-7 — Student and enrolment

- [ ] `PSA-0701` Implement student profile.
- [ ] `PSA-0702` Implement application/enrolment workflow as legally appropriate.
- [ ] `PSA-0703` Implement course registration.
- [ ] `PSA-0704` Implement entitlement model.
- [ ] `PSA-0705` Implement student dashboard and course access.
- [ ] `PSA-0706` Implement student support entry points.
- **Exit gate:** A test student can enrol under defined rules and access only permitted learning.

## Phase PSA-8 — Assessment and academic records

- [ ] `PSA-0801` Implement assessment definitions and versions.
- [ ] `PSA-0802` Implement question and rubric models.
- [ ] `PSA-0803` Implement attempts and submissions.
- [ ] `PSA-0804` Implement marking and feedback.
- [ ] `PSA-0805` Implement moderation.
- [ ] `PSA-0806` Implement ratification workflow.
- [ ] `PSA-0807` Implement academic records and amendment history.
- [ ] `PSA-0808` Keep award issuance disabled until legal authority is confirmed.
- **Exit gate:** Assessment evidence can be evaluated and ratified with a complete audit trail.

## Phase PSA-9 — Governance and quality operations

- [ ] `PSA-0901` Implement governance bodies and ToR versions.
- [ ] `PSA-0902` Implement membership, meetings and attendance.
- [ ] `PSA-0903` Implement conflicts, quorum and recusals.
- [ ] `PSA-0904` Implement decisions and delegations.
- [ ] `PSA-0905` Implement programme review and annual monitoring.
- [ ] `PSA-0906` Implement external review records.
- [ ] `PSA-0907` Implement risk and corrective action registers.
- [ ] `PSA-0908` Implement evidence repository references.
- [ ] `PSA-0909` Implement restricted complaints and appeals workflows.
- **Exit gate:** Governance decisions and quality actions are enforceable and auditable.

## Phase PSA-10 — Commercial and communications

- [ ] `PSA-1001` Select payment provider through ADR.
- [ ] `PSA-1002` Implement payment intents and verified webhooks.
- [ ] `PSA-1003` Implement reconciliation and refunds.
- [ ] `PSA-1004` Implement entitlement grants and revocation.
- [ ] `PSA-1005` Implement notification provider adapters.
- [ ] `PSA-1006` Implement templates and delivery tracking.
- **Exit gate:** Payments cannot modify academic outcomes and access grants are auditable.

## Phase PSA-11 — Reporting, reliability and production readiness

- [ ] `PSA-1101` Implement operational metrics and alerting.
- [ ] `PSA-1102` Implement academic and governance reporting.
- [ ] `PSA-1103` Implement backup and restoration verification.
- [ ] `PSA-1104` Complete security threat review.
- [ ] `PSA-1105` Complete accessibility review.
- [ ] `PSA-1106` Complete load tests for critical journeys.
- [ ] `PSA-1107` Complete incident and recovery runbooks.
- [ ] `PSA-1108` Complete production readiness review.
- **Exit gate:** Critical controls, recovery, monitoring and operational ownership are demonstrated.

## Phase PSA-12 — External readiness and evolution

- [ ] `PSA-1201` Map platform evidence to applicable regulator/accreditor requirements.
- [ ] `PSA-1202` Verify legal and data residency requirements.
- [ ] `PSA-1203` Conduct independent security review/penetration test.
- [ ] `PSA-1204` Conduct academic systems audit.
- [ ] `PSA-1205` Close critical and high findings.
- [ ] `PSA-1206` Review architecture against actual scale and evidence.
- [ ] `PSA-1207` Approve next-stage architecture changes through ADRs.
- **Exit gate:** External readiness claims are supported by evidence and accurately scoped.

---

# 30. Project Execution Rules for Cursor and AI Coding Agents

## 30.1 Mandatory first actions

Before changing code:
1. Read this document.
2. Read `AGENTS.md`.
3. Read `ROADMAP.md`.
4. Read `PROJECT_STRUCTURE.md`.
5. Read the relevant academic and governance policy.
6. Inspect the existing repository and current implementation.
7. Identify the smallest valid task and its dependencies.
8. Report conflicts or missing decisions before implementation.

## 30.2 Task execution contract

Every task request must include:
- Task ID.
- Objective.
- Context and authoritative sources.
- Scope.
- Explicit exclusions.
- Dependencies.
- Files/modules expected to change.
- Domain rules.
- Security and privacy requirements.
- Acceptance criteria.
- Required tests.
- Documentation updates.
- Migration and rollback plan where relevant.

## 30.3 Agent behaviour rules

- Do not redesign the entire project while implementing a small task.
- Do not create speculative modules or tables without a roadmap requirement.
- Do not change approved architecture without an ADR.
- Do not invent legal, academic or credit rules.
- Do not bypass domain services with direct database writes.
- Do not mark tasks complete without running required checks.
- Do not claim a test passed unless it was actually executed.
- Do not leave placeholder security checks in production paths.
- Do not silently change existing behaviour.
- Do not overwrite user work or unrelated files.
- Report modified files, tests run, results, known limitations and next dependency.

## 30.4 Required task completion report

```text
Task ID:
Status: PASS / PARTIAL / BLOCKED / FAIL

Scope completed:
Files changed:
Database migrations:
API changes:
Security/authorization:
Tests executed:
Build/lint/typecheck:
Manual verification:
Known limitations:
Documentation updated:
Remaining risks:
Next task recommendation:
```

## 30.5 Definition of project progress

Use only:
- `NOT STARTED`
- `IN PROGRESS`
- `BLOCKED`
- `PARTIAL`
- `PASS`
- `NOT VERIFIED`
- `DEFERRED`
- `REJECTED`

A task may be marked `PASS` only when all acceptance criteria are evidenced.

---

# 31. Open Decisions — Do Not Guess

The following remain open and must be resolved at the appropriate stage:

## 31.1 Legal and institutional
- Country of establishment and legal entity.
- Permission to use the name “University”.
- Degree-awarding authority and scope.
- Applicable qualifications framework and credit system.
- Data protection and cross-border transfer rules.
- Student consumer protection and refund obligations.
- Record retention and regulatory reporting.

## 31.2 Identity and infrastructure
- Authentication provider and exact session architecture.
- Hosting provider and production region.
- Object storage provider and CDN.
- Email/SMS provider.
- Payment provider and supported countries/currencies.
- Error monitoring and observability vendors.
- Backup and disaster recovery service levels.

## 31.3 Academic operations
- First programme and its actual assessment requirements.
- Formal academic calendar.
- Credit and workload methodology.
- Grading and progression rules.
- External reviewer/examiner model.
- Whether formal awards will be offered at initial launch.

## 31.4 Product and commercial
- Final brand and trademark clearance.
- Final pricing and subscription model.
- Advertising policy and eligibility.
- Public versus enrolled-only content boundaries.
- Offline audio access policy.

Every decision must have an owner, due stage and evidence. An unresolved decision must not be disguised as an implementation detail.

---

# 32. Domain and Brand Architecture Note

## 32.1 Working domain

The current preferred domain candidate is `soundsuniversity.com`. Domain registration is a technical asset, not proof of trademark availability, institutional legal status or permission to use the word “University”.

Before committing to the brand:
- Verify domain registration and registrant control.
- Enable registrar account MFA and domain lock.
- Enable auto-renewal and maintain recovery contacts.
- Use a dedicated institutional email domain.
- Configure SPF, DKIM and DMARC.
- Review similar names and marks in relevant territories and education-related classes.
- Search WIPO and relevant national trademark databases.
- Check existing institutions, companies, social handles and confusingly similar names.
- Obtain qualified trademark advice before major branding expenditure.

The domain and brand should be treated as provisional until clearance is complete. Do not pay a large premium for `sounduniversity.com` merely because it is the exact singular form; a domain premium does not establish strategic or legal value.

## 32.2 Technical domain conventions

Subject to registration and final brand approval:
- Canonical public domain: `soundsuniversity.com`.
- Application: `app.soundsuniversity.com`.
- API: `api.soundsuniversity.com`.
- Media delivery: a dedicated media hostname or provider-managed domain.
- Email: institutional addresses on the canonical domain.

Use one canonical public hostname and redirect alternatives to it. Do not expose internal service hostnames or storage origins.

---

# 33. Final Architectural Rule

The platform must encode the University's approved academic and governance rules without becoming the authority that invents them.

The system must be:
- Academically faithful.
- Legally adaptable.
- Secure by design.
- Auditable.
- Multilingual.
- Accessible.
- Recoverable.
- Operationally maintainable.
- Economically scalable.
- Evolvable without losing historical academic truth.

**The architecture is successful when the University can explain, reproduce, audit and defend every consequential academic and operational action — not merely when the software works on a demo screen.**