# Next Actions: Object Lesson

## Immediate

- [x] Define project brief — `docs/workshop-design.md` written 2026-08-17 (module arc, gate design, canonical-curriculum anchor research); private-sibling `brief.md` filled to match.
- [x] Record first design decisions in `docs/decisions.md` — naming, audience framing, language/anchor choice, deterministic-gate design, and module-arc anchor all logged 2026-08-17.
- [x] Workshop Review Panel first pass against `docs/workshop-design.md` — run 2026-08-17, all seven personas returned distinct findings, report at `docs/review-panel/2026-08-17-initial-design.md`. Cheap doc-text fixes (README rewrite/maintainers split, an Objects First chapter-numbering citation error, three hedging inconsistencies) applied in the same pass; four structural findings deferred to the Deliverables & branding step below.
- [x] Deliverables & branding step complete (2026-08-17): module directory skeleton (all 9 modules,
  `modules/01-classes-and-objects/` through `modules/09-synthesis-capstone/`, plus
  `modules/README.md` arc index), each using the module-README template's 8 parts, and the brand
  layer (`docs/brand.md`: name, tagline, voice notes, hard rules) applied to `README.md`. All four
  deferred Review Panel findings resolved as real design decisions in `docs/workshop-design.md` +
  `docs/decisions.md`, not left as-is:
  - Module 03←02 and Module 06←05 "hard prerequisite" claims relabeled as editorial ordering; real
    hard prerequisites corrected to 01 and 04 respectively. See "Prerequisite reassessment."
  - Module 09 capstone requirement made concrete: seeded flaw must touch 3+ of encapsulation,
    inheritance/polymorphism, and composition jointly. See "Capstone requirement (Module 09)."
  - Generics & Collections split: baseline `List`/`Map` usage is now required-but-light inside
    Module 06's gate; writing your own generic types stays optional. See revised "Scoping decision."
  - Added a design-level sandboxed/isolated-execution commitment for the deterministic gate; flagged
    as a hard requirement on Module 01's future fixture-build step, not yet built.
  - Also found and fixed a real scaffold-template bug for this repo: `setup-hooks.sh` and
    `check-mirror-drift.sh` were scaffolded into the private sibling (a non-git directory), so the
    pre-push hook never installed; copied both into `object-lesson/scripts/` (public) instead and
    installed the hook for real. See `docs/decisions.md` for the full reasoning and the residual
    limitation this doesn't fix (worth a follow-up in `~/hekton/scripts/scaffold-project.sh` itself).
  - `scripts/check-brand-lint.sh` added and wired into the pre-push hook alongside the mirror-drift
    check; both warn-only. Verified clean against the current tree.
- [x] Build-log/Pages site skeleton (Astro-on-Pages, reusing the `terminal-velocity`/`borrow-native`
  pipeline) and the GitHub Actions deploy workflow — built and locally validated 2026-08-17: `site/`
  adapted from `borrow-native/site` (Astro 5 Content Layer `glob` loader reading `docs/build-log/` in
  place, React/narrative components dropped, `@astrojs/mdx` kept), `npm run build` and `astro check`
  both clean, `base: "/object-lesson/"` (standard GitHub Pages project hosting, no custom domain yet)
  confirmed on every internal link in the built HTML including header/footer/404/favicon. First seed
  entry written (`docs/build-log/2026-08-17-scaffold-and-design.md`), brand-lint clean.
  `.github/workflows/deploy-pages.yml` added, `workflow_dispatch`-only trigger, `push` commented out
  per the Human Gate — not triggered, Pages not enabled, nothing pushed this session. `npm audit`
  found 5 inherited vulnerabilities in the Astro starter chain (astro/esbuild/sharp, same category as
  `borrow-native`'s accepted RISK-0002); not yet formally triaged for this repo, should get the same
  "none reachable given `output: \"static\"`" review before the first real deploy.
- [ ] Get a human to enable GitHub Pages (Settings > Pages > Source: GitHub Actions) and trigger the
  first real `workflow_dispatch` deploy, then confirm the Actions run actually succeeds (not just the
  local build) — this workshop's own Human Gate; out of scope for the session above.
- [ ] `.github/workflows/deploy-pages.yml` is written to disk but deliberately **not committed**:
  `.rules/git-contract.md`'s Protected Paths list `.github/workflows/**` as requiring explicit human
  approval before an agent commits to it, and the local `git-guardrail.sh` hook enforces this
  mechanically (blocked the commit attempt 2026-08-17). A human needs to review the file (content
  matches `terminal-velocity`'s pre-cutover workflow exactly: `workflow_dispatch`-only, `push`
  commented out) and either commit it directly or explicitly authorize an agent to.
- [ ] Flag the `scaffold-project.sh` `PUBLIC_CAPABLE` hook-install bug upstream (see this session's
  finding above) so future public-capable scaffolds don't repeat it — out of scope for this repo's
  own session, needs a maintainer to touch `~/hekton/scripts/scaffold-project.sh` directly.
- [ ] Re-run the Workshop Review Panel once real module content exists (content-building via
  Coachgremlin is explicitly out of scope for this Gremlin and for this session).

## This Week

-

## Later

- [ ] Decide the shared-project-vs-independent-exercises question left open in `docs/workshop-design.md`'s "out of scope" section, before Coachgremlin authors Module 01 content.
- [ ] Re-run the Workshop Review Panel once real module content exists.

## Session Update: 2026-08-18 — Workshop Gremlin run: naming, design, review panel, module skeleton, build-log site

- [ ] Human review of PR #1; Coachgremlin authors Module 01 content; upstream fix to scaffold-project.sh's PUBLIC_CAPABLE hook-install path; npm audit triage before first real deploy; human-confirmed first workflow_dispatch Pages deploy

## Session Update: 2026-08-18 — Custom domain onboarded (object-lesson.coderturtle.io)

Onboarded as the fifth consumer of `agentic-infra-lab`'s `github-pages-dns` Terraform pattern
(dermdunc/agentic-infra-lab#8, merged; DNS not yet applied — see that lab's `docs/next-actions.md`
for the full human runbook). `site/astro.config.mjs` cut over to domain-root serving
(`site: "https://object-lesson.coderturtle.io"`, `base: "/"`, was `/object-lesson/`) and
`site/public/CNAME` added, ahead of the human's DNS/Pages steps since no live deploy exists yet to
break. `npm run build` re-verified clean; built HTML confirmed root-relative links
(`/`, `/build-log/`, not `/object-lesson/...`) and `dist/CNAME` present.

- [ ] **Human, in `agentic-infra-lab`:** `terraform apply` the object-lesson CNAME-only plan.
- [ ] **Human:** one-time `gh api --method PUT repos/coderturtle/object-lesson/pages -f
  cname=object-lesson.coderturtle.io -f build_type=workflow` — enables Pages and sets the custom
  domain (the consumer's `GITHUB_TOKEN` cannot do this).
- [ ] **Human:** `github.com/settings/pages` → "Add a domain" (`object-lesson.coderturtle.io`) on
  the `coderturtle` account to get the real TXT challenge value, then report it back so
  `agentic-infra-lab`'s `terraform.tfvars` can be filled in for real and re-applied, then "Verify"
  once the TXT record resolves publicly.
- [ ] Only after all of the above: the first real `workflow_dispatch` deploy (this repo's existing
  Human Gate, unchanged by the domain cutover).
