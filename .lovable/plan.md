# Tighten the Sermons page hero

## Goal
Reduce the Sermons page hero so its overall height and visual weight match the Meet Our Team and What We Believe heroes.

## Changes
1. **Constrain hero height** in `src/routes/sermons.tsx`
   - Replace the padding-driven `py-24 md:py-[140px]` container with the same constrained pattern used on the other two pages:
     ```
     flex h-[55vh] min-h-[320px] max-h-[580px] items-center justify-center
     ```
   - Keep the navy background and centered text layout.

2. **Reduce headline size**
   - Change from `text-[clamp(40px,5.4vw,72px)]` to `text-[clamp(36px,5vw,64px)]` to match the other page heroes.

3. **Tighten internal spacing**
   - Trim paragraph top margin and CTA button group top margin so the eyebrow/headline/subheadline/buttons fit comfortably inside the shorter hero without feeling cramped.

4. **Calm the decorative brushstroke**
   - Lower the `BrushstrokeAccent` opacity from `0.16` to `0.12` so it does not compete with the content in the shorter space.

## Verification
- Run `bunx tsc --noEmit` and `bun run build:dev`.
- Capture Playwright screenshots of `/sermons` at desktop (1280px) and mobile (390px) to confirm the hero height matches the other pages and the content remains readable.
