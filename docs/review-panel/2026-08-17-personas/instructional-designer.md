# Instructional Designer Critique — Object Lesson Design Pass

## Findings

**1. Two "hard prerequisite" claims are sequencing preference dressed as dependency.**
- **Module 03 (Encapsulation) ← 02 (Constructors):** the stated reasoning ("constructors are the first guarantee fields start valid; encapsulation is that same guarantee, sustained") is a thematic echo, not a structural dependency. Nothing about teaching private fields + accessor methods requires the learner to have already built a parameterized constructor — you can encapsulate a default-constructed object just as well. This reads as narrative continuity wearing prerequisite language.
- **Module 06 (Abstraction) ← 05 (Polymorphism):** "an abstract method... presupposes understanding overriding" is weaker than claimed. Interfaces-as-contracts don't require dynamic-dispatch understanding first — the doc's own Oracle anchor (Lesson 5) covers *Interfaces* before the *Polymorphism* subsection within the same lesson, undercutting the claim that overriding must land first. This one is worth a real justification or a downgrade from "hard prerequisite" to "editorial ordering choice."

By contrast, 04←01+03 (protected meaningless without private) and 05←04 (dispatch needs a subclass relation) both hold up as genuine hard blocks — the table isn't uniformly weak, just inconsistent in where it applies the "hard" label.

**2. Capstone (Module 09) synthesis is asserted, not designed.** The arc table's cross-reference row is entirely "—", and the takeaway description explicitly defers the fixture: "exact capstone artifact/fixture is a later design decision, not fixed in this pass." A single "seeded design flaw" could easily exercise only 1-2 concepts (e.g., one bad inheritance call) rather than genuinely integrating 3+. At minimum, flag as a next-action that the capstone fixture must be *designed* to require touching encapsulation, inheritance/polymorphism, and composition simultaneously — otherwise "synthesis" is aspirational, not structural.

**3. The "optional" Generics & Collections extension is likely load-bearing in practice.** Realistic Module 07/08/09 exercises (composition holding a collection of parts, exception-handling over a batch, a capstone fixture) will plausibly need `List`/`Map` regardless of whether a learner did the "optional" extension — making it not truly skippable, just untaught for learners who skip it.

**No issue found:** hands-on-by-design and the deterministic-gate/Coachgremlin split are both correctly implemented at this design-pass stage — Checkstyle is explicitly kept out of the conceptual-tier's job, and Modules 03/07 name the escape-hatch failure modes precisely where the deterministic tier structurally can't catch them.
