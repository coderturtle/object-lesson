# Security-Conscious Review — Object Lesson (narrow pass)

**Scope confirmed:** design-docs only, no code/fixtures exist yet. Reviewed for unsafe patterns the design *sets up*, not an audit of anything built.

## Findings

**1. No mention of sandboxed/isolated execution for the deterministic gate.** The design specifies *what* runs (`javac`, JUnit, Checkstyle) but never *where* — no reference to running agent-generated code in a container, VM, or otherwise isolated environment before/while it compiles and executes tests. For an audience explicitly scoped as "genuinely new to OOP and new to Java" (not just new to a language, per the doc's own framing vs. `borrow-native`), this matters more than usual: these students won't yet have instincts about why "let my agent write and run arbitrary Java on my machine" deserves any caution. This is a real gap worth closing before Coachgremlin builds exercise fixtures — silence here reads as implicit "just run it locally," which is the pattern to avoid setting.

**2. No blind-merge or "compiler-passing-is-enough" pattern found — the opposite.** The design is unusually explicit that the deterministic tier is a *weak* filter for design correctness (getter/setter-on-every-field passes `javac`/JUnit identically to real encapsulation) and insists Coachgremlin's conceptual tier must catch what the gate can't. No auto-merge language appears anywhere; this isn't a PR-merge workflow.

**3. No fixture content yet, so no secrets/unsafe-I/O pattern to flag** — appropriately out of scope per the doc's own "What's explicitly out of scope" section.

## Recommendation

Add one line to the design (or as a note for Coachgremlin's build phase) committing to sandboxed/containerized execution for the deterministic gate, given the audience.
