# Phase 2 — Above-the-fold visitor clarity

Phase 1 (mobile navigation) is approved and live. This phase focuses on the second-highest-impact issue from the audit: a first-time guest should see service time, location, and a clear "I'm new" CTA without scrolling.

## What I'll change

1. **Hero CTA copy**
   - Rename the homepage hero's primary button from "Plan Your Visit →" to **"I'm New — Plan Your Visit →"**.
   - Keep the secondary "Watch a Sermon" button unchanged.

2. **Move service time + location up**
   - On mobile, place **"Sundays at 10am · 425 E Roosevelt Blvd, Olney, Philadelphia"** directly under the headline and above the buttons.
   - On desktop, keep it prominent but allow the two-column layout to keep the address near the headline.

3. **Add a persistent mobile service-time bar**
   - Below the sticky header on viewports under `md`, show a thin one-line bar: "Sundays at 10am · 425 E Roosevelt Blvd" with a tap-to-call phone link.
   - This bar is visible before the user opens the hamburger menu and stays in view while scrolling the hero.

4. **Relocate contact and prayer details**
   - Move the current three-column "You're invited / Contact us / Need prayer" block out of the hero and into the first-Sunday section or just below the hero buttons.
   - This removes visual competition with the service-time line and keeps the hero focused on the visit action.

5. **Header pill wording**
   - Keep the desktop header pill as "Plan a Visit" (short, fits the row).
   - The mobile hamburger menu already says "I'm New — Plan Your Visit →"; leave it.

## Files touched

- `src/routes/index.tsx` — restructure hero, add mobile service bar, relocate contact/prayer block.
- `src/components/SiteHeader.tsx` — minor spacing check so the new mobile bar sits flush under the header.
- `src/lib/site-content.ts` — no changes expected; existing `ADDRESS_1`, `PHONE`, `EMAIL`, `PRAYER_URL` constants are sufficient.

## Success criteria

- On a 390px-wide phone preview, the hero shows: eyebrow → headline → service time/location line → "I'm New — Plan Your Visit" button → "Watch a Sermon" button, all without scrolling.
- The sticky service bar is visible immediately below the header on mobile.
- No console errors or typecheck failures.
- Desktop layout remains visually balanced.

## After this phase

Once you review and approve, Phase 3 will be SEO/findability (JSON-LD, sitemap, titles, dropping "Homepage Draft").
