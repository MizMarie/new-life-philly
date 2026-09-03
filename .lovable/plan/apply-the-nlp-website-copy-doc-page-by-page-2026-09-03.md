# Apply the NLP website copy doc, page by page

The uploaded doc (`lovable_NLP_Doc_for_Website_2025.docx`) is fully readable. I'll apply it in reviewable phases — you approve each page before I move to the next.

## Phase 1 — Homepage copy updates

- **Problem section:** change H2 to "Our lives are full but are we fulfilled?" with supporting line "You weren't made to just survive." (keeps existing contemplative image and hopeful body copy).
- **Three steps:** retitle cards to **Real People Gather** ("Sundays at 10am. You're welcome here." → /plan-your-visit), **Real Love Connects** ("Find your people. There's a place for every age and every stage." → Church Center home), **Real Hope Acts** ("Serve your neighbors. Live your purpose." → Church Center calendar, gallery view).
- Keep hero headline as "Real People. Real Love. Real Hope." (per your answer) and leave the Guide/Plan-a-visit section as-is (already matches the doc).
- Footer links already match the doc; no changes.

## Phase 2 — About page

- **Our Leadership:** intro copy + staff cards for Tim Bathurst, Seth Cross, Greg Snow, Allison Wanaselija, Sue Carter, each with an expandable "More…" showing their four Q&A answers.
- **Our Shepherds (Elders)** and **Our Servants (Deacons):** name rosters in clean lists. Leave image placeholders for each our shepherds and our servants as I will provide them later
- **What We Believe:** page intro + the 5 belief sections (Word of God, Nature of God, Salvation, Humanity's Purpose, Unity in Essentials) as an accordion.
- Reuses existing navy/olive styling, type, and scroll-reveal.

## Phase 3 — Plan a Visit page

- Add the full FAQ as accordions: location, parking, transit (buses 57/41/51/82), service time, arrival, what happens during the service (worship, prayer, Lord's Prayer, message, fellowship), kids programs, dress.
- Note: the doc says "Olney section of North Philadelphia" — I'll keep your earlier edit ("Olney section of Philadelphia") unless you say otherwise.

## Phase 4 — Sermons page

- New intro copy ("The Bible has always had something to say about real life…").
- **Featured Sermons:** embedded YouTube playlist player.
- **Audio Podcast:** copy block + embedded Buzzsprout large player using the provided script.

## Phase 5 — Next Steps page

- No Church Center iframe (per your answer). Instead: styled cards linking to the three Next Steps destinations (Find Community, Serve, Practice the Way) with the doc's copy.

## Phase 6 — Give page

- New `/give` route with the doc's copy, an online-giving CTA to Church Center, and the mail-in address.
- Nav "Give" changes from external link to `/give`. Footer Give link points to `/give` too. Add to sitemap.

## Technical notes

- New route: `src/routes/give.tsx` (with its own `head()` metadata, canonical, breadcrumb JSON-LD, sitemap entry).
- Accordions: lightweight accessible `<details>`-based or React toggle components matching the existing design — no new dependencies.
- Embeds: YouTube `youtube-nocookie` iframe (privacy-enhanced) and the Buzzsprout script embed, both lazy so they don't hurt page speed.
- Staff Q&A "More…" toggles follow the same accordion pattern.
- Each phase verified with typecheck + desktop/mobile screenshots before showing you.