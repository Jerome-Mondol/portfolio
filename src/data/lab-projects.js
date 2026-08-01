/**
 * LAB PROJECTS — the /lab project showcase, shown after the photo dump.
 *
 * REPLACE these placeholders with your real builds. Each project is:
 *   serial    — a lab-inventory-style id (LAB-001, LAB-002, …)
 *   title     — name of the build
 *   category  — electronics / robotics / unclassified
 *   year      — when it got your attention (year is enough)
 *   status    — WORKING / HALF-WORKING / SMOKED / IN PIECES
 *               (maps to the four accent hues, stamped on the sheet)
 *   where     — where it was made (goes in the spec rows)
 *   builtFrom — the parts it started life as
 *   time      — how long it actually took
 *   how       — 2–3 sentences on how it was made, including the
 *               inevitable part where something broke
 *   image     — OPTIONAL path to a real photo, e.g. "/lab/gripper.jpg".
 *               While empty, the sheet renders a dark photo slot as a
 *               clearly labeled stand-in.
 *   images    — OPTIONAL array of photo paths. When present, the image
 *               area scrubs between them as you move the pointer across
 *               the photo.
 *
 * Add as many as you like; the pinboard handles any number.
 */

/**
 * @typedef {Object} LabProject
 * @property {string} serial
 * @property {string} title
 * @property {string} category
 * @property {string} year
 * @property {"WORKING" | "HALF-WORKING" | "SMOKED" | "IN PIECES"} status
 * @property {string} where
 * @property {string} builtFrom
 * @property {string} time
 * @property {string} how
 * @property {string} [image]
 * @property {string[]} [images]
 */

/** @type {LabProject[]} */
export const labProjects = [
  
  {
    serial: "LAB-001",
    title: "Intelligent Multi Agency Infrastcture Coordination System (IMAICS)",
    category: "Pure MESS",
    year: "2026",
    status: "HALF-BURNED",
    where: "my heart",
    builtFrom: "alumunium rods, raspberry pi, arduino and other unknows circuits",
    time: "many sleepless nights",
    how: "rods, screws, glue, wiresss bla bla",
    images: ["/dnd/10.webp"]
  },
  {
    serial: "LAB-002",
    title: "Automatons",
    category: "Electronics",
    year: "2025",
    status: "COOKED",
    where: "my home",
    builtFrom: "countless sensors and modules",
    time: "3 week",
    how: "Cuz we were going to participate in a national competition!!!",
    images: [
      "/lab-projects/car-1.webp",
      "/lab-projects/car-2.webp",
      "/lab-projects/car-3.webp",
    ],
  },
];
