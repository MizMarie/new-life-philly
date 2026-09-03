# Keep visitors on the site: a native Connect hub + ministry pages

Today several buttons ("Find a Group →", "Live Out Your Mission", the footer Church Center link) drop people on the Church Center app home page, which is a different design and a dead end for a first-time visitor. This plan rebuilds that experience on newlifephilly.com, so Church Center is only used for the final signup, form, or gift.

## New pages

### `/connect` — the hub
Your navy/olive version of the "Stay Connected" grid:

- **This week** row: Sundays at 10am (links to Plan Your Visit), Service Online, 7am Zoom Prayer (password: Pray).
- **Find your people** tiles: Life Groups, Events, Kids, Youth, Women, Men, Young Adults — each a card linking to its section on the site.
- **Additional Resources** row of pill links, matching your Church Center page: Serving Interest, Building Requests, Counseling Help, Resources Help, Baptism/Dedication, Faith and Politics, Prayer Ministry, Church Directory. These go directly to the specific Church Center form (new tab), never the app home page.

### `/groups`
What a Life Group actually is, when and where they meet, who they're for, and what your first night looks like. Ends with one button to the open-signup Life Groups list on Church Center.

### `/events`
The rhythms of the year and week in plain language, with one button to your Church Center calendar in gallery view.

### `/ministries`
Kids, Youth, Women, Men, and Young Adults — each with a short draft description (I'll write these from your copy doc and the ministry names on your Church Center page) and existing site imagery as placeholders until you send real photos. Each ministry has an anchor so `/connect` tiles can link straight to it.

## Changes to existing pages

- Homepage step 2 "Real Love Connects" button becomes **"Find Your People →"** pointing to `/connect` (internal) instead of the Church Center home page.
- `/next-steps`: "Find Your Community" → `/groups`, "Live Out Your Mission" → `/connect` serving section, "Practice the Way" stays `/sermons`.
- `/sermons`: the Church Center link becomes a link to past sermons media rather than the app home page.
- Footer "Church Center" link becomes **"Connect"** → `/connect`; Give and prayer links stay as direct deep links.
- Header nav gets **Connect** between Sermons and Next Steps.
- Every remaining outbound Church Center link opens in a new tab (`target="_blank" rel="noopener"`), so your site stays open behind it.

## Placeholders you'll replace

Ministry photos and the exact Church Center form URLs for the Additional Resources pills. I'll wire the ones I can derive and mark any I can't with a clearly labeled TODO constant in one place so you only have to paste URLs once.

## Technical notes

- New routes: `src/routes/connect.tsx`, `src/routes/groups.tsx`, `src/routes/events.tsx`, `src/routes/ministries.tsx`, each with its own `head()` (unique title/description/og, self-referencing canonical, BreadcrumbList JSON-LD) and added to `src/routes/sitemap[.]xml.ts`.
- All Church Center URLs consolidated in `src/lib/site-content.ts` as named deep-link constants (groups, calendar, sermons media, giving, prayer, serving interest, counseling, directory, baptism, etc.) plus a `MINISTRIES` array driving both `/connect` tiles and `/ministries` sections.
- Reuses existing `SiteHeader`/`SiteFooter`, `useReveal`, navy/olive tokens, and card styling from the "first Sunday" section — no new dependencies.
- Verified per page with typecheck plus desktop and mobile screenshots.

I'll build this page by page — `/connect` first for your review, then `/groups`, `/events`, `/ministries`, then the link rewiring.
