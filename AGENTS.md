# Documentation project instructions

## About this project

- The ClawLink docs site, built with [Fumadocs](https://fumadocs.dev) on Next.js
  (App Router) and shipped as a static export (`output: 'export'`).
- Content is MDX under `content/docs/`, with YAML frontmatter (`title`,
  `description`, optional lucide `icon`).
- Navigation lives in `meta.json` files, one per content directory — they set
  sidebar order, group headings (`"---Get Started---"`), icons, and which
  directories are navigation tabs (`"root": true`).
- Run `npm run dev` to preview, `npm run build` to type-check and produce the
  static site in `out/`.

## Layout rules

- `content/docs/overview/` is the "Overview" tab. Its directory name is stripped
  from URLs by the `slugs` function in `lib/source.ts`, so
  `overview/quickstart.mdx` serves at `/quickstart`. Do not rename this
  directory without updating that function.
- `content/docs/integrations/` and `content/docs/api/` keep their prefixes.
- Existing URLs are load-bearing — they carry over from the previous Mintlify
  site and are linked externally. Don't move pages between tabs casually.

## Components

- Fumadocs components are available in MDX: `Callout`, `Cards`/`Card`, `Tabs`,
  `Accordions`, `Steps`, `TypeTable`, `Files`.
- `components/mintlify.tsx` provides compatibility components matching the
  previous Mintlify syntax (`Note`, `Tip`, `Warning`, `CardGroup`, `Step` with a
  `title` prop, `Accordion`, `AccordionGroup`, `CodeGroup`, `ParamField`,
  `ResponseField`). Migrated pages use these; prefer the Fumadocs equivalents in
  new pages.
- Inside `<CodeGroup>`, label each fenced block with `title="..."` — that string
  becomes the tab label.

## Terminology

- "connection" for a linked third-party account; "integration" for the supported
  app itself.
- "action" for a single tool call; "execution" for one run of an action.

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
