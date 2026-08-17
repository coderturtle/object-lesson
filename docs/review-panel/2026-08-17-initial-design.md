# Workshop Review Panel — Initial Design Pass

**Date:** 2026-08-17
**Scope:** `README.md`, `docs/workshop-design.md`, `docs/decisions.md`, `docs/next-actions.md` — post-naming, pre-Deliverables/branding checkpoint, per `workshop-gremlin.md`'s roster step 3.
**Personas:** 7, run independently and blind (parallel general-purpose subagents, no persona saw another's output before writing its own).

All seven personas returned distinct, non-empty findings — no persona came back purely complimentary. Full per-persona critiques are preserved below the synthesis, not just paraphrased (a persona's specific phrasing is often more useful than a summary), per the panel's own Outputs contract.

## Cross-persona agreement (highest-confidence signal)

**The README is not yet a learner-facing document — three personas converged on this independently, from three different lenses:**

- **Developer Evangelist:** the README's "Key Docs" section links exclusively to internal Hekton governance artifacts (session-log, decisions, risks, walkthrough, next-actions, operating-model, human-understanding-check, depth-decision) — zero links to any learning content. The Quick Start block is a literal placeholder comment. There is no funnel from "found the repo" to "started module 1."
- **End-User/Target Learner:** the README's one-sentence pitch is the *only* learner-facing text in the repo, and it leans on unexplained jargon ("harness-driven," "deterministic javac/JUnit gate") that a first-year student wouldn't have context for.
- **Professional Technical Writer:** three of the README's eight Key Docs links point at files that don't exist in `docs/`; `docs/workshop-design.md` — the largest, most substantive doc in the repo — isn't linked from the README at all; the "Implementation Status: initial setup in progress" line undersells a repo that already has a fully anchored 9-module arc and five logged decisions.

This is exactly the "split internal framing from learner framing" defect the Workshop Gremlin's own Deliverables & branding step is designed to fix (`workshop-gremlin.md`, roster item 4) — expected at this stage (branding hasn't run yet), but worth fixing now rather than carrying forward, since the Developer Evangelist also found a ready-made better hook already sitting unused in `workshop-design.md` line 61.

## Independent findings, by severity

1. **[AI/ML Practitioner, CONFIRMED via direct fetch]** `workshop-design.md`'s "Objects First with Java" chapter numbering is wrong for Part 2 (Ch10 onward). The real 7th-edition sequence is Ch10 *Working in teams*, Ch11 *Recursion*, Ch12 *Improving structure with inheritance*, Ch13 *More about inheritance*, Ch14 *Further abstraction techniques*, Ch15 *Data-oriented classes*, Ch16 *A brief history of Java*, Ch17 *Building GUIs*, Ch18 *Handling errors*, Ch19 *Designing applications*, Ch20 *A case study* — four chapters were silently dropped and everything after Ch9 renumbered down. **"Handling errors" is Ch18, not Ch14 as cited.** The qualitative sequencing argument (errors come after both inheritance chapters and abstraction) still holds — Module 08's placement rationale survives — but the specific citation is a factual error inside a section whose header claims direct verification. Oracle Tutorials and Exercism `config.json` citations were both independently spot-checked and confirmed accurate.

2. **[Skeptical Critic]** Three uneven-hedging findings: (a) the claim that Coachgremlin can reliably distinguish real from cosmetic encapsulation is stated as obligation ("must," Module 03) rather than hedged the way structurally similar claims elsewhere in the doc are; (b) "this is how Exercism structures every track" generalizes from two data points (Rust, Java); (c) the differentiator's negative claims ("none teach agent-native... none grade... none leave a keepable takeaway") get no citation, unlike the positive curriculum-structure claims two paragraphs earlier, despite equal stated confidence.

3. **[Instructional Designer]** Two of the module arc's "hard prerequisite" claims are weaker than the "hard" label implies: Module 03 (Encapsulation)←02 (Constructors) is a thematic echo, not a structural block (nothing prevents teaching encapsulation on a default-constructed object); Module 06 (Abstraction)←05 (Polymorphism) is undercut by the doc's own Oracle citation, which covers Interfaces *before* the Polymorphism subsection in the same lesson. The other two hard-prerequisite claims in the table (04←01+03, 05←04) hold up under the same scrutiny.

4. **[Instructional Designer]** Capstone (Module 09) synthesis is asserted, not designed — the arc table's cross-reference row is entirely "—" and the fixture is explicitly deferred. Real risk that a single seeded flaw ends up exercising 1-2 concepts, not the claimed 3+, unless the capstone fixture is deliberately built to require touching encapsulation, inheritance/polymorphism, and composition simultaneously.

5. **[Instructional Designer]** The "optional" framing of the Generics & Collections extension (folded into Module 06) is likely aspirational — realistic Module 07-09 exercises (composition over a collection of parts, batch exception handling, a capstone fixture) will plausibly need `List`/`Map` regardless of whether a learner did the "optional" extension.

6. **[Security-Conscious Reviewer]** No commitment to sandboxed/isolated execution for the deterministic gate (`javac`/JUnit/Checkstyle running agent-generated code). Worth closing explicitly given this audience is genuinely new to programming, not just new to a language the way `borrow-native`'s audience was — no auto-merge or blind-trust pattern found, this is the one open gap.

7. **[Professional Technical Writer]** Minor: an unresolved `<hekton-machinery>` placeholder-looking path token (`workshop-design.md` line 49); a leftover scaffold placeholder in the README Quick Start; a repetitive "X, not Y" hedge construction used so densely it dilutes genuinely load-bearing caveats (e.g. the Checkstyle/clippy analogy caveat) to the same volume as throwaway ones; the module-arc table and takeaway table are separated by ~60 lines of prose.

**No disagreements surfaced between personas on this pass** — findings are additive across lenses, not contradictory. One tension worth naming rather than smoothing over: the AI/ML Practitioner called the design reasoning "technically sound throughout," while the Instructional Designer independently found two of the arc's own prerequisite claims don't hold up structurally. Both are correct at once — the *reasoning style* is sound, but not every specific claim survives scrutiny equally.

## Prioritized action list

Ordered by (a) persona convergence, (b) severity, (c) cost to fix now vs. defer to Deliverables & branding.

**Applied directly in this pass (cheap, text-only, doesn't require new design judgment):**
1. Rewrite `README.md` to split learner-facing pitch from maintainer/governance framing; fix the three broken Key Docs links; link `docs/workshop-design.md`; replace the jargon-heavy tagline with the sharper existing hook; fix the stale Quick Start placeholder and status line.
2. Correct the Objects First chapter-numbering citation in `docs/workshop-design.md` (Ch10-20, Part 2).
3. Tighten the three hedging inconsistencies the Skeptical Critic found.
4. Fix the `<hekton-machinery>` placeholder token.

**Deferred as explicit inputs to the Deliverables & branding step (real design decisions, not text fixes — `docs/next-actions.md` updated accordingly):**
5. Reassess Module 03←02 and Module 06←05 prerequisite claims — either strengthen the justification or relabel as editorial ordering rather than hard blocks.
6. Design the capstone (Module 09) fixture requirement explicitly: must touch 3+ concepts, not left to chance.
7. Reconsider whether Generics & Collections should be a required-but-light module rather than fully optional.
8. Add a sandboxed/isolated-execution commitment for the deterministic gate, given the true-beginner audience.

Not acted on: the Skeptical Critic's fourth finding (the subject-beginner/harness-fluent population assumption being walled off from hedging) — this reflects an already-made, deliberate scoping decision from the human directing this workshop, not an open design question; noted here rather than silently dropped.
