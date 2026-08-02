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
    title: "Project Showcase",
    location: "Dhaka, Bangladesh",
    date: "2026",
    image: '/dnd/1.webp'
  },
  {
    title: "Building",
    location: "HOMEE",
    date: "2026",
    image: "/dnd/2.webp"
  },
  {
    title: "Building",
    location: "Excitedd",
    date: "2026",
    image: "/dnd/3.webp"
  },
  {
    title: "PRIZEE",
    location: "PRIZEE",
    date: "2026",
    image: "/dnd/4.webp"
  },
  {
    title: "Project Showcase",
    location: "Bigganchinta",
    date: "2025",
    image: "/dnd/5.webp"
  },
  {
    title: "Making",
    location: "Engineerss!!",
    date: "2026",
    image: "/dnd/6.webp"
  },
  {
    title: "Showcase",
    location: "VR",
    date: "2026",
    image: "/dnd/7.webp"
  },
  {
    title: "Memories",
    location: "Chill guys",
    date: "2026",
    image: "/dnd/8.webp"
  },
  {
    title: "Prize",
    location: "PRIZEE",
    date: "2026",
    image: "/dnd/9.webp"
  },
  {
    title: "Project",
    location: "PROJECTT",
    date: "2026",
    image: "/dnd/10.webp"
  },
  {
    title: "Project Showcase",
    location: "Judgement!",
    date: "2026",
    image: "/dnd/11.webp"
  },
  {
    title: "Project Showcase",
    location: "SHOWDOWN",
    date: "2025",
    image: "/dnd/12.webp"
  },
  {
    title: "Project",
    location: "MEOW",
    date: "2026",
    image: "/dnd/13.webp"
  },
  {
    title: "Prize",
    location: "PRIZE",
    date: "2025",
    image: "/dnd/14.webp"
  },
];
