/**
 * LAB — the deliberately unprofessional page: a dump of photos from the
 * bench. Shown at /lab.
 *
 * REPLACE these placeholders with your real tinkering. Each item is:
 *   title    — name of the thing (used as the photo's accessible label)
 *   location — the little tag on the photo, "where it was taken"
 *   date     — when it was taken (year is enough)
 *   image    — OPTIONAL path to a real photo, e.g. "/lab/line-follower.jpg".
 *              While empty, the tile renders a dark "photo slot" as a
 *              clearly labeled stand-in.
 *
 * Add as many as you like — remove a few too; the dump pile scatters and
 * handles any number.
 */

/**
 * @typedef {Object} LabItem
 * @property {string} title
 * @property {string} location
 * @property {string} date
 * @property {string} [image]
 */

/** @type {LabItem[]} */
export const labItems = [
  {
    title: "Smoke Tester 9000",
    location: "Workbench, 2am",
    date: "2024",
  },
  {
    title: "Breadboard PSU",
    location: "The good drawer",
    date: "2023",
  },
  {
    title: "Photo-cell theremin",
    location: "Spare room, evicted",
    date: "2025",
    image: "https://avatars.githubusercontent.com/u/165287567?v=4"
  },
  {
    title: "Line follower, gen 4",
    location: "Kitchen floor",
    date: "2025",
  },
  {
    title: "Gripper arm",
    location: "Garage bench",
    date: "2024",
  },
  {
    title: "Hexapod (frame only)",
    location: "3D printer corner",
    date: "2026",
  },
  {
    title: "LED clock",
    location: "Nightstand",
    date: "2023",
  },
  {
    title: "Cupboard interlock",
    location: "The pantry",
    date: "2022",
  },
  
];
