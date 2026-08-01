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
    title: "Rapid Node",
    year: 2026,
    slug: "rapid-node",
    description:
      "Scaffold a production-ready Node.js backend project in seconds. RapidNode automates project initialization with pre-configured folder structures, dependency installation, and customizable templates",
    stack: ["Javascript", "NPM"],
    image: "/projects/rapidnode.webp",
    links: { live: "https://www.npmjs.com/package/@jeroomew/rapidnode", code: "https://github.com/Jerome-Mondol/rapidnode" },
  },
  {
    title: "Asset Verse",
    year: 2025,
    slug: "asset-verse",
    description:
      "An application for HR's and employees for better asset management of a company.",
    stack: ["React", "Javascript", "MongoDB", "Stripe", "Firebase", "NodeJs", "ExpressJs"],
    image: "/projects/assetverse.webp",
    links: { live: "https://asset-verse-d1aa8.web.app/", code: "https://github.com/Jerome-Mondol/assetVerse-client" },
  },
];
