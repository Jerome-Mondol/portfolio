/**
 * PROJECTS — featured work shown in the "Selected Work" section.
 *
 * REPLACE these placeholders with your real projects. Each project is:
 *   title        — name of the product
 *   year         — year(s) it was built / shipped (shown in mono)
 *   description  — 1–2 sentences on what it is and what it achieved
 *   stack        — tech tags shown under the description
 *   slug         — short kebab-case id, used for the placeholder plate's
 *                  mono filename (e.g. "haven-analytics")
 *   image        — OPTIONAL path to a real screenshot, e.g. "/projects/
 *                  haven-analytics.png". While empty, the card renders a
 *                  ruled "spec drawing" plate as a stand-in.
 *   links        — { live, code }. Set to "#" if a link is not ready yet;
 *                  the card simply omits links whose value is empty "".
 *
 * Add or remove projects freely; the grid handles 3–6 comfortably.
 */

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {number} year
 * @property {string} description
 * @property {string[]} stack
 * @property {string} slug
 * @property {string} [image]
 * @property {{ live: string, code: string }} links
 */

/** @type {Project[]} */
export const projects = [
  {
    title: "Haven Analytics",
    year: 2026,
    slug: "haven-analytics",
    description:
      "A real-time dashboard that turns raw product events into decisions: streaming, alerting, and a typed query layer over billions of rows.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "ClickHouse", "AWS"],
    links: { live: "#", code: "#" },
  },
  {
    title: "Lumen Design System",
    year: 2025,
    slug: "lumen-design-system",
    description:
      "A tokenized, accessible component library used across four products: documented in Storybook, tested with Playwright, themed in milliseconds.",
    stack: ["React", "TypeScript", "Tailwind", "Storybook", "Vitest"],
    links: { live: "#", code: "#" },
  },
  {
    title: "Portwise",
    year: 2025,
    slug: "portwise",
    description:
      "An onboarding engine that cut time-to-value by 40%: guided flows, save-state recovery, and a permission model that just works.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    links: { live: "#", code: "#" },
  },
  {
    title: "Relay CLI",
    year: 2024,
    slug: "relay-cli",
    description:
      "An open-source command-line tool that wires microservices to shared config in one command: bootstrapped from a scratch repo to CI green.",
    stack: ["TypeScript", "Node.js", "OpenAPI", "GitHub Actions"],
    links: { live: "#", code: "#" },
  },
];
