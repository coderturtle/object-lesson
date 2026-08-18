# Module 04: Inheritance

## The question this module answers

When does one class genuinely extend another, versus just reusing its code because it's convenient?

## Where it sits in the arc

Fourth module. Hard prerequisite: [Module 01, Classes & Objects](../01-classes-and-objects/README.md)
+ [Module 03, Encapsulation](../03-encapsulation/README.md) - subclassing changes what "controlling
access" even means, and `protected` has no meaning before a real notion of `private` exists. This is
the hinge this module crosses: it's the first module where a prior module's concept is a genuine
structural requirement, not just a good idea. Next:
[Module 05, Polymorphism](../05-polymorphism/README.md), which depends on this module directly -
dynamic dispatch needs a subclass relationship to dispatch across.

## Learning objectives (placeholder - finalized when content is authored)

- Apply an "is-a" litmus test before reaching for `extends`, rather than reaching for it because it
  compiles.
- Use `super` and method overriding correctly, including when overriding changes behavior a caller
  depends on.
- Explain what `Object` being the implicit superclass of every class actually means in practice.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, Lesson 5, "Inheritance" (Overriding and Hiding Methods, `super`, Object as a
Superclass). "Objects First with Java," Ch12-13. Exercism's Java track, "Wizards and Warriors"
(`inheritance` concept, prerequisite: `classes`/`strings`/`if-else-statements`).

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on a correct
  subclass with correctly overridden methods.
- **Conceptual tier (Coachgremlin):** confirms an "is-a" relationship genuinely holds between the
  subclass and its superclass, not just that the code happened to compile with `extends`.

## Takeaway

An "is-a" litmus-test checklist for when subclassing is actually warranted. Packaged by Coachgremlin
once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
