# J&G Design Group Website

Single-page React (Vite) build of the J&G Design Group renovation website. Fully responsive (mobile, tablet and desktop) and pre-configured for Netlify.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # output in dist/
```

## Deploy to Netlify

Option A (drag and drop): run `npm run build`, then drag the `dist/` folder into Netlify.

Option B (Git deploy): push this folder to a repo and connect it in Netlify. `netlify.toml` is already set up (build command `npm run build`, publish dir `dist`). SPA redirect is handled by `public/_redirects`.

## Contact form

The enquiry form uses Netlify Forms (`data-netlify="true"`, form name `consultation`). After the first deploy, submissions appear under Site, then Forms in the Netlify dashboard. No backend needed.

## Images

All photos in `src/assets/` were extracted from the supplied design mock and upscaled 4x with an AI super-resolution model (EDSR), then lightly sharpened. They look sharp at normal viewing sizes. If you have the original photography, you can still swap it in by keeping the same filenames:

- `hero.png`: hero background (right side of hero)
- `service-kitchen.png`, `service-bathroom.png`, `service-laundry.png`: service cards
- `work-1.png` to `work-8.png`: Recent Renovation Projects grid
- `before.png`, `after.png`: before/after comparison (BEFORE/AFTER badges are baked into these crops)
- `decor-vase.png`, `decor-plant.png`: decorative images in the CTA section

## Structure

- `src/App.jsx`: all sections (Header, Hero, TrustBar, Services, OurWork, BeforeAfter, ContactCTA, Footer)
- `src/styles.css`: full stylesheet with design tokens at the top (`:root`)
- Fonts: Playfair Display (headings) and Inter (body) via Google Fonts in `index.html`

## Interactions included

- Sticky header and mobile hamburger menu
- Draggable before/after comparison handle (mouse and touch)
- Hover states on cards, project images, buttons and links
- Anchor navigation to all sections
