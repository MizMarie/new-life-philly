# New Life Philly — visitor & findability audit, fixed in reviewable phases

Scored against your seven criteria. Each phase is one shippable change you review before I start the next.

## Scorecard

| Criterion | Grade | What I found |
|---|---|---|
| Clear path for a first-timer | B | "Plan Your Visit" is the hero's primary button and sits in the header — good. But it's labeled the same as the header pill, and there's no "I'm New" language anywhere. |
| Service times + location above the fold | B− | "Sundays at 10am / 425 E Roosevelt Blvd" is in the hero, but it sits below the headline, paragraph, and two buttons — on a phone it lands well under the fold. |
| Works on a phone | D | The nav links (About, Sermons, Next Steps, Give) are hidden below 768px with **no hamburger menu** to replace them. On mobile, the only navigation is the logo and the Plan a Visit pill. This is the most serious problem on the site. |
| Fast load | B+ | No videos, no bloated libraries; images total ~700KB. The hero image has no `loading`/`fetchpriority` hints and Google Fonts loads from a third-party origin, both of which cost render time. |
| Real photos of real people | F (fixable only by you) | Every photo on the site is AI-generated placeholder imagery from the design draft. No amount of code fixes this — real Sunday morning photos are needed. |
| Local SEO | C | City/neighborhood copy is strong ("Olney, North Philadelphia", non-denominational, address). Missing: `LocalBusiness`/`Church` structured data with service times, a `sitemap.xml`, a robots sitemap line, and the root title still says **"Homepage Draft"**. |
| Storytelling | C+ | Concrete specifics are there (jeans, upstairs entrance, free parking on D St). But the member story is still the placeholder note, and the vision language leans on generic phrases a stranger can't picture. |

## Phase 1 — Mobile navigation (highest impact)

Add a real mobile menu to `SiteHeader`: a hamburger button below 768px opening a full-width panel with About, Sermons, Next Steps, Plan Your Visit, and Give, plus service time and phone number. Closes on navigation and on Escape; keeps the desktop header untouched.

## Phase 2 — Above-the-fold visitor clarity

Restructure the hero so a phone shows, in order: neighborhood eyebrow, headline, **"Sundays at 10am · 425 E Roosevelt Blvd, Olney"** as a prominent line directly under it, then the two buttons. Rename the hero's primary button to **"I'm New — Plan Your Visit"** and add a persistent one-line service-time bar in the header on mobile. Contact/prayer details move below the buttons instead of competing with them.

## Phase 3 — SEO and findability

- Fix the root title/meta (drop "Homepage Draft"), keep per-page titles.
- Add `Church` + `LocalBusiness` JSON-LD on the homepage: name, address, geo, phone, `openingHoursSpecification` for Sunday 10am, sameAs socials.
- Add `BreadcrumbList` on interior pages.
- Create `public/sitemap.xml` with all five routes and add the `Sitemap:` line to `robots.txt`.
- Tune page titles toward local intent, e.g. "Church in Olney, Philadelphia | New Life Philly".

## Phase 4 — Performance

Set `fetchpriority="high"` and drop lazy-loading on the hero image, lazy-load everything below the fold, add explicit width/height everywhere to stop layout shift, and self-host or preload-optimize Montserrat + Source Sans 3 so text paints without waiting on fonts.googleapis.com.

## Phase 5 — Storytelling and trust

Replace vague vision copy with concrete, checkable specifics: what a Sunday actually sounds like, what the church believes in plain language, who the pastor is, and what happens in Olney during the week. Add a "What we believe" block on `/about` in 4–5 short plain-sentence points. The member story stays marked as a placeholder until you supply a real quote and name.

## Phase 6 — Photo swap (needs you)

I'll build a drop-in list of the seven image slots with the exact shot each one needs (arrival at the door, kids space, Sunday worship wide shot, small group around a table, serve day on the street, pastor portrait, building exterior with the upstairs entrance). Once you send real photos I swap them in and remove the generated ones.

## Technical notes

- Phase 1–2 touch `src/components/SiteHeader.tsx`, `src/routes/index.tsx`, `src/lib/site-content.ts`.
- Phase 3 touches each route's `head()`, plus new `public/sitemap.xml` and `public/robots.txt`; JSON-LD goes in the `scripts` array of `head()`.
- Phase 4 touches the image tags in all five routes and the font links in `src/routes/__root.tsx`.
- No backend, no database, no new dependencies.
