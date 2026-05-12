# Rohit Gattani

Free/open-source personal blog starter built with Astro + Decap CMS.

## Sections

- Books: `src/content/posts/books`
- Musings: `src/content/posts/musings`
- Memes: `src/content/posts/memes`
- Etc.: `src/content/posts/etc`

## Local setup

```bash
npm install
npm run dev
```

Then open the URL Astro prints, usually `http://localhost:4321`.

## Build

```bash
npm run build
```

## CMS

Decap CMS lives at `/admin`.

Before deploying, edit `public/admin/config.yml` and replace:

```yml
repo: rohgat/gattu-website
```

with your real GitHub repo, for example:

```yml
repo: rohgat/gattu-website
```

The CMS writes Markdown files into the section folders above.

## Deploy target

Recommended: Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: Astro

## Notes

Decap CMS is open source. GitHub login for Decap requires a GitHub OAuth flow; on Cloudflare Pages we can add a small open-source OAuth/auth proxy in the next setup step.
