# Split navigation into real pages

Right now About, Sermons, Next Steps and Plan a Visit are anchor links that scroll around the homepage. They become four standalone pages with their own URLs, titles and share previews.

## New pages

- `/about` — who New Life Philly is, the Olney story, vision statement, and the member story block.
- `/sermons` — sermon library intro plus links out to YouTube / Church Center sermon media.
- `/next-steps` — the three-step plan (Gather, Connect, Act) and the Find Community / Serve / Practice the Way cards.
- `/plan-your-visit` — what your first Sunday looks like: time, parking, dress, kids, upstairs entrance, coffee, address and map/contact details.

Each page reuses the existing navy/olive styling, Montserrat + Source Sans 3 type, generated imagery and scroll-reveal behavior, so it feels like the same site.

## Homepage changes

- The homepage keeps its hero and section highlights but each section now ends with a link to its full page instead of being the only place that content lives.
- Header nav links point to the new pages; "Give" stays an external giving link, and the "Plan a Visit" button links to `/plan-your-visit`.
- Footer links updated the same way.

## Shared layout

Header and footer move into shared components so all five pages have identical navigation, with the active page highlighted.

## Technical notes

- New route files: `src/routes/about.tsx`, `src/routes/sermons.tsx`, `src/routes/next-steps.tsx`, `src/routes/plan-your-visit.tsx`, each with its own `head()` (unique title, description, og:title, og:description).
- Extract `SiteHeader` / `SiteFooter` into `src/components/` and shared content arrays (nav, first-Sunday, steps, next links, socials) into a small `src/lib/site-content.ts`.
- Internal navigation uses `<Link to="...">` from `@tanstack/react-router`; external links stay plain anchors.
- No backend or data changes.
