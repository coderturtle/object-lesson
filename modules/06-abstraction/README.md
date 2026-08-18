# Module 06: Abstraction

## The question this module answers

What's a contract for future overriding, and when should this class not be instantiable at all?

## Where it sits in the arc

Sixth module. **Hard prerequisite:** [Module 04, Inheritance](../04-inheritance/README.md) - an
abstract method or interface is, structurally, a contract for future overriding, and overriding
itself is introduced in Module 04, not Module 05. Sequenced directly after
[Module 05, Polymorphism](../05-polymorphism/README.md) for editorial reasons, not because 05 is
structurally required: this workshop wants a learner who has already watched dynamic dispatch happen
before writing a contract for it. An earlier draft mislabeled 05 as a hard prerequisite - Oracle's
own Java Tutorials teach interfaces *before* polymorphism in the same lesson, which is direct
evidence against treating it as one; see `docs/workshop-design.md`'s "Prerequisite reassessment" for
the full correction. Next:
[Module 07, Composition vs. Inheritance](../07-composition-vs-inheritance/README.md).

## Learning objectives (placeholder - finalized when content is authored)

- Choose between an abstract class and an interface for a given design, and defend the choice.
- Write an abstract method as a contract, and explain what "must override" actually promises a
  future subclass.
- Use `List` and `Map` from `java.util` to construct, populate, and iterate a collection correctly -
  the required-but-light Collections baseline this module now carries (see below).

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, Lesson 5, "Interfaces" and "Abstract Methods and Classes"; Lesson 7,
Generics, for the optional deeper extension. "Objects First with Java," Ch14, "Further abstraction
techniques." Exercism's Java track, "Remote Control Competition" (`interfaces` concept); for the
optional extension, "Karl's Languages" (`lists` + `generic-types`).

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on a correct
  abstract class/interface use, plus **baseline `List`/`Map` usage** (construction, adding/getting,
  an enhanced `for` loop over a collection) - required-but-light, not optional, per
  `docs/workshop-design.md`'s revised "Scoping decision": later modules will plausibly need
  collections regardless, so this module carries the baseline rather than leaving it skippable.
- **Conceptual tier (Coachgremlin):** confirms the interface-vs-abstract-class choice is
  defensible for the specific design, not arbitrary or copied from a textbook definition.
- **Optional deeper extension (not required for the gate):** writing your own generic class or
  method with a bounded type parameter, graded separately if attempted.

## Takeaway

An interface-vs-abstract-class decision guide, built from real design attempts, plus a `List`/`Map`
usage cheat-sheet from the required-but-light baseline. If the optional extension is attempted: a
generics/type-safety cheat-sheet. Packaged by Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier (including the Collections baseline) and
Coachgremlin confirms the conceptual tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
