# Module 05: Polymorphism

## The question this module answers

Why did this method run instead of that one?

## Where it sits in the arc

Fifth module. Hard prerequisite: [Module 04, Inheritance](../04-inheritance/README.md) - dynamic
dispatch requires a subclass relationship to dispatch across. This module gets its own slot even
though Oracle and "Objects First with Java" both fold polymorphism into their inheritance material -
this workshop's own editorial judgment is that dynamic dispatch is a distinct enough source of
first-year confusion to deserve its own gate. See `docs/workshop-design.md`'s "Why this order" for
the full reasoning behind that split. Next:
[Module 06, Abstraction](../06-abstraction/README.md), whose real hard prerequisite is Module 04's
overriding mechanism, not this module - see that module's own arc-position note.

## Learning objectives (placeholder - finalized when content is authored)

- Trace which method actually ran for a given call, using the static type versus the runtime type
  of the reference.
- Distinguish overriding (runtime, polymorphic) from overloading (compile-time, not polymorphic) -
  a common first-year conflation this module exists specifically to catch.
- Debug a "the wrong method ran" surprise by reading the class hierarchy, not by guessing.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, Lesson 5, "Polymorphism" subsection (folded into the Inheritance lesson in
Oracle's own material - this workshop deliberately splits it out, see above). "Objects First with
Java," Ch12-13 (same fold as Oracle's).

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on an
  implementation that correctly relies on dynamic dispatch across a subclass hierarchy.
- **Conceptual tier (Coachgremlin):** confirms the learner can explain why a specific method ran,
  in terms of runtime type versus static type, not just that the test happened to pass.

## Takeaway

A dynamic-dispatch debugging playbook (diagnosing "the wrong method ran," distinguishing overriding
from overloading). Packaged by Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
