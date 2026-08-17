# Next Actions: Object Lesson

## Immediate

- [x] Define project brief — `docs/workshop-design.md` written 2026-08-17 (module arc, gate design, canonical-curriculum anchor research); private-sibling `brief.md` filled to match.
- [x] Record first design decisions in `docs/decisions.md` — naming, audience framing, language/anchor choice, deterministic-gate design, and module-arc anchor all logged 2026-08-17.
- [x] Workshop Review Panel first pass against `docs/workshop-design.md` — run 2026-08-17, all seven personas returned distinct findings, report at `docs/review-panel/2026-08-17-initial-design.md`. Cheap doc-text fixes (README rewrite/maintainers split, an Objects First chapter-numbering citation error, three hedging inconsistencies) applied in the same pass; four structural findings deferred to the Deliverables & branding step below.
- [ ] Deliverables & branding step: module directory skeleton (all 9 modules, using the module-README template's 8 parts — question, arc position, objectives, exercise-material pointer, required gate, takeaway, stop condition, "skeleton only" banner) plus the brand layer (name, tagline, voice notes applied to README/site). Take these four Review Panel findings as explicit inputs:
  - Reassess Module 03←02 and Module 06←05 "hard prerequisite" claims (Instructional Designer found both weaker than stated) — strengthen the justification or relabel as editorial ordering.
  - Design the Module 09 capstone fixture to deliberately require touching 3+ concepts (encapsulation, inheritance/polymorphism, composition) — currently asserted, not designed.
  - Decide whether Generics & Collections (Module 06's "optional" extension) should be required-but-light instead, since later modules will likely need `List`/`Map` regardless.
  - Add an explicit sandboxed/isolated-execution commitment for the deterministic gate (`javac`/JUnit/Checkstyle running agent-generated code), given the true-beginner audience.
- [ ] Build-log/Pages site skeleton (Astro-on-Pages, reusing the `terminal-velocity`/`borrow-native` pipeline) and the GitHub Actions deploy workflow — not yet stood up.

## This Week

-

## Later

- [ ] Decide the shared-project-vs-independent-exercises question left open in `docs/workshop-design.md`'s "out of scope" section, before Coachgremlin authors Module 01 content.
- [ ] Re-run the Workshop Review Panel once real module content exists.
