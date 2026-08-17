# Modules

Object Lesson's spine is this workshop's own dependency reasoning about Java OOP, checked against
three real curriculum anchors (Oracle's Java Tutorials, "Objects First with Java," Exercism's Java
track) but not copied from any of them: **Classes & Objects → Constructors → Encapsulation →
Inheritance → Polymorphism → Abstraction → Composition vs. Inheritance → Exception Handling**, then
a synthesis capstone. Work through them in order. Each module states its real hard prerequisite,
and, where this workshop chose an ordering beyond what's structurally required, says so explicitly
rather than dressing up a preference as a rule - see `docs/workshop-design.md`'s "Prerequisite
reassessment" for two places where an earlier draft got that distinction wrong and was corrected.

Every module's core exercise is run through your own coding-agent harness (a *harness* here means
Claude Code, Codex, or an equivalent coding agent you already drive day to day) - see
`docs/workshop-design.md` for the full method. Two gates, not one: a **deterministic tier**
(`javac` compiles clean, JUnit green, Checkstyle clean - no judgment call) and a **conceptual tier**
(Coachgremlin, an agent role that checks design judgment on top of a passing compile: is this
encapsulation real or cosmetic, was inheritance the right call or just the first one that
compiled). See `docs/workshop-design.md`'s "The teaching method" for the full reasoning, including
why the deterministic tier alone is a structurally weaker filter here than it was for the sibling
Rust workshop this one borrows its two-tier shape from.

**Hands-on by design, not passive text.** No module here completes by reading it. Every module
states a required gate: an artifact you produce or a diagnosis you defend, checked first
mechanically, then conceptually. If a module ever reduces to "read this, then move on," that's a
defect. Every gate also has a stated **takeaway**: you keep something reusable, not just proof you
did the exercise.

**Execution environment.** Every deterministic-tier check (`javac`/JUnit/Checkstyle) runs inside an
isolated, ephemeral sandbox, never directly on your machine or the maintainer's - a design
commitment made explicit in `docs/workshop-design.md`'s "Execution environment" section precisely
because this workshop, unlike its Rust sibling, assumes a genuinely new-to-programming audience.
The actual sandboxed runner is not built yet; it is a hard requirement on Module 01's content-build
step, not an afterthought.

> **Content status: skeleton only.** All nine modules below have a decided question, arc position,
> gate shape, and takeaway shape - that is what this page and each module's own README describe.
> None has an authored exercise, fixture, or rubric yet. That is Coachgremlin's job, run later, one
> module at a time, per the Workshop Gremlin's own Completion Condition (it stops before content
> exists). See `docs/next-actions.md` for what happens next.

## The arc

| # | Module | Hard prerequisite | The question it answers | Required gate (once authored) |
|---|---|---|---|---|
| 01 | [Classes & Objects](01-classes-and-objects/README.md) | none (general programming fluency assumed; zero OOP/Java assumed) | What's the difference between a class and the objects made from it, and why does that distinction matter? | `javac` compiles clean, JUnit green, Checkstyle clean (deterministic) + Coachgremlin confirms the class/object distinction is actually understood, not just typed correctly (conceptual) |
| 02 | [Constructors](02-constructors/README.md) | 01 | How do I guarantee a new object starts in a valid state, not a half-built one? | Deterministic tier green on a correctly-initialized class + Coachgremlin confirms no field is left able to hold an invalid starting value (conceptual) |
| 03 | [Encapsulation](03-encapsulation/README.md) | 01\* (see "Prerequisite reassessment" in `docs/workshop-design.md`; sequenced after 02 for editorial reasons) | What can still go wrong to this object's state after it's built, and how do I actually stop it? | Deterministic tier green (a getter/setter pair alone passes this identically to real encapsulation, by construction) + Coachgremlin confirms the class protects a real invariant, not just wraps every field in an accessor (conceptual - the deterministic tier structurally cannot catch this one) |
| 04 | [Inheritance](04-inheritance/README.md) | 01 + 03 (`protected` has no meaning before `private` does) | When does one class genuinely extend another, versus just reusing its code because it's convenient? | Deterministic tier green on a correct subclass + Coachgremlin confirms an *is-a* relationship genuinely holds (conceptual) |
| 05 | [Polymorphism](05-polymorphism/README.md) | 04 (dynamic dispatch needs a subclass relationship to dispatch across) | Why did this method run instead of that one? | Deterministic tier green demonstrating correct dynamic dispatch + Coachgremlin confirms the learner can explain the dispatch, not just that the test passed (conceptual) |
| 06 | [Abstraction](06-abstraction/README.md) - includes a required-but-light Collections baseline; deeper Generics authorship is an optional extension | 04\* (an abstract method/interface contract presupposes overriding, introduced in 04; sequenced after 05 for editorial reasons - see "Prerequisite reassessment") | What's a contract for future overriding, and when should this class not be instantiable at all? | Deterministic tier green on a correct abstract class/interface use, plus baseline `List`/`Map` usage + Coachgremlin confirms the interface-vs-abstract-class choice is defensible, not arbitrary (conceptual) |
| 07 | [Composition vs. Inheritance](07-composition-vs-inheritance/README.md) | 04 + 06 (an informed call needs both tools already used, not just read about) | Does this relationship actually have an *is-a* or a *has-a* shape, and does it matter which I pick? | Deterministic tier green on a correctly-composed design + Coachgremlin confirms inheritance wasn't reached for just because it compiled first (conceptual) |
| 08 | [Exception Handling](08-exception-handling/README.md) | 04 + 06 (Java's own exception hierarchy is itself an inheritance tree) | How do I signal that something went wrong in a way the caller can actually act on? | Deterministic tier green on correct exception propagation + Coachgremlin confirms the exception type is one a caller could match on, not a stringly-typed catch-all (conceptual) |
| 09 | [Synthesis capstone](09-synthesis-capstone/README.md) | all of the above | Given a broken design, which concept is actually the root cause? | Deterministic tier green on the fixed program + a written diagnosis Coachgremlin confirms correctly names all concepts jointly responsible (the seeded flaw is required to touch 3+ of encapsulation, inheritance/polymorphism, and composition simultaneously - see `docs/workshop-design.md`'s "Capstone requirement") |

\* See `docs/workshop-design.md`'s "Prerequisite reassessment" - Modules 03 and 06's table entries
were corrected 2026-08-17 from an earlier draft that mislabeled an editorial ordering choice as a
structural block.

## What you keep

Each module's gate produces a takeaway, not just proof: a real, keepable artifact. Concrete
takeaways are Coachgremlin's job at content-building time; the intended shape is decided now.

| # | Module | Takeaway |
|---|---|---|
| 01 | Classes & Objects | A personal "class vs. object" scaffolding checklist/Skill for starting a new class file correctly (fields, constructor stub, purpose comment) before writing any behavior |
| 02 | Constructors | A constructor-overloading/initialization checklist (when to chain with `this(...)`, what must never be left uninitialized) |
| 03 | Encapsulation | An invariant-audit checklist/Skill for reading a class and asking "what can still go wrong to this object's state" |
| 04 | Inheritance | An "is-a" litmus-test checklist for when subclassing is actually warranted |
| 05 | Polymorphism | A dynamic-dispatch debugging playbook (diagnosing "the wrong method ran," distinguishing overriding from overloading) |
| 06 | Abstraction | An interface-vs-abstract-class decision guide, plus a `List`/`Map` usage cheat-sheet; a generics/type-safety cheat-sheet if the optional extension is attempted |
| 07 | Composition vs. Inheritance | A has-a/is-a design-decision guide/Skill |
| 08 | Exception Handling | A custom-exception-hierarchy template plus a checked-vs-unchecked decision guide |
| 09 | Synthesis capstone | A personal OOP diagnostic playbook compressing the whole arc into one checklist, built from a defended diagnosis of a real seeded design flaw |

## Why this order

This is this workshop's own editorial synthesis, not an independently validated pedagogical
finding - same honesty caveat `borrow-native` applied to its own arc, and the same one this
workshop's own Review Panel held it to when two of the original "hard prerequisite" claims didn't
survive scrutiny. Full reasoning, including the corrected prerequisite table and the capstone's
concrete concept-count requirement: `docs/workshop-design.md`'s "Why this order," "Prerequisite
reassessment," and "Capstone requirement" sections.

## Gate tiers (every module uses this vocabulary)

| Tier | What it is |
|---|---|
| Deterministic (primary) | `javac` compiles clean, JUnit green, Checkstyle clean - passes or it doesn't, no judgment call. Runs in an isolated sandbox, never on a bare host. |
| Conceptual (secondary, Coachgremlin) | Design judgment: is an invariant actually protected, was inheritance the right call, does an exception type carry real information. Graded only on what the deterministic tier structurally can't check - see `docs/workshop-design.md`'s Checkstyle/`clippy` analogy caveat for why that gap is real, not just a formality. |

A green deterministic tier is necessary, never sufficient on its own for this subject specifically:
a getter-per-field class with no real encapsulation compiles and passes tests exactly as cleanly as
a well-designed one. See `docs/workshop-design.md` for the full reasoning.
