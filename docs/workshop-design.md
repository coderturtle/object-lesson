# Workshop Design

> **Object Lesson.** Naming pass complete (chosen by coderturtle from a set of candidates
> presented against the working title `java-oop-workshop`; local dir, repo, and mind-palace
> mirror renamed 2026-08-17 — see `docs/decisions.md`) — this doc is drafted after the name was
> chosen, so it uses the final name throughout.

## The one-line problem

First-year students learning OOP in Java are taught the vocabulary (class, object, inheritance,
polymorphism) as things to define on an exam, not as design judgment calls exercised against real
code — and the one tool that would make that judgment checkable, an agent watching the actual
attempt, is one this audience already uses every day for everything *except* their own learning.

## Audience

First-year college students: **genuinely new to OOP and new to Java specifically** — the mirror
image of `borrow-native`'s audience, not the same shape reused. `borrow-native` assumed general
programming fluency and harness fluency, with only the *language* (Rust) unfamiliar. Here, the
*subject itself* (object-oriented design) is unfamiliar, not just its Java syntax — and that is a
deliberate, already-made scoping decision this brief does not revisit.

What **is** assumed, stated honestly rather than left implicit (this is this workshop's own
scoping call, not handed down in the brief):

- **Basic programming literacy** — variables, conditionals, loops, functions/methods as a
  language-agnostic idea — typical of a student who has completed or is concurrently taking a
  CS1-equivalent course in any language (frequently Python at US institutions). This is **not** a
  true zero-programming-experience workshop.
- **Zero object-oriented programming background.** Class vs. object, encapsulation, inheritance,
  polymorphism, abstraction — all genuinely new, not a refresher.
- **Zero Java-specific syntax knowledge.** `public class`, `static void main`, semicolons, curly
  braces, the compiler's error messages — all genuinely new.
- **Harness fluency, assumed and unhedged, per the given brief.** Comfortable driving Claude Code
  or an equivalent coding agent daily. This workshop does not teach "how to use an agent" any more
  than `borrow-native` taught "how to use git."

The consequence this drives, worth naming: every module's exercise has to work for a learner who
can read a `javac` compiler error but has never seen one, and who can ask their agent "why did
this fail" honestly, because they don't yet have the OOP vocabulary to fake understanding the
answer. That gap — subject-beginner, harness-fluent — is the whole design constraint, not a risk
to flag or soften.

## Format

Self-paced, public repo. Matches `terminal-velocity` and `borrow-native`'s precedent — no
facilitator required, scales without a cohort.

## Subject vs. method (see `workshop-gremlin.md`'s "Variant: Tech/Language Workshops")

- **Subject:** object-oriented programming fundamentals, taught in Java — classes & objects,
  encapsulation, constructors, inheritance, polymorphism, abstraction (abstract classes and
  interfaces), composition vs. inheritance, exception handling.
- **Method:** agent-native — every exercise runs through the learner's own coding-agent harness,
  graded first by a **deterministic check** (`javac` + JUnit, plus Checkstyle — see below), then
  by Coachgremlin's conceptual feedback on top (idiom, design judgment, whether encapsulation is
  real or cosmetic, whether inheritance was the right call or just the first one reached for).

The hook is the same shape `borrow-native` established, applied to a genuinely different kind of
gap: "learn to think in objects the way you already work — harness in hand — and let the compiler
and a real test suite, not a quiz, be the first gate."

## The teaching method: agent-native, with a deterministic gate

Two gate tiers, not one, per Design Principle 2 and the "Variant: Tech/Language Workshops" section
of the Workshop Gremlin's own definition:

1. **Deterministic tier (primary).** `javac` compiles clean, and JUnit tests are green. Java's
   direct equivalent of `cargo test`. This either passes or it doesn't.

   **Checkstyle decision — included as a secondary deterministic check alongside `javac`/JUnit,
   with an honest caveat about the analogy.** Checkstyle is a real, widely used, configurable
   Java static-analysis tool (ships with the Google Java Style Guide and Sun Code Conventions as
   built-in rule sets). Where `cargo clippy` sits alongside `cargo test` for `borrow-native`, this
   workshop uses Checkstyle the same way: wired into the same deterministic tier, checked on every
   attempt. **The analogy is not exact, and it's worth saying so rather than papering over it:**
   `clippy` catches some genuinely correctness- and idiom-adjacent issues (needless clones,
   suspicious comparisons, non-idiomatic patterns), not just formatting. Checkstyle, by contrast,
   is closer to pure style/convention — naming conventions, brace placement, method length,
   Javadoc presence, import order. It will not catch a getter/setter pasted on top of a public
   field with no actual invariant, and it will not catch inheritance reached for where composition
   was the better call. Those stay squarely in tier 2, Coachgremlin's job. Checkstyle is included
   anyway because consistent style is a real, checkable, professional habit worth building from
   module 1 rather than treated as bikeshedding — but it is **not** a substitute for the conceptual
   tier the way `clippy`'s idiom lints partially are for Rust.

2. **Conceptual tier (secondary, Coachgremlin).** Design judgment: is encapsulation real (an
   invariant the class actually protects) or cosmetic (a getter/setter pasted onto every field
   because "that's what OOP means")? Did the learner reach for inheritance because an *is-a*
   relationship genuinely held, or because it was the first tool that compiled? Is the abstract
   class/interface choice defensible, or arbitrary? Would a reviewer accept this exception-handling
   approach in real code, or does it swallow/rethrow without adding information?

**Working hypothesis, not a proven finding** (same honesty discipline `borrow-native` used): a
deterministic first gate should make Coachgremlin's job easier and more trustworthy here too, for
the same reason it did on `borrow-native` — but unlike Rust's borrow checker, `javac`+JUnit are a
weaker filter against *design* mistakes specifically, because a getter-per-field class with no real
encapsulation compiles and passes tests exactly as cleanly as a well-designed one. That gap is
precisely why this subject leans harder on the conceptual tier than `borrow-native` needed to, not
a reason to skip building the deterministic tier first.

## Canonical-curriculum anchor (research pass, 2026-08-17)

Java OOP for beginners is one of the most heavily taught subjects in computing. Rather than derive
a sequence from scratch, this workshop's arc is checked against three real, current sources:

- **Oracle's official Java Tutorials, "Learning the Java Language" trail** (`docs.oracle.com`,
  fetched and confirmed directly, not inferred). Its own structure: Lesson 1 **"Object-Oriented
  Programming Concepts"** (What Is an Object? / What Is a Class? / What Is Inheritance? / What Is
  an Interface? / What Is a Package?) → Lesson 2 Language Basics → Lesson 3 **"Classes and
  Objects"** (Declaring Classes, Member Variables, Methods, **Providing Constructors**, Creating
  and Using Objects, then "More on Classes": the `this` keyword, **"Controlling Access to Members
  of a Class"** — Oracle's own name for encapsulation, Understanding Class Members, Initializing
  Fields) → Lesson 5 **"Interfaces and Inheritance"** (Interfaces: Defining/Implementing/Using as a
  Type/Default Methods; Inheritance: Overriding and Hiding Methods, **Polymorphism**, `super`,
  Object as a Superclass, **Abstract Methods and Classes**) → Lesson 7 Generics. **Genuinely useful
  structural finding, not just a topic list:** Oracle treats Polymorphism as a *subsection* of the
  Inheritance lesson, not a standalone lesson — this workshop deliberately gives it its own module
  anyway (see "Why this order," below), which is this workshop's own editorial call, not something
  Oracle's own structure argues for independently.
- **"Objects First with Java" (Barnes & Kölling, University of Kent), the BlueJ-paired textbook** —
  one of the most widely adopted CS1/CS2 objects-first Java textbooks, now in its 7th edition
  (2025). Confirmed chapter sequence (Part 1: Foundations of object orientation): Ch1 *Objects and
  classes* → Ch2 *Understanding class definitions* → Ch3 *Object interaction* → Ch4 *Grouping
  objects* → Ch5 *Functional processing of collections* (marked advanced/skippable in the text
  itself) → Ch6 *More-sophisticated behaviour* → Ch7 *Fixed-size collections — arrays* → Ch8
  *Designing classes* → Ch9 **"Well-behaved objects"** (encapsulation, `equals`/`hashCode`
  contracts — Oracle has no equivalent standalone unit for this). Part 2 (Application structures):
  Ch10 *Working in teams* → Ch11 *Recursion* → Ch12 *Improving structure with inheritance* → Ch13
  *More about inheritance* → Ch14 **"Further abstraction techniques"** (abstract classes,
  interfaces) → Ch15 *Data-oriented classes* → Ch16 *A brief history of Java* → Ch17 Building GUIs
  → Ch18 **"Handling errors"** → Ch19 Designing applications → Ch20 A case study. **Correction:**
  an earlier draft of this section compressed Part 2 by four chapters (Working in teams, Recursion,
  Data-oriented classes, A brief history of Java), which shifted every later chapter number down
  and mis-cited Handling errors as Ch14 instead of Ch18 — caught by the Workshop Review Panel's
  AI/ML Practitioner persona on a direct re-check against Pearson/InformIT's published 7th-edition
  listing. The load-bearing fact for this workshop's own arc survives the correction: exception
  handling (Ch18) still sits *after* both inheritance chapters (Ch12-13) and the abstraction
  chapter (Ch14), not early — real precedent for putting it late in this workshop's own arc too,
  not an arbitrary choice.
- **Exercism's Java track** (`github.com/exercism/java`, `config.json` fetched directly). 26
  tagged concepts including `classes`, `constructors`, `inheritance`, `interfaces`, `enums`,
  `generic-types`, `lists`, `maps`. Concept exercises tag their own prerequisites as data, e.g.
  **"Jedlik's Toy Car"** (`classes`, prereq: if-else-statements/numbers/strings), **"Need for
  Speed"** (`constructors`, prereq: `classes`), **"Remote Control Competition"** (`interfaces`,
  prereq: `classes`/`lists`/`strings`), **"Wizards and Warriors"** (`inheritance`, prereq:
  `classes`/`strings`/`if-else-statements`), **"Karl's Languages"** (`lists`+`generic-types`,
  prereq: `arrays`/`strings`). Same structural pattern `borrow-native`'s own anchor research found
  in Exercism's Rust track (prerequisites modeled as real data, not prose) — a second, independent
  confirmation, from a second track, that this isn't a Rust-specific practice. **Two tracks
  checked, not a claim about Exercism's full catalog** — that's the evidence this pass actually
  has.
  **Worth stating plainly as a finding, not an assumption:** the concept list this fetch returned
  does not include `encapsulation`, `polymorphism`, `abstraction`, or `composition` as their own
  tagged concepts — Exercism's Java track appears to model these as design judgment exercised
  *through* the mechanical concepts (`classes`, `constructors`, `inheritance`, `interfaces`) rather
  than naming them as first-class units in their own right. That gap is real signal for this
  workshop's differentiator, below, not just a coincidence of what one fetch happened to surface.

**Self-correction, visible rather than silently fixed:** this section's first draft assumed Oracle
bundles exception handling into the same "Learning the Java Language" trail as classes, interfaces,
and inheritance, on the reasoning that it's a core language feature taught early. Checked directly
against `docs.oracle.com`: it doesn't. Exceptions live in a **separate trail**, "Essential Java
Classes" → "Exceptions," alongside I/O and collections, not inside "Learning the Java Language" at
all. That's a real structural fact, not a rounding error — Oracle's own material treats exception
handling as a *library/runtime-mechanics* topic, not a core OOP-concepts topic, which is a second,
independent piece of evidence (alongside Objects First's Ch18 placement) for sequencing it late in
this workshop's own arc rather than early.

**Differentiator against all three:** based on what this pass actually read (each source's own
published structure, not an exhaustive audit of every page), none of the three appear to teach
agent-native delivery, grade a design-judgment conceptual tier beyond "does it compile" (Oracle,
Exercism) or a human instructor's own read (Objects First, cohort-taught), or leave a keepable
takeaway artifact beyond the solved exercise — these are this pass's own reading of each source,
not independently cited claims the way the curriculum-structure facts above are. Object Lesson's
bet — genuinely untested, stated as a bet, not a finding — is that a
subject this well-covered by static text and compiler-graded exercises specifically benefits from
an agent watching the *design* attempt, not just the compile, precisely because "does it compile"
is such a weak filter for whether the OOP judgment underneath is real.

## The module arc

Anchored to the three sources above, but sequenced by Object Lesson's own dependency reasoning
where design judgment (composition vs. inheritance; when polymorphism gets its own module) departs
from how the canonical material groups things. Each module names its **hard prerequisite**
explicitly, per the Gremlin's concept-dependency-arc requirement.

| # | Module | Hard prerequisite | Oracle anchor | Objects First anchor | Exercism anchor |
|---|---|---|---|---|---|
| 01 | Classes & Objects | none (general programming fluency assumed; zero OOP/Java assumed) | Lesson 3, "Classes" + "Objects" subsections | Ch1-2 | "Jedlik's Toy Car" (`classes`) |
| 02 | Constructors | 01 (a class needs fields before construction means anything) | Lesson 3, "Providing Constructors for Your Classes" | Ch2 (constructors introduced with class definitions) | "Need for Speed" (`constructors`, prereq `classes`) |
| 03 | Encapsulation | 02 (constructors are the first guarantee that fields start valid; encapsulation is that same guarantee, sustained) | Lesson 3, "Controlling Access to Members of a Class" | Ch9, "Well-behaved objects" | no dedicated concept tag found — see anchor-research finding above |
| 04 | Inheritance | 01 + 03 (subclassing changes what "controlling access" even means — `protected` has no meaning before encapsulation exists) | Lesson 5, "Inheritance" (Overriding/Hiding, `super`, Object as Superclass) | Ch12-13 | "Wizards and Warriors" (`inheritance`, prereq `classes`/`strings`/`if-else-statements`) |
| 05 | Polymorphism | 04 (dynamic dispatch requires a subclass relationship to dispatch across) | Lesson 5, "Polymorphism" subsection — Oracle folds this into Inheritance rather than a standalone unit; this workshop splits it out deliberately (see "Why this order") | Ch12-13 (also folded into the inheritance chapters, same pattern as Oracle) | no dedicated concept tag found |
| 06 | Abstraction (abstract classes & interfaces) — **optional graded extension: Generics & Collections** | 05 (an abstract method or interface is a contract for polymorphic dispatch — "must override" presupposes understanding overriding) | Lesson 5, "Interfaces" + "Abstract Methods and Classes"; Lesson 7 Generics for the extension | Ch14, "Further abstraction techniques" | "Remote Control Competition" (`interfaces`); extension: "Karl's Languages" (`lists`+`generic-types`) |
| 07 | Composition vs. Inheritance | 04 + 06 (an informed *has-a* vs. *is-a* call requires having actually used both inheritance and interfaces first, not just read about them) | none — not a dedicated unit in any of the three anchors; grounded instead in Gamma/Helm/Johnson/Vlissides, *Design Patterns* (1994), "favor composition over inheritance" | none dedicated | none dedicated |
| 08 | Exception Handling | 04 + 06 (Java's own exception hierarchy — `Throwable`→`Exception`→`RuntimeException` — is itself an inheritance tree; idiomatic custom exceptions extend/implement abstract types) | separate trail, "Essential Java Classes" → "Exceptions" (see self-correction, above) | Ch18, "Handling errors" (after both inheritance chapters and abstraction) | `exceptions` concept tag exists in the track; specific prerequisites not verified in this pass — treat as unconfirmed, not cited as a specific anchor |
| 09 | Synthesis capstone | all of the above | — | — | — |

**Scoping decision, made now rather than discovered late (mirrors `borrow-native`'s own
Iterators/Closures fold):** Generics and the Collections Framework (`List`, `Set`, `Map`) are real
and important, but don't get a standalone module. They're folded into Module 06 as an **optional
graded extension** — `java.util`'s core collection types *are* interfaces, and generics are what
make them type-safe, so the extension sits directly on top of what Module 06 already teaches
rather than requiring its own hard-prerequisite slot in the core arc.

### Why this order (the dependency reasoning, not just the anchors')

**This is this workshop's own editorial synthesis, not an independently validated pedagogical
finding** — same honesty caveat `borrow-native` applied to its own arc. Classes & Objects has no
prerequisite because it's the first thing that exists to have a prerequisite. Constructors wait on
having a class with fields to initialize. Encapsulation is sequenced right after constructors,
ahead of inheritance, on purpose: this workshop wants "does this class actually protect an
invariant" to be a live question *before* subclassing complicates what "protect" even means —
teaching encapsulation after inheritance would let a learner's first mental model of a field be "a
thing with a getter and a setter," which is exactly the cosmetic-encapsulation failure mode this
workshop is designed to catch, not reinforce. Inheritance depends on encapsulation specifically
(not just classes) because `protected` access is meaningless without already having a real notion
of `private`. Polymorphism gets its own module even though Oracle and Objects First both fold it
into their inheritance material, because dynamic dispatch — the *why did this method run instead
of that one* question — is, in this workshop's judgment, a distinct enough source of first-year
confusion to deserve its own gate rather than being absorbed as a subsection of "inheritance." Both
of that split's halves depend on each other in the anchors' own material (you can't demonstrate
polymorphism without inheritance already in place), which is why 05's hard prerequisite is 04, not
"none." Abstraction depends on polymorphism because an abstract method is, structurally, a promise
about future overriding — it only makes sense once overriding itself is understood, not before.
Composition vs. Inheritance is deliberately sequenced *after* both inheritance and abstraction, not
alongside inheritance where a reader might expect a "which one do I use" comparison to live: an
informed design call needs the learner to have actually built with both tools first, per Gamma et
al.'s own framing of the tradeoff, which presupposes a reader who already knows what inheritance
buys and costs. Exception handling comes last among the core modules for two independently
corroborating reasons found in this pass's own research, not one: Objects First places it after
both inheritance chapters and the abstraction chapter (Ch18, after Ch12-14), and Oracle doesn't
even file it under the same trail as the rest of the OOP-concepts material — both point the same
direction, that this is late-arc material once real class hierarchies exist to be complicated by
resource cleanup and error propagation, not day-one material.

## What you keep

Per the Gremlin's takeaway requirement (`workshop-gremlin.md` Design Principle 4): every module's
gate produces something reusable, not just a passed check. Concrete takeaways are Coachgremlin's
job at content-building time (not this design pass), but the intended *shape* per module:

| # | Module | Intended takeaway shape |
|---|---|---|
| 01 | Classes & Objects | A personal "class vs. object" scaffolding checklist/Skill for starting a new class file correctly (fields, constructor stub, purpose comment) before writing any behavior |
| 02 | Constructors | A constructor-overloading/initialization checklist (when to chain with `this(...)`, what must never be left uninitialized) |
| 03 | Encapsulation | An invariant-audit checklist/Skill for reading a class and asking "what can still go wrong to this object's state." **Escape-hatch warning applies here specifically, and is the exact conceptual-tier example the brief itself names:** a getter and setter pasted onto every field passes `javac`/JUnit/Checkstyle identically to a class that actually protects an invariant — the deterministic tier structurally cannot catch this, so it falls to Coachgremlin's conceptual tier by elimination. **Whether that conceptual-tier judgment is one Coachgremlin can actually make reliably is itself untested** — same working-hypothesis status as the deterministic-first-gate claim above, not a settled capability. |
| 04 | Inheritance | An "is-a" litmus-test checklist for when subclassing is actually warranted |
| 05 | Polymorphism | A dynamic-dispatch debugging playbook (diagnosing "the wrong method ran," distinguishing overriding from overloading) |
| 06 | Abstraction | An interface-vs-abstract-class decision guide, built from real design attempts, not copied from a textbook definition. Extension (if attempted): a generics/collections type-safety cheat-sheet |
| 07 | Composition vs. Inheritance | A has-a/is-a design-decision guide/Skill. **Escape-hatch warning applies here specifically, and is the other conceptual-tier example the brief itself names:** reaching for inheritance because it was the first thing that compiled, rather than because an *is-a* relationship genuinely held, is exactly the judgment failure this module's gate must catch — Coachgremlin's conceptual tier, not the deterministic one, is where that catch has to happen. |
| 08 | Exception Handling | A custom-exception-hierarchy template plus a checked-vs-unchecked decision guide |
| 09 | Synthesis capstone | A personal OOP diagnostic playbook compressing the whole arc into one checklist, built from a defended diagnosis of a real seeded design flaw (mirrors `terminal-velocity`'s and `borrow-native`'s own capstone format: diagnose, fix, defend the diagnosis in writing) — exact capstone artifact/fixture is a later design decision, not fixed in this pass |

## What's explicitly out of scope for this design pass

- Any module's actual exercise content, starter code, or fixture project — Coachgremlin's job, run
  later, one module at a time, per the Workshop Gremlin/Coachgremlin boundary in
  `workshop-lifecycle.md`.
- Whether modules share one running project (`borrow-native`'s `relay` pattern) or use independent
  per-module exercises — a real, undecided choice, left to the Deliverables & branding step and/or
  Coachgremlin, not settled here.
- The Generics & Collections optional extension's actual content (scoped above, not authored).
- The real rubric criteria behind each module's conceptual-tier gate — this pass names the *shape*
  of each gate and takeaway, not the graded rubric text itself.
- The Astro build-log/Pages site and its first deploy.
- Any claim of alignment with a specific external certification or course — unlike `borrow-native`,
  no such external-validation target was given in this workshop's brief, and none is invented here.
