# Add the green squiggle to the Plan a Visit headline

Bring the same hand-drawn olive underline used on the homepage headline ("Real Hope.") to the Plan a Visit hero title.

## What changes

- On the Plan a Visit page, the last phrase of the headline — "made simple." — gets the olive squiggle stroke underneath it, drawn in the same style and color as the homepage.
- Everything else on the page stays exactly as it is: same headline size, spacing, copy, image, and answers below.

## Technical notes

- File: `src/routes/plan-your-visit.tsx`, hero `<h1>`.
- Wrap "made simple." in a `relative inline-block` span and reuse the homepage inline SVG (`viewBox="0 0 300 14"`, `preserveAspectRatio="none"`, `absolute -bottom-[0.34em] -left-[1%] h-[0.17em] w-[104%] overflow-visible`, stroke `var(--olive)` at width 7 with `vectorEffect="non-scaling-stroke"`, `aria-hidden`).
- Verify with a typecheck plus desktop and mobile screenshots so the stroke does not collide with the paragraph below or wrap oddly.
