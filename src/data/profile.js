/**
 * PROFILE — personal + contact content for the hero, header, and footer.
 *
 * REPLACE the placeholder values below with your real details. Every
 * `your...` / `[bracketed]` value is a placeholder. Keep the shape of
 * this object unchanged so the components keep working.
 */

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} role
 * @property {string} siteUrl
 * @property {string} availability
 * @property {string} bio
 * @property {string} email
 * @property {string} resumeUrl
 * @property {string} [location]
 * @property {{ github?: string, linkedin?: string, x?: string }} links
 */

/** @type {Profile} */
export const profile = {
  /**
   * Your name — shown large in the hero and small in the header.
   * This is the exact string search engines should match you by.
   */
  name: "Jerome Mondol",
  /** One-line role shown in the page title/meta. */
  role: "Full-Stack Developer",

  /**
   * Canonical URL of the deployed site, with trailing slash / no paths.
   * Used for metadataBase (canonical link), Open Graph/Twitter meta, and
   * JSON-LD structured data. REPLACE with your real domain once deployed.
   */
  siteUrl: "https://jeromemondol.codes",

  /** Availability text rendered inside the status tag. */
  availability: "Available for opportunities",

  /**
   * Bio — the concise, high-impact description under your name.
   * ~2–3 sentences; visitors read this to decide if you fit their project.
   */
  bio: "I design and build production web applications across the whole stack: pixel-faithful interfaces, the APIs behind them, and the infrastructure that keeps them fast. I ship accessible products that stay easy to maintain, and I care about the details other people skim past.",

  /** Contact email — used for the mailto: links and the CTA. */
  email: "jeromemondol11@gmail.com",

  /** Link to the résumé (Google Drive / PDF). Opens in a new tab. */
  resumeUrl: "https://drive.google.com/file/d/1hWmhGEfsvWTsph4UxHKvnKFogvT2YC_x/view?usp=sharing",

  /** Optional one-line location/timezone note. Delete the line to hide it. */
  location: "Khulna, Bangladesh",

  /** Social / professional links. Delete any entry to hide its icon. */
  links: {
    github: "https://github.com/Jerome-Mondol",
    linkedin: "https://www.linkedin.com/in/jeromemondol",
    // x: "https://x.com/yourname",
  },
};
