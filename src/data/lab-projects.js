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
 */

/** @type {LabProject[]} */
export const labProjects = [
  {
    serial: "LAB-001",
    title: "Smoke Tester 9000",
    category: "Electronics",
    year: "2024",
    status: "SMOKED",
    where: "the workbench, 2am",
    builtFrom: "a 12V PSU, a buck converter, and insufficient respect for both",
    time: "one evening",
    how: "I wanted to learn how current-limiting worked. The answer is that it works for about eleven seconds.",
  },
  {
    serial: "LAB-002",
    title: "Breadboard PSU",
    category: "Electronics",
    year: "2023",
    status: "HALF-WORKING",
    where: "the good drawer",
    builtFrom: "LM2596 modules, a laptop charger, assorted crocodile clips",
    time: "two weekends",
    how: "Three regulators screwed to a plastic tray with standoffs, three rails, zero documentation. It has never been opened again, on purpose.",
  },
  {
    serial: "LAB-003",
    title: "Photo-cell theremin",
    category: "Electronics",
    year: "2025",
    status: "IN PIECES",
    where: "the spare room (now evicted)",
    builtFrom: "a PIC, a photocell, a speaker, one too many op-amps",
    time: "a month, on and off",
    how: "Pitch is tracked by hand shadows over a photocell. Calibration is a full-contact sport, and the cat is an unlicensed instrument.",
  },
  {
    serial: "LAB-004",
    title: "Line follower, gen 4",
    category: "Robotics",
    year: "2025",
    status: "WORKING",
    where: "the kitchen floor",
    builtFrom: "an Arduino Nano, 2× L298N, 4 motors, 1 snapped axle",
    time: "six weekends",
    how: "Every generation crashed into the same leg of the kitchen table, so generation four got a bigger front bumper instead of better sensors.",
  },
  {
    serial: "LAB-005",
    title: "Gripper arm",
    category: "Robotics",
    year: "2024",
    status: "HALF-WORKING",
    where: "the garage bench",
    builtFrom: "SG90 servos, laser-cut acrylic, prayers",
    time: "three weekends",
    how: "Two fingers, one grip strength, zero grip precision. It can hold a marker steady, which is more than it can pick anything up.",
  },
  {
    serial: "LAB-006",
    title: "Hexapod (frame only)",
    category: "Robotics",
    year: "2026",
    status: "IN PIECES",
    where: "the 3D printer corner",
    builtFrom: "a PLA frame, 18 servos, a wish list for the walking code",
    time: "ongoing",
    how: "Printed the body, printed all six legs, then learned that walking is a coordination problem, not a hardware problem.",
  },
  {
    serial: "LAB-007",
    title: "LED clock",
    category: "Unclassified",
    year: "2023",
    status: "WORKING",
    where: "the nightstand",
    builtFrom: "WS2812 strips, an ESP32, a 3D-printed frame",
    time: "two evenings",
    how: "A word-clock with opinions: it shows the time in words, then displays advice about how late it is.",
  },
  {
    serial: "LAB-008",
    title: "Cupboard interlock",
    category: "Unclassified",
    year: "2022",
    status: "HALF-WORKING",
    where: "the pantry",
    builtFrom: "a reed switch, a piezo, a battery, and a good idea",
    time: "one evening",
    how: "It was supposed to keep the toddler out. It beeps when the door opens, which the toddler finds very motivating.",
  },
];
