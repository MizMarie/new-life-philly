# Center the footer logo

## Goal
Center the church logo at the top of the far-left footer column. The logo is currently left-aligned.

## Plan
1. Add `mx-auto` to the logo `<img>` className in `src/components/SiteFooter.tsx` so it sits centered without changing the text or social-icon alignment below it.
2. Verify with desktop and mobile Playwright screenshots.

## Scope
- Only `src/components/SiteFooter.tsx`.
- No content, routes, SEO, or other components touched.
