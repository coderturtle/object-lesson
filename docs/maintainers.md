# Maintainers

This is the internal/agent-facing doc. Learners should read the top-level `README.md` instead; this file is for anyone working on the workshop itself.

**Classification:** factory-output
**Lifecycle:** active
**Owner:** coderturtle
**Promotion target:** `none`

This repo has two goals:

1. **Ship a workshop** teaching object-oriented programming fundamentals (classes/objects, encapsulation, inheritance, polymorphism, abstraction, composition vs. inheritance, exception handling) in Java, to first-year college students who are new to OOP and Java but already fluent with a coding-agent harness — taught by running every exercise through that harness with `javac`/JUnit/Checkstyle as a deterministic gate, and Coachgremlin grading the conceptual/design-judgment layer on top.
2. **Feed evidence back into the reusable machinery**: this is the Workshop Gremlin's third real run (`terminal-velocity` first, `borrow-native` second) and its first true-subject-beginner audience — the prior two assumed general programming fluency, this one doesn't. Findings worth writing back to `~/hekton/gremlins/workshop/workshop-gremlin.md` should be captured as this run progresses.

## Implementation Status

- 2026-08-17 — Scaffolded as factory-output (working title `java-oop-workshop`). Naming pass complete: **Object Lesson**, local dir/GitHub repo/private sibling/vault card all renamed to match.
- Design brief complete: see [Workshop Design](workshop-design.md) — audience, deterministic-gate method, 9-module arc anchored to Oracle's Java Tutorials, "Objects First with Java," and Exercism's Java track.
- First [Workshop Review Panel](review-panel/2026-08-17-initial-design.md) run complete against the naming + design docs — all seven personas returned distinct findings; cheap, design-doc-text fixes applied in the same pass (this README rewrite among them). See that report's prioritized action list for what's fixed vs. deferred to the next step.
- Module skeleton, brand layer, and the build-log/Pages site are the remaining Completion Condition items — see [Next Actions](next-actions.md).

## Documentation Contract

Agents working here must inspect `.hekton/project.yaml` before structural changes, record meaningful design decisions in `docs/decisions.md`, and update `docs/next-actions.md` when the work queue changes. Session/agent-run/change logs, the Human Understanding Check, and the Depth Decision live in the private sibling repo (`object-lesson-private/`), not here — this repo was scaffolded under the post-2026-07-25 public/private split, so it never carries that control-plane content.

Vault mutation is not allowed by default (`vault_mutation_allowed: false` in `.hekton/project.yaml`). The repo-local `mind-palace/` folder (in the private sibling) is only a mirror draft; do not write to the live vault unless explicitly authorised in-session — this project's naming-rename vault mutation was authorised in-session on 2026-08-17, see `docs/decisions.md`.

## Key Docs

- [Workshop Design](workshop-design.md) — audience, format, deterministic-gate teaching method, curriculum-anchored module arc
- [Workshop Review Panel Report](review-panel/2026-08-17-initial-design.md) — 7-persona critique of the naming + design docs, first run
- [Decisions](decisions.md)
- [Next Actions](next-actions.md)
- [Risks](risks.md)
- [Project Walkthrough](project-walkthrough.md)
- [Operating Model](operating-model.md)
