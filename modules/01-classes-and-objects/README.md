# Module 01: Classes & Objects

## The question this module answers

What's the difference between a class and the objects made from it, and why does that distinction
matter?

## Where it sits in the arc

First module. No prior module and no prerequisite: general programming fluency (variables,
conditionals, loops) is assumed, but zero OOP and zero Java are assumed too, so this is the first
thing that exists to have a prerequisite. Next: [Module 02, Constructors](../02-constructors/README.md).
See [`modules/README.md`](../README.md) for the full arc and why this order.

## Learning objectives (placeholder - finalized when content is authored)

- Distinguish a class definition from an object instance, in your own words, not just by pointing
  at the `new` keyword.
- Write a class with fields and a minimal constructor stub before writing any behavior.
- Read a `javac` compiler error about an undefined class, a missing field, or a type mismatch
  without treating it as an opaque failure.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, "Learning the Java Language" trail, Lesson 3 (the "What Is a Class?" and
"What Is an Object?" subsections carried over from Lesson 1's concepts section). "Objects First with
Java" (Barnes & Kölling), Ch1-2. Exercism's Java track, "Jedlik's Toy Car" (`classes` concept,
prerequisite: if-else-statements/numbers/strings).

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on a class with
  correctly declared fields and a working constructor. Runs in an isolated sandbox, not on a bare
  host - see `docs/workshop-design.md`'s "Execution environment."
- **Conceptual tier (Coachgremlin):** confirms the learner can explain the class/object distinction
  in their own words and that the class models something real, not just a syntactically valid
  container for fields.

## Takeaway

A personal "class vs. object" scaffolding checklist/Skill for starting a new class file correctly
(fields, constructor stub, purpose comment) before writing any behavior. Packaged by Coachgremlin
once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
