# Simplify browser tab titles to "New Life Philly"

## Current state
Each page sets its own `<title>` in its route file (for example, `src/routes/sermons.tsx` uses "Sermons & Sunday Messages | New Life Philly, Olney PA"). The browser tab shows whatever is in that `<title>` tag.

## SEO context
Descriptive, page-specific titles help search engines understand what each page is about and can improve click-through rates in search results (e.g., "Sermons & Sunday Messages | New Life Philly" tells a searcher exactly what they'll find). However, if the priority is clean, consistent branding in the tab, using just "New Life Philly" everywhere is a valid choice.

## Changes
1. **Update every route's `head()` title** across `src/routes/*.tsx` to set the title to exactly:
   ```
   New Life Philly
   ```
2. **Check `src/routes/__root.tsx`** for any default/fallback `<title>` or title template and update it to "New Life Philly" as well, so no page falls back to a longer title.
3. **Leave meta descriptions unchanged** — they do not affect the tab text and still help search snippets.

## Verification
- Run `bunx tsc --noEmit` and `bun run build:dev`.
- Use Playwright to visit `/`, `/leadership`, `/what-we-believe`, `/sermons`, `/next-steps`, `/plan-your-visit`, and `/give`, confirming `document.title` is "New Life Philly" on each.
