---
name: Portfolio — Engineering Spec Sheet
description: A charcoal freelance-portfolio dossier: Inter (professional, zero monospace), hairline rules, and a coordinated four-hue accent system on dark.
colors:
  primary: "#e2b065"
  primary-hover: "#edc285"
  neutral-bg: "#121212"
  neutral-surface: "#1e1e1e"
  neutral-surface-hover: "#252525"
  neutral-line: "#2a2a2a"
  neutral-line-hover: "#3a3a3a"
  neutral-fg: "#f3f4f6"
  neutral-muted: "#9ca3af"
  accents:
    - name: "Teal"
      value: "#5fb8a8"
      owns: "Backend & infrastructure"
    - name: "Blue"
      value: "#7fa8e8"
      owns: "Specializations"
    - name: "Violet"
      value: "#b3a4f5"
      owns: "Tools & workflow"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  md: "6px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  chip:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-muted}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  status-pill:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  card:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "0"
    padding: "20px 20px"
  card-hover:
    backgroundColor: "{colors.neutral-surface-hover}"
  social-button:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-muted}"
    rounded: "{rounded.md}"
    size: "40px"
---

# Design System: Portfolio — Engineering Spec Sheet

## Overview

**Creative North Star: "The Engineering Spec Sheet"**

This is a freelance developer's portfolio rendered as a precise engineering dossier: dark charcoal ground, hairline rules, and a disciplined splash of coordinated color. Every section reads like a page from a well-kept spec — the visitor skims the ruled table of contents, scans the bento "specs," and finds a standing invitation to talk. The surface is a clean, modern, minimalist charcoal; the craft lives in the composition: a single professional sans (Inter), hairline separators instead of shadows, and a small accent set where each hue owns exactly one cell or one card, so color never reads as random.

Depth is conveyed by tonal layering and hairlines, never shadows. Type is the loudest element; color is rationed. Amber is the "live action" hue — the status dot, links, the primary button, selection. Three companion hues (teal, blue, violet) each own one bento cell and rotate across project cards and experience markers.

**Key Characteristics:**
- Charcoal-on-charcoal tonal layering (three surface steps), 1px hairlines between them.
- One professional sans face (Inter) from hero to footnote — no monospace anywhere.
- A coordinated four-hue accent set; each hue has an owner, never a free agent.
- Ruled, indexed compositions (table of contents, bento cells, project rows) instead of cards-as-lazy-containers.
- Flat by default: no shadows, no glass, no gradients. Motion is one soft pulse on the availability dot.

## Colors

Charcoal neutrals carry nearly the whole surface. Four coordinated hues provide all color, each with a job.

### Primary
- **Signal Amber** (#e2b065): The live-action hue. Status dot, link hover, TOC indices, the primary CTA background, focus rings, selection. Hover #edc285.

### Accent Set (each hue owns one thing)
- **Teal** (#5fb8a8): Owns the Backend & Infrastructure cell, the experience-row markers, and rotates across project plates.
- **Blue** (#7fa8e8): Owns the Specializations cell and rotates across project plates.
- **Violet** (#b3a4f5): Owns the Tools & Workflow cell and rotates across project plates.
- Each of the four hues (amber included) cycles through project cards as that card's index/bar accent, so no two adjacent cards repeat.

### Neutral
- **Charcoal Ground** (#121212): Page background. Also used as chip background for contrast on surfaces.
- **Surface** (#1e1e1e): Cards, bento cells, the contact panel, the status pill.
- **Surface Lift** (#252525): Hover state for interactive surfaces.
- **Hairline** (#2a2a2a): All 1px borders and dividers.
- **Hairline Bright** (#3a3a3a): Border color on hover.
- **Ink Foreground** (#f3f4f6): Primary text — headings, names, titles.
- **Ink Muted** (#9ca3af): Secondary text — bios, descriptions, metadata labels. Contrast 7.4:1 on the ground.

### Named Rules
**The Owned-Hue Rule.** Every accent color has exactly one owner — a cell, a role, a rotation. A hue that appears in a place it does not own is a defect; two hues on one element is a defect. Neutrals carry the page; color is rationed, never sprinkled.

**The Flat-By-Default Rule.** Depth is tonal layering and hairlines, never shadows. A surface that needs elevation changes its fill or border brightness; it never gains a drop shadow.

## Typography

**Family:** Inter — a single professional, highly legible sans across the entire site. There is no monospace, no serif display, no second family. Roles are carved with weight, size, tracking, and tone rather than face changes.

**Character:** Inter at 800, tight tracking, reads as engineered and confident for the name; at 400 it is a workhorse for long body copy. The "data/metadata" role is Inter at 12px, weight 500, with wide tracking — the professional way to set facts without switching faces.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 7vw, 5.25rem)`, 0.95 line-height, `-0.04em` tracking): The name in the hero. The one element allowed to be huge.
- **Headline** (700, 30px, 1.1, `-0.02em`): Section headings — Skills, Experience, Selected Work, the contact close.
- **Title** (700, 20px, 1.25, `-0.02em`): Bento cell labels and project titles.
- **Body** (400, 14–18px, 1.625): Bios and descriptions. `max-w-prose` (65ch) measure. Muted color for anything secondary.
- **Label** (500, 12px, 1.2, `0.06em` tracking): Years, periods, indices, the email, the footer, the status pill. Inter, medium weight, tracked — never a separate face.

### Named Rules
**The Single-Face Rule.** One family, five roles. If a role cannot be told apart at a glance by weight, size, tracking, or tone alone, the system is failing — a second typeface is never the fix.

**The No-Eyebrow Rule.** Headings carry their own weight. No kicker, no small-caps label above a heading, no decorative section numerals. Indices appear only inside the table of contents and project plates, where they are data.

## Layout

Content lives in a centered column capped at 70% of the viewport on large screens (`lg:max-w-[70%]`), with `20px` side padding on mobile and `32px` from `sm`. Sections are ruled apart by a 1px bottom border and breathe with `64px` vertical padding (mobile) / `96px` (desktop).

Page order: hero (with ruled table of contents) → skills bento → experience timeline → selected work → contact. The TOC carries the same four stops as indices 01–04.

The skills area is a 12-column bento with asymmetric spans: the primary stack spans 7 columns × 2 rows; backend and tools each span 5 columns × 1 row, stacked beside it; specializations run full width below. On mobile everything stacks to one column. Experience is a full-width ruled list; projects form a 2-column grid from `sm`.

Spacing rhythm: 8 / 12 / 16 / 24 / 32 / 56 / 96px. More space above a heading than below it; hairline rules align across sibling columns.

## Elevation & Depth

The system is flat. No drop shadows, no glass, no gradients. Elevation is communicated by the tonal ladder — Ground (#121212) → Surface (#1e1e1e) → Surface Lift (#252525) — and by 1px hairlines that become brighter (#2a2a2a → #3a3a3a) on hover. A cell or card at rest is a flat ruled panel; on hover it lifts one step in fill and one step in hairline brightness.

### Named Rules
**The Defined-Edge Rule.** Surfaces are defined by their edge, not their shadow. If a panel needs to sit above another, brighten its border or lift its fill; never cast a shadow.

## Shapes

A deliberate, engineered radius scale: **0** for cards, bento cells, and the contact panel (defined edges); **6px** (`rounded-md`) for buttons, social squares, and the contact panel when paired with interactive density; **2px** (`rounded-sm`) for tech tags; **full** only for the availability pill. Buttons are rectangular with a small radius — no pill buttons, no fully rounded "chips" as CTAs.

## Components

### Buttons
- **Shape:** 6px radius, `12px` vertical × `20px` horizontal padding.
- **Primary ("Start a conversation"):** amber (#e2b065) fill, charcoal (#121212) text, 14px bold, inline right-arrow that slides on hover. Hover fill #edc285. Focus = 2px amber outline offset 2px.
- **Secondary (social squares):** transparent fill, 1px hairline border, muted glyph; hover brightens border to #3a3a3a and glyph to amber. 40px square.

### Chips / Tags
- **Style:** 1px hairline border, charcoal-ink fill (#121212), 12px Inter medium, muted text, 2px radius. Optional inline brand mark (Simple Icons, CC0) ahead of the label for skills that have an open-license logo. Static — no selected state in this system.

### Cards / Containers
- **Corner Style:** square (0 radius).
- **Background:** Surface (#1e1e1e).
- **Shadow Strategy:** none — flat by default.
- **Border:** 1px Hairline (#2a2a2a).
- **Internal Padding:** 20px, 24px on large screens.
- **Hover:** fill lifts to #252525, border brightens to #3a3a3a.

### Status Pill
- **Style:** full-radius pill, Surface fill, 1px hairline border, 12px Inter medium, foreground text, and a 8px amber dot that softly pulses (the page's one authored motion moment — tied to genuinely live availability data). Static ring only; no radar/expansion ping.

### Navigation
- **Header:** sticky, 64px tall, ground fill at 90% opacity with a faint backdrop blur, 1px hairline bottom border. Name (bold, 14px) left; email (12px medium) with an up-right arrow right, hover amber.
- **Table of Contents (hero):** a bordered, divided list (12px Inter, wide tracking) — amber index, muted label, slide-in arrow on hover. Anchors to Skills, Experience, Selected Work, Contact.

### Signature Component: The Bento
- Four ruled cells: feature (7×2), backend and tools (5×1 each), specializations (full-width band). Each cell leads with a bold title, a short accent bar in its owned hue, and a muted blurb; items render as ruled name/detail rows or mono-free tag chips (with brand marks) pinned to the cell's base. Hover lifts the whole cell one step.

### Experience Timeline
- A full-width ruled list, one row per role: period + location (12px label) on the left, role, company, summary, and 2–3 highlights with a small teal square marker.

### Project Card
- A visual header (aspect 16:10) above the content: a real screenshot via `next/image` when `data/projects.js` provides one, otherwise a ruled "spec drawing" plate — the project's slug, a `P.0X` index, and abstract interface bars, the plate's index and signal bar carrying that card's accent hue. Content below: year (label), title, description, tech tags, ruled link row.

## Do's and Don'ts

### Do:
- **Do** keep one typeface (Inter) and carve hierarchy with weight, size, tracking, and tone.
- **Do** ration color: each hue owns its cell/card, and neutrals carry the page.
- **Do** set the hero name at 800 weight with `-0.04em` tracking.
- **Do** use the 12px medium tracked label for facts (years, periods, indices, email) — the sans way to set metadata.
- **Do** separate ruled rows with the same 1px #2a2a2a hairline used everywhere.
- **Do** leave 64–96px of quiet between sections and more space above headings than below.

### Don't:
- **Don't** introduce a monospace, serif, or second family; no `font-mono` anywhere.
- **Don't** add shadows, glass, or gradients; elevation is tonal, not luminous.
- **Don't** put a kicker or decorative section numeral above a heading.
- **Don't** use an accent hue outside its owner or stack two hues on one element.
- **Don't** let the layout exceed the 70% column cap on large screens.
- **Don't** add motion beyond the availability pulse; every other state change is a 200ms ease-out transition.
