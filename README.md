# ClawLink Documentation

The docs site for [ClawLink](https://claw-link.dev), built with
[Fumadocs](https://fumadocs.dev) on Next.js and exported as a static site.

## Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. Content changes hot-reload.

## Build

```bash
npm run build   # static export into ./out
npm start       # serve ./out locally
```

`npm run build` type-checks the whole project and fails on broken MDX, so it
doubles as the CI check.

## Project layout

```
content/docs/          MDX content — one directory per navigation tab
  overview/            "Overview" tab. Stripped from URLs: overview/faq.mdx → /faq
  integrations/        "Integrations" tab → /integrations/*
  api/                 "API Reference" tab → /api/*
  */meta.json          sidebar order, group headings, icons, tab config
app/                   Next.js App Router
  (docs)/              docs layout + catch-all page
  llms.txt/            llms.txt, llms-full.txt, and per-page raw markdown routes
  og/                  generated Open Graph images
  api/search/          build-time search index (Orama, static mode)
components/
  mintlify.tsx         compatibility components for the previous Mintlify syntax
  mdx.tsx              MDX component map
lib/source.ts          content loader, URL generation, icon resolution
public/images/         images referenced from MDX
```

## Writing pages

Each page is an MDX file with `title` and `description` frontmatter, plus an
optional lucide `icon` shown in the sidebar:

```mdx
---
title: "Quick Start"
description: "Install ClawLink and connect your first app"
icon: "Rocket"
---
```

Add the page to the `pages` array in the directory's `meta.json` to place it in
the sidebar. Entries wrapped in dashes (`"---Get Started---"`) render as group
headings.

Both Fumadocs components (`Callout`, `Cards`, `Tabs`, `Accordions`, ...) and the
Mintlify components the docs were originally written with (`Note`, `Warning`,
`Tip`, `Card`, `CardGroup`, `Steps`, `Step`, `Accordion`, `AccordionGroup`,
`CodeGroup`, `ParamField`, `ResponseField`) work in MDX — see
`components/mintlify.tsx`. New pages should prefer the Fumadocs components.

## Deployment

`npm run build` writes a fully static site to `out/`, deployable to any static
host. The GitHub Actions workflow in `.github/workflows/` builds every pull
request and publishes `main` to GitHub Pages.
