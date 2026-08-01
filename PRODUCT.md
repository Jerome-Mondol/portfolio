# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, already scaffolded in-repo. Confirmed by the existing project, not renegotiated.

## Users

Freelance clients — people evaluating whether to hire the developer for a project, usually arriving from a link, a proposal, or social. Primary task: quickly judge capability and fit, then take a concrete step to start a conversation. Secondary audience: anyone (recruiters, peers, collaborators) assessing the developer's work.

## Product Purpose

A personal portfolio website that wins freelance project work. Success is a qualified prospect reading with confidence and acting on the contact/links — not just "browsing" the page.

## Positioning

Full-stack versatility: comfortable across frontend, backend, and infrastructure. The page's specializations and projects must show credible breadth, not a single-stack monotone, while staying sharp enough to feel specialized.

## Operating Context

Single-page site evaluated in a few seconds to a couple of minutes, often on a laptop, sometimes on mobile. Visitors skim: they scan the hero, glance at skills, and open 1–2 projects that look relevant. The design must make breadth legible fast and put contact one click away.

## Capabilities and Constraints

- Single landing page with four content sections: hero (name, role, "Available for opportunities" status, concise bio), a bento-grid skills section, an experience timeline, and featured projects.
- Bento grid groups skills into primary stack, tools/workflow, backend/infrastructure, and specializations using varied spans (not lists); cells carry small brand marks and a per-cell accent.
- Experience: ruled timeline rows of period, role, company, summary, and short highlights.
- Projects: visual header (real screenshot or ruled placeholder plate), title, year, description, tech-stack tags, external links.
- Strict separation of content/data from UI via `src/data/profile.js`, `src/data/skills.js`, `src/data/experience.js`, `src/data/projects.js`.
- Modular structure: `src/components/layout/`, `src/components/sections/`, `src/components/ui/`, `src/data/`, `src/styles/`.
- Main content container capped at `lg:max-w-[70%]` on large screens with responsive padding below.
- Next.js 16 conventions apply (AGENTS.md: read `node_modules/next/dist/docs/` before writing code).

## Brand Commitments

Binding visual constraints supplied by the user: dark charcoal theme (#121212 primary background, #1E1E1E card/surface, #2A2A2A borders, #F3F4F6 primary text, #9CA3AF muted text), a clean, modern, minimalist aesthetic, and a small splash of coordinated color. Type is a single professional, easy-to-read sans (Inter); the site uses no monospace anywhere. Color is a coordinated four-hue accent set (amber, teal, blue, violet), each hue owning one cell or card — never random. "Available for opportunities" is the live status tag. No name, logo, or voice commitments were supplied beyond this.

## Evidence on Hand

No real bio, project details, or external links were provided. `src/data/` files ship with clearly-marked placeholder content the user replaces; the design must not fabricate testimonials, clients, or claims.

## Product Principles

- Earn the click: every section is scannable in seconds and funnels toward contact.
- Breadth with signal: versatility shown through organized, specific skills (with tasteful brand marks where they earn their place) and real-feeling projects — never a wall of logos.
- Content is the product: copy and data live apart from UI so the developer can edit without touching code.
- Restraint as identity: a narrow charcoal palette with a rationed, coordinated accent set and generous space make the craft read as deliberate.
- Keep the door open: a persistent, obvious way to start a conversation.

## Accessibility & Inclusion

No product-specific requirement established beyond the project's baseline obligations (semantic HTML, keyboard reachable links, sufficient contrast given the provided palette).
