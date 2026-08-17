# Object Lesson

> Learn to think in objects the way you already work: harness in hand, letting the compiler and a
> real test suite, not a quiz, be the first gate.

Object Lesson is a self-paced, agent-native workshop teaching object-oriented programming in Java,
built for first-year college students who've never written a class before but already drive a
coding agent (a harness: Claude Code, Codex, or an equivalent tool) every day. Every exercise runs
through your own harness: `javac` and a real test suite tell you if it compiles and works, and your
agent coaches the design judgment underneath, whether an encapsulation is real or just getters and
setters pasted on, whether inheritance was the right call or just the first one that compiled.

**Status:** module skeleton and brand layer complete for all nine modules; no exercise content
authored yet. Not ready to start yet; watch this repo.

## The arc

Nine modules, each building on a real prerequisite from the one before it: Classes & Objects →
Constructors → Encapsulation → Inheritance → Polymorphism → Abstraction (with a required-but-light
Generics & Collections baseline, plus an optional deeper extension) → Composition vs. Inheritance →
Exception Handling → a synthesis capstone. Full reasoning for the order, and the real curriculum
research behind it, is in [Workshop Design](docs/workshop-design.md); the per-module breakdown and
current skeleton status is in [Modules](modules/README.md).

## Quick Start

```bash
# Add project-specific commands here
```

## Key Docs

- [Workshop Design](docs/workshop-design.md): the arc, the audience, the deterministic-gate method,
  and the curriculum research behind it
- [Modules](modules/README.md): all nine modules, gate tiers, and current skeleton status
- [Brand](docs/brand.md): voice, hard rules, and visual identity for published content
- [Next Actions](docs/next-actions.md): what's being worked on now
- [Maintainers](docs/maintainers.md): internal/agent-facing notes (classification, documentation
  contract, review-panel reports)
