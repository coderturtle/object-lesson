# Module 02: Constructors

## The question this module answers

How do I guarantee a new object starts in a valid state, not a half-built one?

## Where it sits in the arc

Second module. Prerequisite: [Module 01, Classes & Objects](../01-classes-and-objects/README.md)
(a class needs fields before construction means anything). Next:
[Module 03, Encapsulation](../03-encapsulation/README.md). See [`modules/README.md`](../README.md)
for the full arc and why this order.

## Learning objectives (placeholder - finalized when content is authored)

- Write a constructor that leaves no field able to hold an invalid starting value.
- Use constructor overloading and `this(...)` chaining deliberately, not by trial and error.
- Explain what Java does by default (the implicit no-arg constructor) and when relying on it is
  actually a mistake.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, Lesson 3, "Providing Constructors for Your Classes." "Objects First with
Java," Ch2 (constructors introduced alongside class definitions). Exercism's Java track, "Need for
Speed" (`constructors` concept, prerequisite: `classes`).

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on a class whose
  constructor(s) correctly initialize every field. Runs in an isolated sandbox, not on a bare host.
- **Conceptual tier (Coachgremlin):** confirms no field is reachable in an invalid or
  half-initialized state after construction, and that any constructor overloading is deliberate,
  not accidental duplication.

## Takeaway

A constructor-overloading/initialization checklist (when to chain with `this(...)`, what must never
be left uninitialized). Packaged by Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
