# Module 08: Exception Handling

## The question this module answers

How do I signal that something went wrong in a way the caller can actually act on?

## Where it sits in the arc

Eighth module. Hard prerequisite:
[Module 04, Inheritance](../04-inheritance/README.md) +
[Module 06, Abstraction](../06-abstraction/README.md) - Java's own exception hierarchy
(`Throwable` -> `Exception` -> `RuntimeException`) is itself an inheritance tree, and idiomatic
custom exceptions extend or implement abstract types. Sequenced last among the core modules for two
independently corroborating reasons: "Objects First with Java" places its error-handling chapter
after both inheritance chapters and the abstraction chapter, and Oracle files exceptions under a
separate trail entirely, not the OOP-concepts trail this workshop otherwise anchors to - see
`docs/workshop-design.md`'s self-correction and "Why this order" for both. Next:
[Module 09, Synthesis capstone](../09-synthesis-capstone/README.md).

## Learning objectives (placeholder - finalized when content is authored)

- Choose a checked versus unchecked exception deliberately, not by default habit.
- Design a custom exception type a caller could actually match on and act on, not a stringly-typed
  catch-all.
- Propagate failure without panicking, and without swallowing information the caller needs.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, "Essential Java Classes" trail, "Exceptions" (a separate trail from
"Learning the Java Language," confirmed directly against `docs.oracle.com` - see
`docs/workshop-design.md`'s self-correction). "Objects First with Java," Ch18, "Handling errors."
Exercism's Java track carries an `exceptions` concept tag; specific prerequisites for it were not
verified in this workshop's anchor-research pass and should be checked fresh before authoring.

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on an
  implementation that correctly propagates and handles a real failure case.
- **Conceptual tier (Coachgremlin):** confirms the exception type is one a caller could match on
  and act on, not a stringly-typed catch-all, and that checked versus unchecked was a deliberate
  choice.

## Takeaway

A custom-exception-hierarchy template plus a checked-vs-unchecked decision guide. Packaged by
Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
