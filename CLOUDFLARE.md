# Cloudflare Pages setup

The site is a static export, so Cloudflare Pages needs no adapter or runtime.

## Current state

`clawlink-docs-preview` is a **Direct Upload** project used to verify builds on
Cloudflare's CDN: <https://clawlink-docs-preview.pages.dev>. It is deployed by
hand with `npx wrangler pages deploy out --project-name clawlink-docs-preview`.

Production should be a separate **Git-connected** project named `clawlink-docs`.
A Pages project is permanently either Direct Upload or Git-connected — one
cannot be converted into the other — which is why the verification project uses
a different name.

## Connect the project

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, and pick `ClawLink-HQ/docs`.
2. Build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | None (or Next.js *Static HTML Export*) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Production branch | `main` |
   | Node version | `22` (set `NODE_VERSION=22` if the default is older) |

3. Deploy. Pull requests get preview URLs automatically.

## Point docs.claw-link.dev at it

Once a production deploy is green, in the Pages project go to
**Custom domains** → **Set up a custom domain** → `docs.claw-link.dev`.

The hostname currently resolves to Mintlify, so this replaces that record.
Cloudflare updates the DNS entry for you when the domain is in the same
account. Verify the new site answers before removing the Mintlify project.

## Notes

- `out/api/search` is the prebuilt search index, served as a static file.
  It has no file extension; that is fine, the client parses it as JSON.
- `llms.txt`, `llms-full.txt`, and the per-page `*/content.md` files are static
  too — no server routes are involved anywhere in this site.
