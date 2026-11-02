# PSA-0 — Project Foundation

**Phase status:** IN PROGRESS  
**Phase owner:** Project founder / engineering lead  
**Source:** AU-PSA-001, section 29  
**Last updated:** 2026-11-02

## Objective

Establish a controlled, understandable and reproducible repository foundation before creating the web/API applications or database.

## Task checklist

| Task ID  | Task                                                       | Status      | Acceptance / evidence                                                                                                                                                                                                                                                                                                                |
| -------- | ---------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PSA-0001 | Read, import and reconcile the five foundational documents | PARTIAL     | All five canonical documents imported in full to their canonical paths. Supplementary curriculum research and project-origin notes preserved. Cross-document reconciliation report, authority mapping and explicit conflict/open-question register still required.                                                                   |
| PSA-0002 | Establish repository and branch strategy                   | PARTIAL     | Private repository `hussin08max/sounds-university`, default branch `main`, and admin/push access confirmed. Working branch `chore/psa-0-toolchain` created. Branch protection/ruleset could not be inspected or configured through the current GitHub integration (API returned 403); must be checked in GitHub repository settings. |
| PSA-0003 | Create `AGENTS.md`                                         | PASS        | Engineering rules committed. Includes source precedence, task contract, security, documentation and evidence-based completion requirements.                                                                                                                                                                                          |
| PSA-0004 | Create `ARCHITECTURE.md` and link technical reference      | PASS        | Architecture entry point committed and links to the canonical AU-PSA-001 document.                                                                                                                                                                                                                                                   |
| PSA-0005 | Create ADR template and decision register                  | PASS        | ADR process, register and reusable template committed.                                                                                                                                                                                                                                                                               |
| PSA-0006 | Create `ROADMAP.md` and task status conventions            | PASS        | Master dashboard and detailed PSA-0 checklist committed; all task states and evidence rules documented.                                                                                                                                                                                                                              |
| PSA-0007 | Pin Node.js, pnpm and TypeScript versions                  | PASS        | Exact baseline verified locally: Node.js v26.13.0, pnpm 12.16.1, TypeScript Version 6.0.3. `pnpm install` and `pnpm install --frozen-lockfile` succeeded. `pnpm-lock.yaml` committed in `d6494d6`.                                                                                                                                   |
| PSA-0008 | Establish formatting, lint and typecheck                   | PASS        | Prettier 3.9.10, ESLint 10.14.0, typescript-eslint 8.72.1, eslint-config-prettier 10.1.8, @eslint/js 10.0.1 configured. Scripts `format`, `format:check`, `lint`, `typecheck` verified exit 0. Canonical academic documents excluded from Prettier. See verification log.                                                            |
| PSA-0009 | Establish CI pipeline for basic checks                     | NOT STARTED | GitHub Actions workflow must execute on a pull request and pass.                                                                                                                                                                                                                                                                     |

## Foundational documents imported

| Document                                            | Repository path                                                      | Status   |
| --------------------------------------------------- | -------------------------------------------------------------------- | -------- |
| University Master Blueprint                         | `docs/institutional/UNIVERSITY_MASTER_BLUEPRINT.md`                  | Imported |
| Academic Content Development Standard               | `docs/academic/ACADEMIC_CONTENT_DEVELOPMENT_STANDARD.md`             | Imported |
| Academic Curriculum Architecture                    | `docs/academic/ACADEMIC_CURRICULUM_ARCHITECTURE.md`                  | Imported |
| Academic Governance and Quality Assurance Framework | `docs/governance/ACADEMIC_GOVERNANCE_QUALITY_ASSURANCE_FRAMEWORK.md` | Imported |
| Platform Software Architecture                      | `docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md`                | Imported |

Supplementary files imported:

- `docs/academic/research/WHERE_TO_FIND_CURRICULA.md`
- `docs/academic/research/INITIAL_CURRICULA_AND_TEACHING_MODEL.md`
- `docs/project-history/PROJECT_ORIGIN_NOTES.txt`

## Toolchain baseline

See [TOOLCHAIN.md](../architecture/TOOLCHAIN.md).

| Tool              | Pinned version | Verification                                       |
| ----------------- | -------------: | -------------------------------------------------- |
| Node.js           |        26.13.0 | PASS — `node --version` → `v26.13.0`               |
| pnpm              |        12.16.1 | PASS — `pnpm --version` → `12.16.1`                |
| TypeScript        |          6.0.3 | PASS — `pnpm exec tsc --version` → `Version 6.0.3` |
| Prettier          |         3.9.10 | PASS — `pnpm format:check` exit 0                  |
| ESLint            |        10.14.0 | PASS — `pnpm lint` exit 0                          |
| typescript-eslint |         8.72.1 | PASS — used by root ESLint flat config             |

Lockfile is generated and updated only by pnpm. First lockfile commit: `d6494d6`.

## Verification log

### 2026-11-02 — Repository inspection

- Repository: `hussin08max/sounds-university`.
- Visibility: Private.
- Default branch: `main`.
- Initial state: empty repository; no branches returned at first inspection.
- GitHub connection reports admin, maintain and push permissions.
- Confirmed initial repository files and the canonical technical architecture document are retrievable from GitHub.
- Branch protection endpoint returned HTTP 403 from the integration. This is an access limitation of the current integration path, not evidence that branch protection is enabled or disabled.

### 2026-11-02 — Documentation bootstrap

- Created root navigation and project instructions.
- Created project structure and architecture entry points.
- Created ADR template and decision register.
- Created master roadmap and PSA-0 detailed checklist.
- Imported all five canonical documents and three supplementary planning sources.
- Added toolchain pin files and baseline configuration.

### 2026-11-02 — PSA-0007 local toolchain verification

Branch: `chore/psa-0-toolchain`.

Commands and results:

| Command                          | Result          |
| -------------------------------- | --------------- |
| `node --version`                 | `v26.13.0`      |
| `pnpm --version`                 | `12.16.1`       |
| `pnpm install`                   | succeeded       |
| `pnpm install --frozen-lockfile` | succeeded       |
| `pnpm exec tsc --version`        | `Version 6.0.3` |

Evidence artefact: `pnpm-lock.yaml` committed in `d6494d6` (`chore: add pnpm lockfile`).

### 2026-11-02 — PSA-0008 formatting, lint and typecheck

Selected exact versions and installed with pnpm at the workspace root:

- `prettier@3.9.10`
- `eslint@10.14.0`
- `typescript-eslint@8.72.1`
- `eslint-config-prettier@10.1.8`
- `@eslint/js@10.0.1`

Configuration added:

- `.prettierrc.json`, `.prettierignore`
- `eslint.config.mjs`
- `tsconfig.json`
- `toolchain-check.ts` (minimal non-application TypeScript input)
- `package.json` scripts: `format`, `format:check`, `lint`, `typecheck`

Commands and results:

| Command                          | Result                                |
| -------------------------------- | ------------------------------------- |
| `pnpm install`                   | succeeded                             |
| `pnpm install --frozen-lockfile` | succeeded                             |
| `pnpm format`                    | exit 0 (engineering docs/config only) |
| `pnpm format:check`              | exit 0                                |
| `pnpm lint`                      | exit 0                                |
| `pnpm typecheck`                 | exit 0                                |
| `pnpm exec tsc --version`        | `Version 6.0.3`                       |
| `git diff --check`               | exit 0                                |

Canonical academic/institutional documents were not modified. `.prettierignore` excludes those paths.

Limitations:

- No application TypeScript packages exist yet; typecheck covers only `toolchain-check.ts` under the root `tsconfig.json`.
- ESLint uses non-type-aware recommended rules; type-aware rules deferred to PSA-1+.
- CI automation is intentionally out of scope (PSA-0009).

## Open items / risks

1. Complete a cross-document reconciliation report for PSA-0001, preserving the documents' authority and recording conflicts instead of silently rewriting them.
2. Inspect GitHub Settings → Rules → Rulesets / Branch protection for `main`; configure PR-based integration, block force-push and deletion, and require CI checks once available. Avoid requiring an approving review if this remains a single-maintainer repository.
3. Add GitHub Actions for `format:check`, `lint` and `typecheck`, and verify a successful workflow run (PSA-0009).
4. When PSA-1 introduces apps/packages, extend ESLint/TS project references and revisit type-aware linting.

## Exit gate

PSA-0 passes only when PSA-0001 through PSA-0009 are each `PASS`, with clean installation, repeatable quality checks and a working CI run evidenced.
