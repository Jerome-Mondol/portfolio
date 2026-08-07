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
 * @property {string} availability
 * @property {string} bio
 * @property {string} email
 * @property {string} [location]
 * @property {{ github?: string, linkedin?: string, x?: string }} links
 */

/** @type {Profile} */
export const profile = {
  /** Your name — shown large in the hero and small in the header. */
  name: "Jerome Mondol",
  /** One-line role shown in the page title/meta. */
  role: "Full-Stack Developer",

  /** Availability text rendered inside the status tag. */
  availability: "Available for opportunities",

  /**
   * Bio — the concise, high-impact description under your name.
   * ~2–3 sentences; visitors read this to decide if you fit their project.
   */
  bio: "I design and build production web applications across the whole stack: pixel-faithful interfaces, the APIs behind them, and the infrastructure that keeps them fast. I ship accessible products that stay easy to maintain, and I care about the details other people skim past.",

  /** Contact email — used for the mailto: links and the CTA. */
  email: "jeromemondol11@gmail.com",

  /** Optional one-line location/timezone note. Delete the line to hide it. */
  location: "Khulna, Bangladesh",

  /** Social / professional links. Delete any entry to hide its icon. */
  links: {
    github: "https://github.com/Jerome-Mondol",
    linkedin: "https://www.linkedin.com/in/jeromemondol",
    // x: "https://x.com/yourname",
  },
};
