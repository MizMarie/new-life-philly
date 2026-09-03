# Center footer church name and update location copy

## Goal
1. Center the "New Life Philly" text directly below the centered logo in the far-left footer column.
2. Remove the word "North" from the footer description so it reads "Olney section of Philadelphia".

## Plan
1. Add `text-center` to the "New Life Philly" `<p>` in `src/components/SiteFooter.tsx`.
2. Edit the description `<p>` to remove "North".
3. Verify with desktop and mobile Playwright screenshots.

## Scope
- Only `src/components/SiteFooter.tsx`.
- No other components, content, or styling changed.
