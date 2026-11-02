# Development Toolchain Baseline

**Status:** Verified PSA-0 baseline
**Reviewed:** 2026-11-02
**Related tasks:** PSA-0007, PSA-0008

## Pinned versions

| Tool                   | Version | Reason                                                                                    |
| ---------------------- | ------: | ----------------------------------------------------------------------------------------- |
| Node.js                | 26.13.0 | Active LTS line as of 2026-11-02                                                          |
| pnpm                   | 12.16.1 | Stable pnpm 12 release; supports Node.js 26                                               |
| TypeScript             |   6.0.3 | Stable TypeScript 6 line; NestJS 12 migration guidance requires TypeScript 6 peer tooling |
| Prettier               |  3.9.10 | Current stable formatter; single responsibility for formatting                            |
| ESLint                 | 10.14.0 | Current stable linter; flat config                                                        |
| typescript-eslint      |  8.72.1 | Official TypeScript lint integration; peer-compatible with TypeScript 6.0.x and ESLint 10 |
| @eslint/js             |  10.0.1 | Recommended JS baseline rules for ESLint flat config                                      |
| eslint-config-prettier |  10.1.8 | Turns off ESLint rules that conflict with Prettier; avoids duplicate format enforcement   |

The repository pins Node.js in both `.nvmrc` and `.node-version`, pnpm through the root `packageManager` field and `engines`, and all listed tools as exact root development dependencies. Do not use floating tags such as `latest` in the committed project manifest. Update the lockfile only through pnpm.

## Quality scripts

| Script         | Command                         | Purpose                                |
| -------------- | ------------------------------- | -------------------------------------- |
| `format`       | `prettier --write .`            | Apply formatting                       |
| `format:check` | `prettier --check .`            | Fail if formatting differs             |
| `lint`         | `eslint .`                      | Lint configured JS/TS inputs           |
| `typecheck`    | `tsc --noEmit -p tsconfig.json` | TypeScript compiler check without emit |

## Configuration decisions

- **Simplest maintainable split:** Prettier formats; ESLint lints; `tsc` typechecks. No `eslint-plugin-prettier`, no Biome, no Stylelint in PSA-0.
- **Prettier:** `.prettierrc.json` uses single quotes, trailing commas, print width 100, LF endings (aligned with `.editorconfig` / `.gitattributes`).
- **Markdown protection:** `.prettierignore` excludes the five canonical academic/institutional documents and related source trees (`docs/institutional/`, `docs/academic/`, `docs/governance/`, `docs/architecture/PLATFORM_SOFTWARE_ARCHITECTURE.md`, `docs/project-history/`) so auto-format cannot rewrite authoritative academic content.
- **ESLint:** Flat config in `eslint.config.mjs` with `@eslint/js` recommended, `typescript-eslint` recommended (non-type-aware), and `eslint-config-prettier`. Type-aware lint rules are deferred until application packages exist.
- **TypeScript:** Root `tsconfig.json` enables strict options and `noEmit`. `toolchain-check.ts` is a minimal non-application input so `pnpm typecheck` succeeds before PSA-1 application packages exist. Application `tsconfig` files in PSA-1 should extend or replace this baseline intentionally.
- **No frameworks yet:** Next.js, NestJS, Prisma and application source are out of scope for PSA-0007/PSA-0008.

## Compatibility rationale

- Node.js 26 entered Active LTS on 2026-10-28. The 26.x line is scheduled for end-of-life in April 2029, subject to the upstream release schedule.
- pnpm 12 supports Node.js 26. The selected exact pnpm version is recorded so local development and CI can use the same package manager.
- TypeScript 7.0 is the current TypeScript major, but the NestJS migration guidance currently directs NestJS 12 projects to TypeScript 6. Nest CLI tooling relies on compiler integration that is not yet a safe assumption for TypeScript 7. We therefore pin TypeScript 6.0.3 for the initial Next.js/NestJS codebase and will revisit only after framework tooling compatibility is verified.
- `typescript-eslint@8.72.1` declares a TypeScript peer range that includes 6.0.x and an ESLint peer range that includes 10.x.
- The exact framework versions will be selected and locked during PSA-1 after generating and testing the application skeleton. This file does not pre-approve arbitrary framework versions.

## Verification evidence (2026-11-02)

Recorded locally on branch `chore/psa-0-toolchain` after lockfile commit `d6494d6` and PSA-0008 tooling install:

```powershell
node --version
pnpm --version
pnpm install
pnpm install --frozen-lockfile
pnpm exec tsc --version
pnpm format:check
pnpm lint
pnpm typecheck
git diff --check
```

Observed:

- Node reports `v26.13.0`.
- pnpm reports `12.16.1`.
- TypeScript reports `Version 6.0.3`.
- `pnpm install` succeeded.
- `pnpm install --frozen-lockfile` succeeded.
- `pnpm-lock.yaml` first committed in `d6494d6`; updated again by pnpm when quality-tool dependencies were added.
- `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, and `git diff --check` all exited 0.

## Upgrades

Toolchain upgrades require:

1. Confirmed stable release and support status.
2. Compatibility check against Next.js, NestJS, Prisma and CI tooling in use.
3. An explicit version update in the repository.
4. A clean install and all relevant checks (`format:check`, `lint`, `typecheck`, and CI once PSA-0009 exists).
5. Roadmap and verification log updates.

## Upstream references

- Node.js release schedule: https://github.com/nodejs/Release#release-schedule
- Node.js 26.13.0 release: https://github.com/nodejs/node/releases
- pnpm installation and Node compatibility: https://pnpm.io/installation
- pnpm npm release versions: https://www.npmjs.com/package/pnpm
- NestJS migration guide: https://docs.nestjs.com/migration-guide
- TypeScript npm releases: https://www.npmjs.com/package/typescript
- Prettier releases: https://github.com/prettier/prettier/releases
- ESLint releases: https://eslint.org/
- typescript-eslint releases: https://github.com/typescript-eslint/typescript-eslint/releases
