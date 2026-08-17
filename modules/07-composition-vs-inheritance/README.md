# Module 07: Composition vs. Inheritance

## The question this module answers

Does this relationship actually have an *is-a* or a *has-a* shape, and does it matter which I pick?

## Where it sits in the arc

Seventh module. Hard prerequisite:
[Module 04, Inheritance](../04-inheritance/README.md) +
[Module 06, Abstraction](../06-abstraction/README.md) - an informed *has-a* vs. *is-a* call needs
the learner to have actually built with both inheritance and interfaces first, not just read about
them. Deliberately sequenced after both rather than alongside Module 04, where a reader might expect
a "which one do I use" comparison to live - see `docs/workshop-design.md`'s "Why this order." Next:
[Module 08, Exception Handling](../08-exception-handling/README.md).

## Learning objectives (placeholder - finalized when content is authored)

- Apply a has-a/is-a decision test to a real design before writing either `extends` or a field
  reference.
- Refactor an inheritance relationship that should have been composition, and explain why the
  refactor is an improvement, not just a stylistic preference.
- Recognize the specific failure mode this module exists to catch: reaching for inheritance because
  it was the first tool that compiled, not because an *is-a* relationship genuinely held.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Not a dedicated unit in any of this workshop's three curriculum anchors (Oracle, "Objects First,"
Exercism) - grounded instead in Gamma/Helm/Johnson/Vlissides, *Design Patterns* (1994), "favor
composition over inheritance." See `docs/workshop-design.md`'s module-arc table.

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on a correctly
  composed design.
- **Conceptual tier (Coachgremlin):** confirms inheritance wasn't reached for just because it was
  the first thing that compiled, where composition was the better call. This is the other named
  conceptual-tier example `docs/workshop-design.md`'s "What you keep" table calls out explicitly -
  the deterministic tier cannot catch this one either, by the same structural gap as Module 03's.

## Takeaway

A has-a/is-a design-decision guide/Skill. Packaged by Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
