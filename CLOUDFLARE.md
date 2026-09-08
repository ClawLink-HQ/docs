# Cloudflare Pages setup

The site is a static export, so Cloudflare Pages needs no adapter or runtime.

## Current state

Production is the Cloudflare Pages project **`clawlink-docs-preview`**, serving
<https://docs.claw-link.dev>. The name still says "preview" because a Pages
project cannot be renamed, and `clawlink-docs` is being kept free for the
Git-connected project described below.

It is a **Direct Upload** project, so deploys are manual:

```bash
npm run build
npx wrangler pages deploy out --project-name clawlink-docs-preview --branch main
```

`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` must be set (see
`.env.local`, which is git-ignored).

### Moving to Git-connected deploys

Direct Upload and Git-connected are different project types and one cannot be
converted into the other, so switching means creating a new project:

1. Create a Git-connected project named `clawlink-docs` (steps below).
2. Confirm its first production deploy is green.
3. Move the `docs.claw-link.dev` custom domain from `clawlink-docs-preview` to it.
4. Delete `clawlink-docs-preview`.

After that, pushing to `main` deploys automatically and pull requests get
preview URLs.

### Rolling back to Mintlify

The Mintlify project was not deleted. Point `docs.claw-link.dev` back at
`cname.mintlify-dns.com` to revert; the exact record is recorded in
`/root/docs-dns-rollback.txt` on the machine that performed the cutover.

## Creating the Git-connected project

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

## Custom domain

`docs.claw-link.dev` is attached to `clawlink-docs-preview`. The zone lives in
the same Cloudflare account, so the DNS record is managed there — it is a
proxied `CNAME` to `clawlink-docs-preview.pages.dev`.

## Notes

- `out/api/search` is the prebuilt search index, served as a static file.
  It has no file extension; that is fine, the client parses it as JSON.
- `llms.txt`, `llms-full.txt`, and the per-page `*/content.md` files are static
  too — no server routes are involved anywhere in this site.
