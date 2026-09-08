# Plan: Refine the Next Steps hero

## Goal
Make the Next Steps page hero feel less visually dominant by reducing its height, scaling down the headline, lowering the brushstroke opacity, and slightly shrinking the subheadline.

## Current state
The hero in `src/routes/next-steps.tsx` currently:
- Uses large vertical padding: `pt-20 pb-24 md:pt-[120px] md:pb-[140px]`
- Has an oversized headline: `text-[clamp(46px,9vw,120px)]`
- Shows two large olive `BrushstrokeAccent` elements at `opacity={0.3}` and `opacity={0.12}`
- Uses a 19–20px subheadline paragraph

## Changes to make
1. **Headline size** — Reduce the H1 to match the other page heroes, capping at 64px. Use `text-[clamp(36px,5vw,64px)]` (same pattern as Meet Our Team / What We Believe).
2. **Hero height** — Reduce vertical padding and add a max-height cap so the hero never overwhelms the content below. Target roughly `py-16 md:py-20` and a max height around `min-h-[320px] max-h-[520px]` with `items-center`, similar to the other hero sections.
3. **Brushstroke accents** — Keep both brushstrokes but reduce their opacity so they recede. Lower the large one from `0.3` to `0.15` and the smaller one from `0.12` to `0.08` (or a similarly subtle pair).
4. **Subheadline** — Scale the body paragraph down slightly, from `text-[19px] md:text-[20px]` to `text-[17px] md:text-[18px]`.

## Verification
- Run `bunx tsc --noEmit` to confirm no type errors.
- Run `bun run build:dev` to confirm the build passes.
- Capture Playwright screenshots at desktop and mobile widths to confirm the hero feels balanced, the headline is readable, and the brushstrokes no longer dominate.

## Scope
Only `src/routes/next-steps.tsx` hero section is affected. No other pages or components change.
