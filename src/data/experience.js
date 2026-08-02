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
    period: "2026 – Present",
    role: "Full Stack Intern",
    company: "RiseTogether",
    location: "Remote",
    summary:
      "Working with a team to build SaaS products, improve collaboration, and learn how team management works in a real product workflow.",
    highlights: [
      "Building SaaS products with a team",
      "Learning team management and collaboration",
      "Working on shared features and product delivery",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Full Stack Intern",
    company: "Labmentix",
    location: "India · Online Internship",
    summary:
      "Built full stack projects and helped with real-time projects, which made project management and delivery much easier to understand.",
    highlights: [
      "Built full stack project work end to end",
      "Helped with real-time projects",
      "Improved understanding of project management",
    ],
  },
];
