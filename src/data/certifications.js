/**
 * CERTIFICATIONS — a stacked pile of certificates in the Certifications
 * section. Only the top few are shown on the pile; the rest live behind the
 * "View all certificates" button (certificationsUrl below).
 *
 * REPLACE these placeholders with your real certifications. Each item is:
 *   title         — the certification / course name
 *   issuer        — who issued it (freeCodeCamp, Coursera, AWS, etc.)
 *   year          — the year you earned it (shown in mono in the footer)
 *   image         — path to a photo/scan of the certificate. For now they
 *                   reuse other /public images as stand-ins (see TODO);
 *                   drop in your real scans here when ready.
 *   credentialUrl — link to the verifiable credential, if any. Empty ""
 *                   hides the arrow link and disables the card link.
 *
 * The first item renders on top of the pile; later items stack below it.
 */

/**
 * @typedef {Object} Certification
 * @property {string} id
 * @property {string} title
 * @property {string} issuer
 * @property {number} year
 * @property {string} image
 * @property {string} [credentialUrl]
 */

/** @type {Certification[]} */
export const certifications = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer Certification",
    issuer: "freeCodeCamp",
    year: 2026,
    image: "/certificates/Programming-Hero.webp", // TODO: replace with real certificate
    credentialUrl: "",
  },
  {
    id: "responsive-web",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: 2026,
    image: "/certificates/Keeron-Javascript-Mastery.webp", // TODO: replace with real certificate
    credentialUrl: "",
  },
  {
    id: "js-algorithms",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "Coursera",
    year: 2025,
    image: "/certificates/hablu.webp", // TODO: replace with real certificate
    credentialUrl: "",
  },
  {
    id: "cloud-essentials",
    title: "Cloud Practitioner Essentials",
    issuer: "AWS Training",
    year: 2025,
    image: "/certificates/labmentix.webp", // TODO: replace with real certificate
    credentialUrl: "",
  },
];

/**
 * The "View all certificates" button target. Point this at wherever the full
 * list lives (an honor board page, a PDF, a LinkedIn section, etc.).
 */
export const certificationsUrl = "#";