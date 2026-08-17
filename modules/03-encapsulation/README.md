# Module 03: Encapsulation

## The question this module answers

What can still go wrong to this object's state after it's built, and how do I actually stop it?

## Where it sits in the arc

Third module. **Hard prerequisite:** [Module 01, Classes & Objects](../01-classes-and-objects/README.md)
- a class needs fields before there's anything to encapsulate. Sequenced directly after
[Module 02, Constructors](../02-constructors/README.md) for editorial reasons, not because
02 is structurally required: this workshop wants the "does this class actually protect an
invariant" question live before inheritance complicates what "protect" even means. An earlier
draft mislabeled 02 as a hard prerequisite; see `docs/workshop-design.md`'s "Prerequisite
reassessment" for the correction. Next: [Module 04, Inheritance](../04-inheritance/README.md), which
depends on this module directly - `protected` access has no meaning before `private` does.

## Learning objectives (placeholder - finalized when content is authored)

- Read a class and identify what invariant, if any, it's actually protecting.
- Tell the difference between real encapsulation (an invariant the class enforces) and cosmetic
  encapsulation (a getter/setter pasted onto every field with no enforcement behind it).
- Rewrite a class with public fields into one with a genuinely protected invariant, not just
  private fields and pass-through accessors.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

Oracle's Java Tutorials, Lesson 3, "Controlling Access to Members of a Class" (Oracle's own name for
encapsulation). "Objects First with Java," Ch9, "Well-behaved objects" (the anchor Exercism's Java
track has no direct equivalent for - see `docs/workshop-design.md`'s anchor-research finding).

## Required gate (placeholder - shape decided now, real rubric written later)

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean. Worth naming
  explicitly here: a getter/setter pair on every field passes this tier identically to a class that
  actually protects an invariant - the deterministic tier structurally cannot tell them apart.
- **Conceptual tier (Coachgremlin):** confirms the class protects a real invariant the learner can
  name, not just that every field has an accessor. This is the exact conceptual-tier example
  `docs/workshop-design.md`'s "What you keep" table calls out by name - and whether Coachgremlin can
  make this judgment reliably is itself an open, untested question, not a settled capability.

## Takeaway

An invariant-audit checklist/Skill for reading a class and asking "what can still go wrong to this
object's state." Packaged by Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's implementation passes the deterministic tier and Coachgremlin confirms the conceptual
tier, per the gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape, and takeaway
> shape. It has no authored exercise, fixture, or rubric yet - that's Coachgremlin's job, run later.
> See [`modules/README.md`](../README.md) for workshop-wide status.
