/**
 * EXPERIENCE — the ruled timeline in the "Experience" section.
 *
 * REPLACE these placeholder roles with your real work history. Keep the
 * shape; each entry becomes one ruled row (period, role, company, summary,
 * and 2–3 highlights). Delete entries or add your own freely — the list
 * handles 2–6 comfortably.
 */

/**
 * @typedef {Object} ExperienceItem
 * @property {string} period
 * @property {string} role
 * @property {string} company
 * @property {string} [location]
 * @property {string} summary
 * @property {string[]} highlights
 */

/** @type {ExperienceItem[]} */
export const experience = [
  {
    period: "2023 – Present",
    role: "Full-Stack Developer",
    company: "Independent / Freelance",
    location: "Remote",
    summary:
      "Building and shipping client products across the whole stack — from the interface down to the infrastructure — with a focus on fast, reliable, accessible results.",
    highlights: [
      "Shipped 10+ production applications for clients",
      "Owned the stack end to end: design systems, APIs, deployment",
      "Maintained a +0.5 Core Web Vitals budget on every launch",
    ],
  },
  {
    period: "2020 – 2023",
    role: "Frontend Engineer",
    company: "A Previous Team",
    location: "Hybrid",
    summary:
      "Owned the frontend of a busy SaaS product, turning a tangled codebase into a tokenized component library with real test coverage.",
    highlights: [
      "Rebuilt the design system powering three products",
      "Cut average page load time by 40%",
      "Led the migration to typed, server-rendered React",
    ],
  },
  {
    period: "2018 – 2020",
    role: "Software Engineer",
    company: "An Earlier Company",
    location: "On-site",
    summary:
      "Full-stack on internal tooling: dashboards, data pipelines, and the APIs that fed them. Learned that most hard problems are people problems.",
    highlights: [
      "Automated a monthly report that saved a full day a week",
      "Built the internal metrics dashboard used daily by the team",
    ],
  },
];
