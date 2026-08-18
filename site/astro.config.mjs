// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Custom domain (object-lesson.coderturtle.io) via GitHub Pages + Route53 CNAME,
  // see agentic-infra-lab's patterns/github-pages-dns (onboarded as the fifth consumer,
  // PR dermdunc/agentic-infra-lab#8) and docs/decisions.md. Site now serves at the
  // domain root, not under /object-lesson/ on coderturtle.github.io — set ahead of the
  // human's DNS apply/Pages-enablement steps since no live deploy exists yet to break;
  // see docs/next-actions.md for what's still open. Every internal link MUST still be
  // base-aware (import.meta.env.BASE_URL), not a bare "/path".
  site: "https://object-lesson.coderturtle.io",
  base: "/",
  integrations: [mdx(), tailwind()],
  output: "static",
});
