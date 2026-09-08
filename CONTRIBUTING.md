# Contributing

## Setup

```bash
npm install
npm run dev
```

## Making changes

1. Edit or add MDX files under `content/docs/`.
2. Register new pages in the relevant `meta.json` so they appear in the sidebar.
3. Run `npm run build` before opening a pull request — it type-checks the site
   and fails on broken MDX or invalid links between components.

## Conventions

- Frontmatter needs `title` and `description`; add an `icon` (any
  [lucide](https://lucide.dev) icon name) for pages listed in the sidebar.
- Use active voice and second person ("you").
- One idea per sentence; sentence case for headings.
- Bold for UI elements (Click **Settings**), code formatting for file names,
  commands, and paths.
- Prefer the Fumadocs components (`Callout`, `Cards`, `Tabs`, `Steps`) in new
  pages. The Mintlify-era components still render, but they exist for the
  migrated content.

## URLs

Page URLs come from the file path, except that the `content/docs/overview/`
prefix is stripped — `content/docs/overview/faq.mdx` serves at `/faq`. Keep
existing paths stable; they are linked from the app and indexed by search
engines.
