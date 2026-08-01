# Portfolio

A personal portfolio for **Jerome Mondol** — a professional landing page (`/`) and a deliberately unprofessional second page (`/lab`).

Built with [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Pages

- **`/`** — the professional page: hero, skills grid, experience timeline, featured projects, and a contact form.
- **`/lab`** — the counterpoint: build sheets for tinkering projects and a draggable photo dump.

## Getting started

Requires Node.js 20.9.0 or later.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:3000)
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start the development server         |
| `npm run build`| Create a production build            |
| `npm run start`| Serve the production build           |
| `npm run lint` | Lint the codebase                    |

## Project structure

```
src/
  app/             # routes: page.tsx (/), lab/page.tsx (/lab)
  components/
    layout/        # page shell: header, footer, container
    sections/      # one file per page section
    ui/            # reusable primitives (Reveal, ImageDump, ...)
  data/            # all content lives here — edit these files
  lib/             # utilities (cn)
  styles/          # global CSS + design tokens
public/            # static assets
```

## Customizing content

All page content is data-driven. Edit the files in `src/data/`:

| File                  | Content                                  |
| --------------------- | ---------------------------------------- |
| `profile.js`          | Name, role, bio, email, social links     |
| `skills.js`           | Skill groups shown in the bento grid     |
| `experience.js`       | Work history timeline                    |
| `projects.js`         | Featured portfolio projects              |
| `lab.js`              | Photos for the `/lab` photo dump         |
| `lab-projects.js`     | Build-sheet projects for `/lab`          |

### Images

Local images go in `public/` and are referenced by path (e.g. `/lab/my-photo.jpg`). Remote images are allowed from any `https` host (see `next.config.ts`); set the `image` field in `lab.js` / `lab-projects.js` to a URL.

## Design

Charcoal dossier theme, a single sans-serif typeface, and a coordinated four-hue accent set. See `DESIGN.md` for the full design language.
