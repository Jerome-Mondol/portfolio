/**
 * DirectionContract — emits the direction contract as a real HTML comment at
 * runtime so it survives the production build (JSX comments are compiled
 * away). Audited by grepping the built HTML for "PORTFOLIO DIRECTION CONTRACT".
 */
const CONTRACT = `PORTFOLIO DIRECTION CONTRACT
THESIS: A freelance client's first read must prove "full-stack, and
worth contacting" in seconds; the page refuses the hero-over-stats
template for a precise engineering spec sheet.
OWN-WORLD: Charcoal dossier on #121212, #1E1E1E surfaces, 1px #2A2A2A
hairlines, one professional sans face (Inter) with zero monospace,
and a coordinated four-hue accent set (amber, teal, blue, violet)
where each hue owns one cell or one card.
STORY: The visitor reads a confident engineer's spec: who, breadth of
stack, proven work, and a standing invitation.
FIRST VIEWPORT: Name in heavy Inter over a sans status tag pulsing
amber, one-line bio, then a ruled table of contents.
FORM: User-pinned world (charcoal/minimalist brief), spec-sheet
composition, professional sans + coordinated color; no concept roll
— brief-pinned direction.
LAB COUNTERPOINT: /lab, a second surface and the page's deliberate
opposite — a photo dump of electronics, robotics, and experiments.
Same charcoal tokens, single Inter, zero monospace, and the four-hue
set, but the register loosens on purpose: a clean "The Lab." masthead
with an UNSORTED stamp, then a pile of dumped, overlapping photos you
drag around to rummage (pointer + keyboard), each carrying a little
"taken at" tag, any number of them; then the project showcase as
pinned "build sheets" — not cards — each with a photo slot, an
inventory serial, spec rows (made where, built from, time spent), a
short "how it was made" account, and a status stamp in the four hues.
Reachable from header and footer.
FINISH: unreviewed and undocumented is unfinished; this build ends
with the finish review, the verdict, and DESIGN.md`;

export function DirectionContract() {
  return (
    <div
      aria-hidden="true"
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${CONTRACT} -->` }}
    />
  );
}
