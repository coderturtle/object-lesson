# Brand / Style Layer: Object Lesson

> The only place this workshop's personality lives. `README.md` and, once built, `site/`'s layout
> and content all read from this file — they don't redefine voice, banned language, or visual
> identity independently. Adapted from `borrow-native/docs/brand.md`, itself adapted from
> `terminal-velocity/docs/brand.md` and blog-factory-lab's `templates/brand-style-layer-template.md`.

## Site identity

**Name:** Object Lesson
**Tagline:** Learn to think in objects the way you already work — harness in hand — and let the
compiler and a real test suite, not a quiz, be the first gate.
**Parent brand:** Hekton
**Slug:** `object-lesson`

The tagline is unchanged from `docs/workshop-design.md`'s own hook (the one-line problem statement
this workshop was designed around), not reworded for this doc — per the Workshop Gremlin's own
voice-finding handoff, a hook that already survived a Review Panel pass gets reused, not
re-invented.

## Tone and voice

**Core voice:** A competent peer, not a professor grading vocabulary. Specific, dryly funny,
anti-hype by default. This workshop's audience is different in kind from `borrow-native`'s: not a
practitioner picking up a new language, but a first-year student for whom the *subject itself*
(object-oriented design) is genuinely new, alongside Java's syntax. The voice has to hold both
things at once — respect that harness fluency without assuming OOP or Java vocabulary the learner
doesn't have yet.

**Tone rules:**
- Prefer plain verbs and concrete nouns; show the mechanism (a specific compiler error, a specific
  design choice and its consequence), don't just assert the result.
- **Gloss jargon on first use.** This workshop's own Review Panel (End-User/Target Learner persona)
  caught the README leaning on unexplained terms ("harness-driven," "deterministic gate") a
  first-year reader has no context for. Any term from the Hekton/agentic-workshop vocabulary
  (harness, gate, deterministic tier, Coachgremlin, takeaway) gets a one-line plain-English gloss
  the first time it appears in learner-facing copy, every time, not just in the README.
- Any claim about what the teaching method achieves ("teaches better," "the deterministic gate
  makes grading more trustworthy") must be marked as a hypothesis unless there's actual evidence
  behind it — same permanent voice rule `borrow-native` adopted after its own review panel caught
  overclaiming in the design docs, reused here because the failure mode is generic, not
  Rust-specific.
- First person for build-log entries. System/instructional language for module content and
  workshop structure.
- Admit uncertainty directly rather than smoothing over it.
- **Don't frame a first-year mistake as a failure.** A getter-and-setter class that isn't really
  encapsulating anything, or an inheritance reach that should have been composition, is the
  expected shape of a first attempt at a genuinely new subject, not a shortcoming to soften around.
  Name what's wrong precisely and say why it matters; don't editorialize about the learner.
- Never imply a technique is magic; name the mechanism (the compiler said X, here's why, here's
  what changes if you fix it).

## Hard rules

- **No em dash characters.** Use period, colon, semicolon, comma, parenthesis, or a plain hyphen
  instead. (Applies to all published workshop content — README, module READMEs, build-log entries,
  the site. Design/planning docs under `docs/` are working documents and are exempt; this file is
  exempt for the same reason.)
- No AI-slop openers ("In today's fast-paced world...", "It's important to note...").
- No unqualified efficacy superlatives ("game-changing," "revolutionary," "10x," "unlock your
  potential").
- No engagement bait, fake scarcity, or "one weird trick" framing.
- **Never frame the compiler, `javac`, JUnit, or Checkstyle as an adversary.** The whole method bet
  is that a real deterministic check is a trustworthy first opinion, not an obstacle to route
  around or "beat." Content that jokes about "fighting the compiler" or "tricking the tests" models
  the opposite of what this workshop teaches, even in passing.
- **Never imply a getter/setter pair is, by itself, encapsulation.** This is the exact
  cosmetic-encapsulation failure mode Module 03's conceptual tier exists to catch (see
  `docs/workshop-design.md`'s "What you keep" table) — published content must not casually reinforce
  the misconception the workshop is designed to correct.
- **Never present "does it compile" as sufficient evidence of good design.** Every module's
  deterministic tier is real and necessary, but this workshop's whole differentiator is that it
  isn't sufficient — content should never imply otherwise, even as a simplification.

## Banned phrases

Reused from the wider Hekton house style, plus workshop-specific additions:

- delve, tapestry, unlock, seamless, game-changing, revolutionize, transform your workflow,
  supercharge, effortlessly, cutting-edge, thought leader
- "in today's fast-paced world," "it's important to note," "at scale" (unless the content proves
  the scale)
- Workshop-specific: "master the art of," "in this comprehensive guide," "unlock your potential,"
  "10x your skills," "fight the compiler," "beat the tests," "trick the grader"

## Visual identity

Inherit `borrow-native`'s (and, before it, `terminal-velocity`'s) Astro starter tokens rather than
invent a new palette, once the site is built: `--accent`, `ink`/`paper` Tailwind tokens, the
`.post-body` typography rhythm, "no section dividers, whitespace only." Object Lesson's own accent
choice is still `[TBD]`, below, not decided in this pass.

| Element | Direction |
|---|---|
| Overall mood | A clean, patient workshop notebook, not a lecture hall. |
| Colour approach | Dark-on-light default; restrained palette; dark mode optional later |
| Typography | Crisp, generous whitespace, readable code blocks (Java syntax highlighting matters here the way Rust's did for `borrow-native`) |
| Imagery | Artifact-led: compiler/JUnit output, diffs, class diagrams sketched from real exercises, not stock photos or decorative AI art |
| Decoration | No neon AI aesthetic, no hero banners, no gradient-mesh backgrounds |

## Gremlin and factory language rules

- Coachgremlin and the Workshop Gremlin are real, documented agents with concrete responsibilities
  (`<hekton-machinery>/gremlins/`) — reference them plainly when explaining how the workshop works,
  gloss the term "Gremlin" once on first use in learner-facing copy (see the jargon rule above,
  this term is exactly the kind it's meant to cover), and don't decorate every heading with gremlin
  language.
- A module README is a production artifact: plain. A build-log entry can be funny where the actual
  events were funny.

## Anti-goals

- Not an AI-hype funnel or a marketing page for Hekton.
- Not a certification mill — no claim that completing this workshop credentials anything.
- Not a vocabulary quiz wearing a workshop's clothes — the one-line problem this workshop exists to
  fix is students learning OOP terms to define on an exam rather than judgment calls to make on
  real code; published content should never slide back into that shape (a glossary-style "define
  encapsulation" framing, for instance).
- Not a place to publish unverified efficacy claims — every claim about what the teaching method
  achieves gets the hypothesis treatment above until there's real evidence.
- Not condescending about the audience being first-year. Genuinely new to OOP is not the same as
  inexperienced at programming; the tone should read as "this specific thing is new to you," not
  "programming is hard, don't worry."
- Not overrun with gremlin language to the point of reading childish.

## Application map

| Artifact | Reads |
|---|---|
| `README.md` | Title + tagline |
| `site/` (once built) | Tone, hard rules, banned phrases, visual identity |
| Module READMEs | Tone, hard rules, banned phrases, jargon-glossing rule, encapsulation/compiler escape-hatch rules |
| Build-log entries | Tone and voice rules (first person, tension, no hype) |

## [TBD]: items for later

- [ ] Exact accent colour token (once site is built)
- [ ] Favicon / wordmark treatment
- [ ] Dark mode colour tokens
- [ ] Java-syntax-highlighting theme choice for code blocks
