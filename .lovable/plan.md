# Plan: Remove duplicate "Next Links" section from homepage

## Current state
The homepage (`src/routes/index.tsx`) renders two back-to-back three-column CTAs:
1. **The Plan — Three simple steps** (uses `STEPS`): Real People Gather / Real Love Connects / Real Hope Acts.
2. **Inside the Story/About section** (uses `NEXT_LINKS`): Find Your Community / Live Out Your Mission / Practice the Way.

The screenshot shows the second block. It repeats the same three-pathway structure immediately after the steps section, so it should be removed.

`NEXT_LINKS` is still used on `/next-steps.tsx`, so it stays in `src/lib/site-content.ts`.

## Changes
1. In `src/routes/index.tsx`, delete the `NEXT_LINKS` grid inside the Story/About section (the `mt-[88px] grid ...` block).
2. Remove the `NEXT_LINKS` import from `src/routes/index.tsx`.
3. Run typecheck and capture homepage screenshots (desktop + mobile) to confirm the duplicate is gone and no layout regressions appear.

## Out of scope
- No changes to `/next-steps.tsx`.
- No changes to `src/lib/site-content.ts`.
- No SEO, performance, or copy edits.
