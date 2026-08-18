# Module 09: Synthesis Capstone

## The question this module answers

Given a broken design, which concept is actually the root cause?

## Where it sits in the arc

Ninth and final module. Hard prerequisite: all of the above (Modules 01-08). No next module - this
is the arc's finale, mirroring `terminal-velocity`'s and `borrow-native`'s own capstone format:
diagnose, fix, defend the diagnosis in writing. See [`modules/README.md`](../README.md) for the full
arc.

## Learning objectives (placeholder - finalized when content is authored)

- Diagnose a real, non-trivial design flaw by naming the OOP concept(s) actually responsible, not
  just the symptom that surfaced.
- Fix the flaw without introducing a new one, and defend the fix's correctness against the original
  diagnosis.
- Compress the whole arc's checklists (Modules 01-08's takeaways) into one personal diagnostic
  playbook.

## Exercise material to draw from (not a spec - Coachgremlin authors the real exercise later)

No dedicated curriculum anchor - this module is this workshop's own synthesis, not derived from
Oracle, "Objects First with Java," or Exercism. See `docs/workshop-design.md`'s "Capstone
requirement" section for the concrete shape this exercise must have, below.

## Required gate (placeholder - shape decided now, real rubric written later)

**This gate has a concrete, non-negotiable shape, decided in this design pass specifically so a
future content-author cannot under-scope it** (see `docs/workshop-design.md`'s "Capstone
requirement," resolving a Workshop Review Panel finding that this row was previously asserted, not
designed):

- **Deterministic tier:** `javac` compiles clean, JUnit green, Checkstyle clean, on the fixed
  program.
- **Conceptual tier (Coachgremlin):** a written diagnosis that correctly names the root-cause
  concept(s), not just a symptom. **The seeded design flaw itself must require touching 3 or more
  of the following simultaneously, not as independently fixable sub-bugs:**
  1. **Encapsulation** - a broken or violated invariant.
  2. **Inheritance/polymorphism** - a subclassing or overriding decision that's wrong, misused, or
     masking the real defect.
  3. **Composition** - a has-a relationship that should exist and doesn't, or an is-a relationship
     used where composition was the right call.

  Fixing any one of these alone must leave the program still broken or still non-idiomatic. A
  diagnosis naming only one concept is incomplete by this gate's own definition, not just weak.

## Takeaway

A personal OOP diagnostic playbook compressing the whole arc into one checklist, built from a
defended diagnosis of the real seeded design flaw. Packaged by Coachgremlin once the rubric is met.

## Stop condition (placeholder)

The learner's fix passes the deterministic tier and Coachgremlin confirms the written diagnosis
correctly names all concepts jointly responsible, per the 3+-concept gate above.

---

> **Skeleton only.** This module has a decided question, arc position, gate shape (including the
> concrete 3+-concept capstone requirement), and takeaway shape. It has no authored fixture, seeded
> bug, or rubric text yet - that's Coachgremlin's job, run later, against this concrete bar rather
> than an open placeholder. See [`modules/README.md`](../README.md) for workshop-wide status.
