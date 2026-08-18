# Maintainers

This is the internal/agent-facing doc. Learners should read the top-level `README.md` instead; this file is for anyone working on the workshop itself.

**Classification:** factory-output
**Lifecycle:** active
**Owner:** coderturtle
**Promotion target:** `none`

This repo has two goals:

1. **Ship a workshop** teaching object-oriented programming fundamentals (classes/objects, encapsulation, inheritance, polymorphism, abstraction, composition vs. inheritance, exception handling) in Java, to first-year college students who are new to OOP and Java but already fluent with a coding-agent harness — taught by running every exercise through that harness with `javac`/JUnit/Checkstyle as a deterministic gate, and Coachgremlin grading the conceptual/design-judgment layer on top.
2. **Feed evidence back into the reusable machinery**: this is the Workshop Gremlin's third real run (`terminal-velocity` first, `borrow-native` second) and its first true-subject-beginner audience — the prior two assumed general programming fluency, this one doesn't. Findings worth writing back to the internal Workshop Gremlin definition should be captured as this run progresses.

## Implementation Status

- 2026-08-17 — Scaffolded as factory-output (working title `java-oop-workshop`). Naming pass complete: **Object Lesson**, local dir/GitHub repo/private sibling/vault card all renamed to match.
- Design brief complete: see [Workshop Design](workshop-design.md) — audience, deterministic-gate method, 9-module arc anchored to Oracle's Java Tutorials, "Objects First with Java," and Exercism's Java track.
- First [Workshop Review Panel](review-panel/2026-08-17-initial-design.md) run complete against the naming + design docs — all seven personas returned distinct findings; cheap, design-doc-text fixes applied in the same pass (this README rewrite among them). See that report's prioritized action list for what's fixed vs. deferred to the next step.
- 2026-08-17 — Deliverables & branding step complete: module skeleton (all 9 modules, `modules/`),
  brand layer ([Brand](brand.md)), and README brought into voice compliance. All four findings the
  Review Panel deferred to this step were resolved as real design decisions in
  [Workshop Design](workshop-design.md) and `docs/decisions.md`, not silently carried forward — see
  those files' 2026-08-17 entries. Also found and fixed a real scaffold-template bug: the
  post-2026-07-25 public/private split scaffolds `setup-hooks.sh`/`check-mirror-drift.sh` into the
  private sibling, but the sibling isn't a git repo, so the pre-push hook never installed; both
  scripts now live in this repo's `scripts/` instead, and `scripts/check-brand-lint.sh` is wired in
  alongside them.
- The build-log/Pages site is the one remaining Completion Condition item — see [Next Actions](next-actions.md).

## Documentation Contract

Agents working here must inspect `.hekton/project.yaml` before structural changes, record meaningful design decisions in `docs/decisions.md`, and update `docs/next-actions.md` when the work queue changes. Session/agent-run/change logs, the Human Understanding Check, and the Depth Decision live in the private sibling repo (`object-lesson-private/`), not here — this repo was scaffolded under the post-2026-07-25 public/private split, so it never carries that control-plane content.

Vault mutation is not allowed by default (`vault_mutation_allowed: false` in `.hekton/project.yaml`). The repo-local `mind-palace/` folder (in the private sibling) is only a mirror draft; do not write to the live vault unless explicitly authorised in-session — this project's naming-rename vault mutation was authorised in-session on 2026-08-17, see `docs/decisions.md`.

## Key Docs

- [Workshop Design](workshop-design.md) — audience, format, deterministic-gate teaching method, curriculum-anchored module arc
- [Modules](../modules/README.md) — the 9-module arc index and current skeleton status
- [Brand](brand.md) — voice, hard rules, visual identity for published content
- [Workshop Review Panel Report](review-panel/2026-08-17-initial-design.md) — 7-persona critique of the naming + design docs, first run
- [Decisions](decisions.md)
- [Next Actions](next-actions.md)
- [Risks](risks.md)
- [Project Walkthrough](project-walkthrough.md)
- [Operating Model](operating-model.md)
