# Architecture Decision Records

This directory stores material technical decisions for Sounds University.

## ADR lifecycle

1. Create an ADR as `ADR-NNNN-short-title.md`.
2. Set status to `PROPOSED`.
3. Record context, real alternatives, trade-offs and consequences.
4. Include security, privacy, academic, operational and cost implications where relevant.
5. Identify required approvals and affected documents.
6. Change status to `ACCEPTED`, `REJECTED` or `SUPERSEDED only after an explicit decision.
7. Update this register and affected roadmap/documentation.
8. Never erase a superseded decision; link the replacement.

## Status vocabulary

- `PROPOSED`
- `ACCEPTED`
- `REJECTED`
- `SUPERSEDED`

## Register

| ADR      | Title                    | Status                            | Decision date |
| -------- | ------------------------ | --------------------------------- | ------------- |
| ADR-0000 | ADR process and template | ACCEPTED as repository convention | 2026-11-02    |

The baseline decisions listed in AU-PSA-001 section 28 remain the architecture baseline. Implementation-specific choices (for example, exact authentication, hosting, storage or payment provider) require their own ADR when the relevant phase is reached.

## Template

Use [`0000-template.md`](./0000-template.md).
