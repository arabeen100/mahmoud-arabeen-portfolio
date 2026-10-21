# Mahmoud Samy Arabeen · Portfolio

Personal portfolio of a Frontend Engineer working with React.js, Next.js and TypeScript. It showcases selected projects and professional experience, with a blueprint-inspired design in dark and light themes.

**Live:** https://mahmoud-arabeen.vercel.app 

![Portfolio preview](./public/og-image.png)

## Features

- Dark and light themes, saved and restored before first paint (no flash)
- Blueprint grid background with a spotlight that follows the pointer
- Project case-study pages with overview, details, features and results
- Scroll-reveal animations, with `prefers-reduced-motion` respected
- Responsive layout, from phones to wide desktops
- Custom favicon and Open Graph image for clean link previews

## Tech stack

React · Vite · React Router (`react-router-dom`) · plain CSS with custom properties · deployed on Vercel

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## Structure

- `src/pages/` — `Home`, `ProjectDetail` (`/projects/:slug`) and `NotFound`.
- `src/components/` — one component (+ CSS file) per section: `Header`, `Hero`, `TechStack`, `Projects`, `Experience`, `Contact`. `icons/` holds the inline SVG icons (they inherit `currentColor`).
- `src/mocks/` — content data for everything shown on the page (`profile`, `skills`, `projects`, `experience`, `socials`). Pages import it from `src/mocks/index.js`, the single place to edit content or swap in an API later.
- `src/assets/` — images and logos.
- `src/index.css` — global styles and theme variables.

## Editing the content

Edit the files in `src/mocks/`: project `links`, social `url`s, the contact `email` and `cvUrl` (the "Download CV" link).

## Theming

Dark is the default and `:root[data-theme='light']` overrides it. To restyle the site, change the variables in `src/index.css` (`--gradient-warm`, `--gradient-cool`, `--gradient-accent`, `--bp-*`) instead of hunting for hex values in components.

## Deployment

The site is a single-page app, so the host must serve `index.html` for unknown paths (otherwise refreshing `/projects/:slug` returns a 404). On Vercel, add a `vercel.json` at the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Contact

- GitHub: [@arabeen100](https://github.com/arabeen100)
- LinkedIn: https://www.linkedin.com/in/mahmoudarabeen/
- Email: mahmoudarabeen@gmail.com
