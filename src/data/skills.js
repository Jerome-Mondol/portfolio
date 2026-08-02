/**
 * SKILLS — the four bento cells, grouped by category.
 *
 * REPLACE the placeholder items with your real skills. `layout` controls
 * the bento cell's shape on desktop:
 *   "feature" — large cell (spans 2 rows) for the primary stack
 *   "stack"   — standard cell (tag chips) for tools / infrastructure
 *   "band"    — full-width cell (rows) for specializations
 *
 * Items may be a plain string ("Docker"), an object with a short
 * `detail` line ({ name, detail }), or an object with a `logo` slug
 * ({ name, logo }) that renders the brand mark from Simple Icons.
 * Omit `logo` for skills with no open-license mark (e.g. AWS).
 */

/**
 * @typedef {Object} SkillItem
 * @property {string} name
 * @property {string} [detail]
 * @property {string} [logo]
 *
 * @typedef {Object} SkillGroup
 * @property {string} id
 * @property {"feature"|"stack"|"band"} layout
 * @property {"accent"|"accent-2"|"accent-3"|"accent-4"} accent
 * @property {string} label
 * @property {string} blurb
 * @property {Array<string|SkillItem>} items
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    id: "primary",
    layout: "feature",
    accent: "accent",
    label: "Primary Stack",
    blurb:
      "The languages and frameworks I build products with every week, end to end.",
    items: [
      { name: "Next.js", logo: "nextdotjs", detail: "App Router, server components" },
      { name: "TypeScript", logo: "typescript", detail: "Daily driver across every layer" },
      { name: "Tailwind CSS", logo: "tailwindcss", detail: "Tokenized design systems" },
      { name: "Node.js", logo: "nodedotjs", detail: "APIs, tooling, runtime work" },
      { name: "Express", logo: "express", detail: "Lightweight routes and APIs" },
      { name: "MongoDB", logo: "mongodb", detail: "Document data and flexible models" },
      { name: "PostgreSQL", logo: "postgresql", detail: "Schema design & query tuning" },
    ],
  },
  {
    id: "backend",
    layout: "stack",
    accent: "accent-2",
    label: "Backend & Infrastructure",
    blurb: "APIs, data, and the machinery that keeps them up.",
    items: [
      { name: "Node.js", logo: "nodedotjs" },
      { name: "Express", logo: "express" },
      { name: "Supabase", logo: "supabase" },
      { name: "Firebase", logo: "firebase" },
      { name: "Cloudflare", logo: "cloudflare" },
    ],
  },
  {
    id: "tools",
    layout: "stack",
    accent: "accent-4",
    label: "Tools & Workflow",
    blurb: "How I move fast without making a mess.",
    items: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Vite", logo: "vite" },
      { name: "VSC" },
    ],
  },
  {
    id: "special",
    layout: "band",
    accent: "accent-3",
    label: "Specializations",
    blurb:
      "Where I go deep enough to move a product's numbers, not just its pixels.",
    items: [
      {
        name: "Web Performance",
        detail: "Core Web Vitals, rendering paths, budgets",
      },
      {
        name: "Design Systems",
        detail: "Tokenized, accessible, documented",
      },
      {
        name: "API Design",
        detail: "Typed contracts, docs, rate limits",
      },
      {
        name: "Reliability",
        detail: "Testing, monitoring, incident practice",
      },
    ],
  },
];
