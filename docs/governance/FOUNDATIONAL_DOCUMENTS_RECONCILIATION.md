# Foundational Documents Reconciliation Report

**Task ID:** PSA-0001  
**Document ID:** AU-FDR-001  
**Version:** 1.0  
**Status:** Analytical report — evidence for PSA-0001 completion  
**Date:** 2026-11-02  
**Branch examined:** `chore/psa-0-toolchain`  
**Head commit at analysis start:** `2b28d7ea52dde1a55fdcf40cd0bff2ec4e1d53c5`  
**Prepared for:** Institutional founder / engineering lead  
**Nature:** Analytical documentation only. This report does **not** amend, supersede or formally adopt any canonical foundational document.

---

## 1. Executive Summary

PSA-0001 required a formal cross-document reconciliation of the five canonical foundational documents after their import into the repository. All five documents were examined in full, together with three supplementary research/history sources.

**Principal findings**

1. A **formal document precedence rule already exists** in `PLATFORM_SOFTWARE_ARCHITECTURE.md` section **0.4 Document precedence**, and a closely aligned rule exists in `ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md` under **Interpretation and precedence**. This reconciliation does **not** invent a new hierarchy as an existing institutional decision.
2. Across the seventeen investigation areas, the documents are **largely CONSISTENT** on core non-negotiables: audio-first (not audio-only); listening is not proof of competence; outcomes and assessment before completion; approved content before publication; no premature accreditation/degree claims; versioned academic objects; commercial/academic separation; jurisdiction-neutral implementation until law is verified.
3. A small number of **real tensions** exist. The most material are: (a) the Master Blueprint’s self-description as foundational “source of truth” versus the lower formal precedence assigned to it by AU-PSA-001 / AU-AGQ-001; (b) inconsistent institutional naming (“Sounds University”, “Audio University”, “الجامعة الصوتية”); (c) repository/path inventory drift in the Blueprint relative to the current repository layout.
4. Many important items are **not conflicts** but **open decisions** or **gaps**, especially jurisdiction of establishment, credit system selection, first programme launch choice, calendar model (mandatory Terms vs self-paced), pricing, authentication provider, and storage/payment providers.
5. Supplementary research notes must remain **non-authoritative**. Some research language (for example bachelor’s credit totals and proctoring as a default digital assessment pattern) must not override canonical constraints and MVP deferrals.

**Implementation readiness conclusion:** **READY WITH CONDITIONS** for PSA-1 application skeleton work after PSA-0 exit criteria, provided jurisdiction-specific awards/credit/legal claims remain unimplemented and Gate L0 legal work remains open. The institution is **NOT READY** to advertise regulated degrees, enrol students into regulated degree programmes, or claim accreditation.

**PSA-0001 status after this report:** PASS (analytical acceptance criteria met; report committed as evidence). PSA-0 remains incomplete while PSA-0002 and PSA-0009 remain non-PASS.

---

## 2. Scope and Methodology

### 2.1 In scope

- Full reading of the five canonical documents listed in section 3.
- Skimming/reading of supplementary research and project-origin notes for context only.
- Authority mapping, consistency classification, conflict register, requirements traceability, open-question register, and PSA-1 readiness assessment.
- Updates to roadmap/tracking documents that record this task’s evidence.

### 2.2 Out of scope

- Rewriting or silently amending any of the five canonical documents.
- Inventing degrees, accreditation, jurisdiction-specific law, or approved institutional policy.
- Application code, database schemas, migrations, APIs, or framework scaffolding.
- Resolving open institutional decisions by assertion in this report.
- Changing PSA-0002 or PSA-0009 status.

### 2.3 Classification vocabulary

| Classification | Meaning |
| --- | --- |
| CONSISTENT | Documents agree, or differ only by legitimate level of detail |
| CONFLICT | Direct inconsistency between canonical statements on the same subject |
| GAP | Important subject missing, incomplete, or not connected across documents |
| AMBIGUOUS | Wording permits more than one institutional interpretation |
| DEPENDENCY | One document correctly defers to another or to a future decision |
| FUTURE DECISION | Explicitly deferred; not a present contradiction |

### 2.4 Evidence method

- Section headings and document control metadata are cited as the primary references.
- Page numbers are not used (Markdown sources have no stable pagination).
- Fabricated quotations are prohibited. Paraphrase is used with heading references.
- Severity ratings reflect impact on institutional integrity or implementation risk, not rhetorical emphasis.

---

## 3. Documents Examined

### 3.1 Canonical foundational documents

| Short ID | Title | Path | Document control notes |
| --- | --- | --- | --- |
| UMB | University Master Blueprint | `docs/institutional/UNIVERSITY_MASTER_BLUEPRINT.md` | Arabic/English institutional blueprint; v1.0 dated 2026-11-02; describes vision, academic model, product scope, stack, MVP and open decisions |
| ACD | Academic Content Development & Source Governance Standard | `docs/academic/ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md` | Document ID AU-ACD-001; Version 1.0; Foundational Content Standard |
| ACA | Academic Curriculum Architecture | `docs/academic/ACADEMIC_CURRICULUM_ARCHITECTURE.md` | Document ID AU-ACA-001; Version 1.0; Proposed for formal adoption |
| AGQ | Academic Governance & Quality Assurance Framework | `docs/governance/ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md` | Document ID AU-AGQ-001; Version 1.0; Proposed for formal adoption; approval record pending |
| PSA | Platform Software Architecture | `docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md` | Document ID AU-PSA-001; Version 1.0; Foundational Technical Architecture — Proposed for formal adoption |

### 3.2 Supplementary (non-canonical) sources

| Source | Path | Role |
| --- | --- | --- |
| Curriculum research — institutional catalogues | `docs/academic/research/WHERE_TO_FIND_CURRICULA.md` | Context for external curriculum discovery; does not override canonical docs |
| Initial curricula and teaching model notes | `docs/academic/research/INITIAL_CURRICULA_AND_TEACHING_MODEL.md` | Planning notes; includes bachelor/credit and proctoring suggestions that remain non-binding |
| Project origin notes | `docs/project-history/PROJECT_ORIGIN_NOTES.txt` | Historical product-discussion notes (audio protection, pricing, ads); context only |

### 3.3 Related repository navigation documents (not part of the five)

`README.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `AGENTS.md`, and `PROJECT_STRUCTURE.md` were inspected for repository state and tracking rules. They are engineering/governance navigation artefacts, not substitutes for the five canonical sources.

---

## 4. Document Authority Mapping

### 4.1 Existing formal precedence (already documented)

AU-PSA-001 **0.4 Document precedence** states, in order:

1. Applicable law and regulator requirements.
2. Approved institutional statutes and academic regulations.
3. `ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md`.
4. `ACADEMIC_CURRICULUM_ARCHITECTURE.md`.
5. `ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md`.
6. `UNIVERSITY_MASTER_BLUEPRINT.md`.
7. This technical architecture (AU-PSA-001).
8. Approved ADRs and detailed specifications, provided they do not conflict with higher authority.
9. Existing code, only where it remains compliant.

AU-AGQ-001 **Interpretation and precedence** is closely aligned: law and statutes first; then AGQ for governance/QA; ACA for academic structure/model; ACD for content/source development; UMB for intended product and technical architecture intent; then policies/procedures/ADRs.

**Finding:** An explicit hierarchy **does already exist** in canonical technical and governance documents. This report records that hierarchy; it does not invent it.

### 4.2 Authority mapping table

| Document | Primary responsibility | Subjects it governs | Outside its authority | Depends on | Canonical? |
| --- | --- | --- | --- | --- | --- |
| Law / regulators (external) | Binding legal/regulatory requirements | Licensure, awards, protected terms, data protection once jurisdiction is known | Product taste, stack choice | N/A | External supreme authority |
| Approved statutes & academic regulations (future) | Institution-specific binding rules | Formal academic regulations after approval | Implementation detail | Law | Planned; not yet constituted |
| AGQ (AU-AGQ-001) | Academic governance, decision rights, QA operations | Committees, approval gates, assessment governance, integrity, appeals, evidence/audit of decisions | Day-to-day lesson writing; low-level tech stack | Law; statutes when approved | Yes |
| ACA (AU-ACA-001) | Academic structure and qualification architecture | Hierarchy, programmes, outcomes, credit/workload principles, progression, assessment architecture, faculty expectations, academic data requirements | Content production playbooks; runtime frameworks | AGQ for decision rights; law for awards | Yes |
| ACD (AU-ACD-001) | Content and source development standard | Lesson/course content production, source records, claim-to-source mapping, audio-first writing/production, publication readiness checklists | Legal award authority; committee constitution | Academic structure from ACA; approval from AGQ | Yes |
| UMB | Institutional vision, product scope, MVP and open decisions | Mission/principles narrative, candidate programmes, student journey, commercial hypotheses, stack preferences, open-decision register | Overriding academic standards; claiming legal authority | Should defer to AGQ/ACA/ACD/PSA precedence | Yes |
| PSA (AU-PSA-001) | Technical architecture and engineering gates | Modules, security, media protection, data model boundaries, APIs, roadmap gates | Changing academic policy to fit code | Higher academic/governance docs | Yes |
| ADRs / specs | Approved material technical decisions | Bounded technical choices | Academic policy invention | PSA and higher authorities | Supporting |
| Supplementary research / origin notes | Context and exploration | Ideation, external catalogues, early product notes | Institutional policy | Must not override canonical five | No |

### 4.3 Missing authority rule / clarification needed

**Missing institutional approval of the precedence itself.** AU-PSA-001 and AU-AGQ-001 are both marked “Proposed for formal adoption”. Their precedence tables are therefore **documented proposed rules**, not yet evidenced as Governing-Board-approved statutes.

**Tension with UMB self-description.** UMB opening states (Arabic) that the document is the foundational source of truth and that operational task status lives in `docs/ROADMAP.md`. Formal precedence in AU-PSA-001 / AU-AGQ-001 places UMB **below** AGQ, ACA and ACD. This is recorded as CONF-001.

### 4.4 Proposed practical operating rule (NOT an approved institutional decision)

Until Governing Board / Academic Council formal adoption occurs, engineering and content work should **operate as if** AU-PSA-001 §0.4 and AU-AGQ-001 Interpretation apply, because they are the only explicit cross-document precedence statements and they agree with each other.

**Proposed decision for institutional approval (DEC-AUTH-001):** Formally adopt the AU-PSA-001 §0.4 / AU-AGQ-001 precedence order; revise UMB’s “source of truth” wording in a later approved task so it describes UMB as vision/scope/MVP narrative rather than supreme academic authority.

---

## 5. Cross-Document Consistency Matrix

| # | Subject | Classification | Evidence summary |
| --- | --- | --- | --- |
| 1 | Institutional identity and mission | AMBIGUOUS | Shared audio-first academic institution intent is CONSISTENT; working names differ (Sounds University / Audio University / الجامعة الصوتية). Legal brand clearance pending in PSA header. See CONF-002. |
| 2 | Academic model and educational philosophy | CONSISTENT | Outcomes-based, competency-oriented, academic integrity, constructive alignment appear across UMB, ACD, ACA, AGQ, PSA. |
| 3 | Audio-First learning methodology | CONSISTENT | Audio-first, not audio-only; listening ≠ competence (UMB; ACD §1/§8; ACA §14.1/§9.6; AGQ §1.3 item 12 / §7.7; PSA §1.2 / §2.2 / §9.1). |
| 4 | Programmes, degrees, qualifications, progression | CONSISTENT + FUTURE DECISION | All prohibit premature degree/accreditation claims (ACA §2; AGQ §1.4; ACD §0; UMB §10; PSA §10.4). Award types listed as planning categories only. Progression/credit remain jurisdiction-dependent. |
| 5 | Curriculum architecture | CONSISTENT | Hierarchy University→College→Department→Programme→Level→Term→Course→Unit→Lesson aligned (UMB §3; ACD §2; ACA §4; PSA §7.1). |
| 6 | Course and lesson structure | CONSISTENT | Course/Unit/Lesson definitions and lesson as publishable unit appear in ACD §5–§7 and ACA §4.7–§4.9; PSA content model reflects this. |
| 7 | Learning outcomes and competencies | CONSISTENT | PLOs/CLOs/mapping required (ACD §3; ACA §7; PSA academic domain). Achievement over volume is consistent. |
| 8 | Assessment and academic records | CONSISTENT | Assessment evidence required; versioned attempts; human review for projects; Academic Records as ratified outcomes (UMB §5; ACD §15; ACA §9; AGQ §7; PSA §10). Proctoring deferred from MVP in UMB — consistent with caution in AGQ/ACA, not a conflict. |
| 9 | Faculty, instructors, academic responsibilities | CONSISTENT | Qualified academic roles, separation of author/reviewer/approver (ACA §13; AGQ §5; ACD workflow; PSA governance/content modules). Lean-start compensating controls acknowledged. |
| 10 | Academic governance and decision-making | CONSISTENT | Board / Executive / Academic Council / AQSC / PARC / AAIC / Programme Committee appear in ACA §12 and AGQ §§2–3 with compatible mandates. Exact constitution remains FUTURE DECISION / scale-dependent. |
| 11 | Quality assurance and continuous improvement | CONSISTENT | PDCA, annual monitoring, periodic review, external review readiness (ACA §15; AGQ §10–§11). |
| 12 | Content development and approval | CONSISTENT | Source integrity, claim-to-source, review before publish, content states (UMB §6; ACD §§12–17/§25; AGQ §6; PSA §8). |
| 13 | Student lifecycle | CONSISTENT | Discovery→enrolment→learning→assessment→records→completion/certificate narrative (UMB §4; ACA §11; PSA student/enrolment phases). Legal admission rules remain FUTURE DECISION. |
| 14 | Technology architecture | CONSISTENT + GAP | Next.js / NestJS / PostgreSQL / Prisma / modular monolith shared (UMB §14; PSA §4). Package/path inventory in UMB drifts from current `PROJECT_STRUCTURE.md` (GAP). Auth provider left open (DEPENDENCY on ADR). |
| 15 | Media and audio delivery | CONSISTENT | Private storage, short-lived authorized playback, no permanent public original URLs, no 100% anti-recording promise (UMB §7; PSA §15; origin notes as historical support). |
| 16 | Security, privacy, IP | CONSISTENT | Server-side authorization, privacy by design, rights/licensing records, no secrets in client (UMB §12; ACD source/rights; AGQ privacy commitment; PSA §§11/17/18). |
| 17 | Institutional readiness / accreditation considerations | CONSISTENT | Gate L0 legal feasibility; prohibited claims until verified (ACA §2; AGQ §1.4 / §11.5; README non-negotiables; PSA awards disabled until authority). |

---

## 6. Conflict Register

If a subject is only incomplete or deferred, it is **not** listed as a conflict.

### CONF-001 — Master Blueprint authority self-description vs formal precedence

| Field | Content |
| --- | --- |
| Conflict ID | CONF-001 |
| Subject | Document authority / source of truth |
| Source A | UMB opening statement and **§2 الحوكمة ومصدر الحقيقة** |
| Source B | PSA **0.4 Document precedence**; AGQ **Interpretation and precedence** |
| Nature | UMB presents itself as the foundational source of truth for the institution. PSA/AGQ place UMB below AGQ, ACA and ACD, and place technical architecture below UMB. AGQ also describes UMB as governing intended product/technical architecture, which overlaps PSA’s technical role. |
| Impact | Agents or contributors may incorrectly treat UMB as supreme over academic standards, or treat UMB stack notes as overriding PSA change control. |
| Severity | HIGH |
| Recommended resolution | Institutional approval of DEC-AUTH-001; later approved editorial task to rephrase UMB authority language without changing academic substance. |
| Institutional approval required | Yes |
| Status | OPEN |

### CONF-002 — Institutional naming inconsistency

| Field | Content |
| --- | --- |
| Conflict ID | CONF-002 |
| Subject | Institutional identity / working brand |
| Source A | PSA header: “Sounds University (provisional brand…)”; repository/README naming |
| Source B | ACA/AGQ body text: “Audio University”; ACD/UMB Arabic “الجامعة الصوتية” |
| Nature | Multiple working names are used for the same intended institution without a single approved legal/trade name. |
| Impact | Public site, certificates, contracts and trademark work risk inconsistent naming; not an academic-policy contradiction. |
| Severity | MEDIUM |
| Recommended resolution | Decide legal name, working brand, and document terminology; update documents in an approved follow-on task. |
| Institutional approval required | Yes |
| Status | OPEN |

### CONF-003 — Blueprint repository inventory vs actual repository layout

| Field | Content |
| --- | --- |
| Conflict ID | CONF-003 |
| Subject | Documentation topology / status-tracker path |
| Source A | UMB **§2** and **§14** (lists `docs/ROADMAP.md`, `docs/ACADEMIC_MODEL.md`, `docs/CONTENT_OPERATIONS.md`, `docs/DECISIONS/`, etc.) |
| Source B | Actual repository: root `ROADMAP.md`, `docs/architecture/ADR/`, canonical academic/governance paths; many listed UMB files do not exist |
| Nature | UMB’s file map describes a planned/legacy layout that conflicts with the repository as established in PSA-0. |
| Impact | Contributors following UMB paths literally will look in the wrong places; task-status “single register” claim in UMB does not match root `ROADMAP.md` convention. |
| Severity | MEDIUM |
| Recommended resolution | Approved UMB path-map update (or generate missing docs only when a real task requires them). Do not fabricate empty policy files. |
| Institutional approval required | Yes (for UMB edit) |
| Status | OPEN |

### Statement on absence of broader doctrinal conflicts

No direct contradiction was found among the five canonical documents on the core academic non-negotiables examined in section 5 (audio-first integrity, assessment evidence, approval before publication, prohibition of unverified accreditation/degree claims, academic hierarchy, versioning, and commercial/academic separation). Differences of detail between ACA and AGQ committee descriptions are complementary rather than contradictory.

Supplementary research suggesting bachelor’s credit totals or proctoring as a default pattern is **not** treated as a canonical conflict; it is non-authoritative context that must not override UMB MVP deferrals or ACA/AGQ legal gates.

---

## 7. Requirements Traceability Matrix

| Req ID | Requirement | Origin | Related docs | Consistent? | Implementation implication | Needs explicit decision? |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | Audio-first, not audio-only | UMB §1; ACD §1; ACA §14.1; AGQ §1.3; PSA §1.2 | All five | Yes | Player + accessible alternatives; no audio-only exclusion of required information | No |
| REQ-002 | Listening/progress ≠ competence or pass | UMB §13; ACA §3.1/§9.6; AGQ §7.7; PSA §2.2/§9.1 | All five | Yes | Completion rules must use assessment/outcome evidence | No |
| REQ-003 | Academic approval before publication | UMB §6; ACD §17/§25; AGQ §6; PSA §1.2/§8 | ACD, AGQ, PSA | Yes | Workflow states and authorization gates | Lean roles for MVP yes |
| REQ-004 | Source integrity / claim-to-source | ACD §§12–13; UMB §6; PSA §8.2 | ACD, UMB, PSA | Yes | Source register entities and review UX | No |
| REQ-005 | Versioned academic objects and records | UMB §16; ACA §17.3; AGQ evidence; PSA §7.3/§14.3 | ACA, PSA, UMB | Yes | Immutable history; no silent overwrite of ratified records | No |
| REQ-006 | No premature accreditation/degree claims | ACA §2; AGQ §1.4; ACD §0; UMB §10; PSA §10.4 | All five | Yes | Disable/mark non-formal awards until authority | Legal entity yes |
| REQ-007 | Internal planning credits ≠ transferable university credit until approved | UMB §3; ACA §6.3; PSA §2.2 | UMB, ACA, PSA | Yes | Catalogue wording and credit fields must stay non-claiming | Credit system later |
| REQ-008 | Server-side authorization | UMB §12; PSA §11; AGENTS.md | PSA, UMB | Yes | API guards; UI checks insufficient | Auth ADR yes |
| REQ-009 | Private media; no permanent public original URLs | UMB §7; PSA §15 | UMB, PSA | Yes | Object storage + short-lived playback sessions | Storage provider ADR |
| REQ-010 | Modular monolith first | UMB §14; PSA §4.2 | UMB, PSA | Yes | Single API deployable; no premature microservices | No |
| REQ-011 | Multilingual architecture from start; English launch | UMB §9; ACD header; PSA §16 | UMB, ACD, PSA | Yes | i18n data model; EN content first | Later languages schedule |
| REQ-012 | Separation of commercial entitlements from academic outcomes | UMB §8; PSA §19; AGQ academic independence | UMB, PSA, AGQ | Yes | Payment status must not alter grades/awards | Pricing yes |
| REQ-013 | Formal programme design before populating lessons | ACD §0; ACA §7; AGQ §6 | ACD, ACA, AGQ | Yes | Block “lesson-first” content creation in process | First programme choice |
| REQ-014 | Governance evidence and consequential decision audit | AGQ §§4/13; PSA §12; UMB §11 | AGQ, PSA | Yes | Decision/audit entities; not only CMS notes | Committee constitution later |
| REQ-015 | Jurisdiction/legal Gate L0 before regulated degrees | ACA §2.2; AGQ §11.5; PSA awards gate | ACA, AGQ, PSA | Yes | Do not implement regulated award issuance yet | Jurisdiction selection CRITICAL |
| REQ-016 | Honest completion certificates when used | UMB §10; ACA §5; PSA §10.4 | UMB, ACA, PSA | Yes | Certificate wording and verification without false claims | Certificate policy yes |

**Software-gap note:** Many AGQ operational artefacts (committee ToRs, appeals case files, teach-out plans) are correctly deferred to later PSA phases (notably PSA-9). Their absence from current code is expected; they are requirements for later phases, not PSA-1 blockers.

---

## 8. Missing Decisions and Open Questions

### 8.1 Institutional decisions

| ID | Question | Why it matters | Needed decision | Depends on it | Can proceed without it? |
| --- | --- | --- | --- | --- | --- |
| OQ-I-001 | Legal name / brand (Sounds vs Audio vs Arabic name) | Public identity, trademarks, certificates | Approved naming set | Marketing, legal docs, UI copy | Yes for internal PSA-1 skeleton with provisional naming |
| OQ-I-002 | Country of establishment and competent regulators | Licensure, protected terms, awards | Jurisdiction + legal advice | Gate L0; credit; admissions | Yes for non-award platform skeleton; **No** for regulated degree launch |
| OQ-I-003 | Formal adoption of AGQ/ACA/ACD/PSA/UMB | Binding force of proposed standards | Governing approval records | All policy enforcement claims | Yes to treat as working baselines with proposed status disclosed |
| OQ-I-004 | Adoption of document precedence (DEC-AUTH-001) | Resolves CONF-001 | Explicit approval | Conflict handling | Yes if teams follow PSA §0.4 provisionally |

### 8.2 Academic decisions

| ID | Question | Why it matters | Needed decision | Depends on it | Can proceed without it? |
| --- | --- | --- | --- | --- | --- |
| OQ-A-001 | First programme to launch | Content and MVP scope | Select one programme (UMB recommends CS & AI) | Curriculum build; catalogue | Yes for empty academic schema; **No** for meaningful content MVP |
| OQ-A-002 | Mandatory Terms/Blocks vs self-paced | Enrolment, progress, offerings | Calendar model | Term entities; student journey | Schema can remain configurable |
| OQ-A-003 | Internal credit reckoning rules for planning | Workload design | Interim credit/workload convention without public transfer claims | Course specs | Yes with explicit non-claim labelling |
| OQ-A-004 | Pass marks, attempt limits, reassessment defaults | Assessment UX and policy engine | Academic defaults or “no default until approved” | Assessment module | Prefer no hard-coded national defaults |
| OQ-A-005 | Certificate taxonomy and wording | Honest credentials | Exact certificate types for MVP | Credentials module | Yes if issuance disabled/clearly non-formal |

### 8.3 Governance decisions

| ID | Question | Why it matters | Needed decision | Depends on it | Can proceed without it? |
| --- | --- | --- | --- | --- | --- |
| OQ-G-001 | Initial lean committee set for MVP | Approval legitimacy | Which AGQ bodies are constituted first | Content publication gates | Yes with documented compensating dual-control |
| OQ-G-002 | Author/reviewer/approver staffing model for MVP | Separation of duties | Named roles / dual-control rules | Content workflow | Needed before first publish |
| OQ-G-003 | Appeals/complaints activation threshold | Student protection | When workflows go live | PSA-9 scope | Deferrable until students enrol |

### 8.4 Legal and jurisdictional decisions

| ID | Question | Why it matters | Needed decision | Depends on it | Can proceed without it? |
| --- | --- | --- | --- | --- | --- |
| OQ-L-001 | Gate L0 legal feasibility pack | Avoid unlawful claims | Legal route, permitted awards, advertising rules | Degree launch; use of “university” | **No** for regulated launch; Yes for private learning-platform development with honest status |
| OQ-L-002 | Data protection regime and residency | Privacy architecture | Applicable privacy law once jurisdiction known | Retention, deletion, processors | Design privacy-minimising defaults now |
| OQ-L-003 | Minors policy | Account eligibility | Whether under-18 enrolment is allowed | Auth/profile rules | Needed before open registration |
| OQ-L-004 | Payment markets / Sudan support / tax | Commercial feasibility | Provider and market scope | Payments module | Deferrable until commercial phase |

### 8.5 Technical architecture decisions

| ID | Question | Why it matters | Needed decision | Depends on it | Can proceed without it? |
| --- | --- | --- | --- | --- | --- |
| OQ-T-001 | Authentication approach | Identity foundation | ADR (Auth.js vs alternative) | PSA-3 | Needed at PSA-3, not for empty PSA-1 apps |
| OQ-T-002 | Object storage provider | Media pipeline | ADR | PSA-6 | Later |
| OQ-T-003 | Payment provider | Entitlements funding | ADR after market study | PSA-10 | Later |
| OQ-T-004 | Email provider | Verification/notifications | Selection | Account lifecycle | Before registration launch |
| OQ-T-005 | Exact package layout vs UMB list | Repo coherence | Follow `PROJECT_STRUCTURE.md` / PSA unless ADR changes | Packaging | Yes — use current structure |

### 8.6 Operational decisions

| ID | Question | Why it matters | Needed decision | Depends on it | Can proceed without it? |
| --- | --- | --- | --- | --- | --- |
| OQ-O-001 | Pricing / free access / membership | Sustainability and UX | Tested pricing policy | Catalogue, payments | Later; keep configurable |
| OQ-O-002 | AdSense eligibility and placements | Revenue without harming learning | Adopt or reject ads policy | Public pages | UMB already forbids in-audio ads |
| OQ-O-003 | Budget and schedule for MVP | Delivery realism | Resource plan | All phases | Needed for management, not code compile |
| OQ-O-004 | Branch protection / required CI on `main` | Repo integrity | Complete PSA-0002/0009 | Integration quality | Tracked separately |

---

## 9. Implementation Readiness Assessment

### 9.1 Overall conclusion

**READY WITH CONDITIONS** for beginning PSA-1 (runtime and application skeleton) after PSA-0 exit criteria are met.

**NOT READY** for:

- advertising or selling regulated degrees;
- claiming accreditation or international recognition;
- hard-coding national credit/award frameworks;
- treating research notes as approved curricula.

### 9.2 Critical blockers (for regulated academic launch — not for PSA-1 skeleton)

1. Jurisdiction and Gate L0 legal feasibility unresolved (OQ-L-001).
2. Formal adoption of proposed AGQ/ACA/ACD/PSA still pending.
3. CONF-001 authority wording unresolved (operational risk if ignored).
4. First programme not formally selected (blocks meaningful academic content MVP).

### 9.3 Non-blocking issues for PSA-1

- Naming inconsistency (CONF-002) if provisional naming continues to be disclosed.
- UMB path inventory drift (CONF-003).
- Open pricing, ads, storage, payment, email provider choices.
- Full governance committee constitution.
- Type-aware linting and application test suites (later phases).

### 9.4 Decisions that can be deferred past PSA-1

- Credit framework selection.
- External examination arrangements.
- DRM.
- Advanced proctoring.
- Multi-programme expansion.
- Predictive analytics.
- Microservices.

### 9.5 Recommended prerequisites before / around PSA-1

1. Finish PSA-0 remaining PASS items (notably PSA-0002 branch protection evidence; PSA-0009 successful Actions run).
2. Provisionally follow AU-PSA-001 §0.4 precedence in engineering practice; schedule DEC-AUTH-001 approval.
3. Keep award issuance disabled and catalogue language non-claiming.
4. Create ADRs only when selecting auth/storage/payment providers.
5. Do not import supplementary research credit totals or proctoring defaults into schema without Academic Council / legal review.

### 9.6 Evidence supporting the conclusion

- Shared non-negotiables are coherent across all five canonical documents (section 5).
- Technical baseline for skeleton apps is aligned (Next.js/NestJS/PostgreSQL/Prisma/modular monolith).
- Explicit legal/academic gates already forbid the most dangerous premature implementations.
- Remaining gaps are mostly decisions and approvals, not undetected doctrinal contradictions.

---

## 10. Recommendations

1. **Approve DEC-AUTH-001** (formal precedence) and schedule a controlled UMB wording update to resolve CONF-001.
2. **Decide institutional naming** (CONF-002) before public launch assets are produced.
3. **Update UMB file map** in a separate approved docs task (CONF-003) to match the real repository.
4. **Keep supplementary research clearly labelled** as non-canonical in contributor onboarding.
5. **Select first programme** before content production tasks begin.
6. **Commission Gate L0 legal advice** in parallel with early engineering; do not wait until after marketing copy exists.
7. **Proceed to PSA-1 only after PSA-0 exits**, implementing skeleton apps without academic-policy invention in code.
8. **Retain proposed-status disclosure** until Governing Board / Academic Council approval records exist.

---

## 11. Approval-Required Decisions

| Decision ID | Decision needed | Proposed option (non-binding) | Approver |
| --- | --- | --- | --- |
| DEC-AUTH-001 | Adopt cross-document precedence | Adopt AU-PSA-001 §0.4 / AU-AGQ-001 Interpretation as institutional rule | Founder / Governing Board (when constituted) |
| DEC-NAME-001 | Legal and working names | Choose one legal name + allowed short forms; update docs | Founder + legal counsel |
| DEC-JURIS-001 | Jurisdiction of establishment | After qualified legal advice | Founder + legal counsel |
| DEC-PROG-001 | First programme | Computer Science & AI (UMB recommendation) or alternative | Academic authority when available; founder interim |
| DEC-CAL-001 | Term-based vs self-paced initial model | Keep configurable; choose default for first cohort later | Academic authority |
| DEC-CERT-001 | MVP certificate wording | Non-formal completion certificates only, honest labelling | Academic + legal review |
| DEC-AUTHN-001 | Authentication technology | Recorded via ADR at PSA-3 | Architecture authority + security review |

None of the above is approved by virtue of appearing in this report.

---

## 12. Limitations and Evidence References

### 12.1 Limitations

- AGQ/ACA/PSA remain “proposed”; this report cannot convert them into statutes.
- No jurisdiction-specific legal research was performed; none should be inferred.
- Supplementary Arabic research/history notes were used for context only.
- Deep line-by-line comparison of every checklist item across 6,000+ lines may still miss rare edge inconsistencies; material themes above were verified against the cited sections.
- Formal Governing Board / Academic Council bodies are not yet constituted; approval records in AGQ remain pending.

### 12.2 Evidence references (canonical)

- UMB: §§1–3, §5–10, §14, §19–22.
- ACD: §§0–2, §8, §§12–17, §24–25.
- ACA: §§1–2, §4–6, §9, §12–15, §17.
- AGQ: Document Control / Interpretation and precedence; §§1–2, §6–7, §11.
- PSA: §§0.2–0.4, §1–2, §7–10, §15, §19, §29.

### 12.3 Repository evidence for this task

- Working branch: `chore/psa-0-toolchain`
- Analysis baseline commit: `2b28d7ea52dde1a55fdcf40cd0bff2ec4e1d53c5`
- Deliverable path: `docs/governance/FOUNDATIONAL_DOCUMENTS_RECONCILIATION.md`
- Canonical five documents: **not modified** by this task

### 12.4 Counts (this report)

| Category | Count |
| --- | --- |
| Registered conflicts | 3 (CONF-001..003) |
| Consistency-matrix GAP/AMBIGUOUS/FUTURE items | See section 5 (majority CONSISTENT) |
| Open questions tabulated | 22 (OQ-*) |
| Approval-required decisions listed | 7 (DEC-*) |
| Critical blockers for regulated launch | 4 |
| Readiness conclusion | READY WITH CONDITIONS (PSA-1); NOT READY (regulated awards) |
