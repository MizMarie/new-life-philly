# Plan: Center and enlarge the bottom-row headings in “Your first Sunday, answered.”

## What this plan changes
Only the three bottom columns in the “Your first Sunday, answered.” section on the homepage (`src/routes/index.tsx`):
1. **Center-align** each column’s eyebrow heading, body text, and inline links within their grid cell.
2. **Increase the eyebrow heading size** for “You’re invited,” “Contact us,” and “Need prayer?” so they hold the same visual weight as the card titles above them.

## What this plan does NOT change
- The six white cards above the bottom row (titles already enlarged in a prior edit).
- Section background, colors, fonts, spacing, or any other homepage sections.
- Footer, header, or other routes.

## Verification
- Run typecheck after the edit.
- Capture desktop and mobile screenshots of the “Your first Sunday, answered.” section to confirm the three bottom columns are centered and the headings are visually stronger.
- Check browser console for zero errors.
