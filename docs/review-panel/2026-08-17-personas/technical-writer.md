# Technical Writer Critique — Object Lesson Design Docs

**Broken cross-references in README's "Key Docs" list.** Three of the eight links point to files that don't exist in `docs/`: `session-log.md`, `human-understanding-check.md`, `depth-decision.md` (README.md lines 28–35). Meanwhile `docs/workshop-design.md` — the actual document under review, and by far the largest doc in the repo — isn't linked from README's Key Docs at all. A reader landing on the README as an entry point has no path to the design doc and three dead links to documents about it.

**Unresolved placeholder-looking path token.** `workshop-design.md` line 49: `<hekton-machinery>/gremlins/workshop/workshop-gremlin.md`. The angle brackets read as an un-substituted template variable rather than a real path (compare `next-actions.md` line 7, which just says "per `workshop-gremlin.md`'s roster step 3" with no path at all — the two docs don't even agree on how to cite the same file).

**Stale scaffold placeholder text.** README.md's Quick Start block still reads `# Add project-specific commands here` (line 23) — leftover scaffold filler, not updated for this project.

**README's status line undersells the actual state.** "Implementation Status: Scaffolded 2026-08-17 — initial setup in progress" (README.md line 12) sits directly above a design doc containing a fully anchored 9-module arc, three-source curriculum research, and a logged ADR history — all dated the same day. A reader skimming only the README would have no idea that much substantive design work already happened.

**Repetitive rhetorical tic dilutes emphasis.** `workshop-design.md`'s voice leans on the same "X, not Y" hedge construction dozens of times ("not a proven finding," "not a rounding error," "not just a coincidence," "not an independently validated pedagogical finding," "not fixed in this pass," etc.). Used this densely, the pattern stops signaling anything — genuinely load-bearing caveats (e.g., the Checkstyle/clippy analogy caveat) read at the same volume as throwaway ones.

**Minor structural gripe.** The module-arc table (~line 177) and the "What you keep" takeaway table (~line 233) describe the same nine modules but are separated by a 60-line prose section, forcing back-and-forth flipping to connect a module's prerequisite with its takeaway.

Terminology (deterministic/conceptual tier, module numbering 01–09, Coachgremlin) is otherwise used consistently across all four docs, and the naming-pass cross-reference to `decisions.md` resolves correctly.
