# Mission / Footer Separation

## Goal
Visually separate the Mission section from the dark footer so the boundary is clear and the Mission section feels elevated.

## Direction chosen
**Luminous layered depth** — a rounded, layered Mission section with subtle radial glow, grain texture, and a glowing bottom divider, adapted to the New Life Philly navy/olive palette.

## What will change
Only the Mission section in `src/routes/index.tsx` and any supporting CSS tokens/utility classes needed in `src/styles.css`.

## Implementation details

1. Wrap the Mission section in a relative container with rounded top corners (`rounded-t-[26px]` or similar) so it reads as a distinct card/surface above the footer.
2. Layer the background:
   - Base: existing `bg-navy`.
   - Subtle radial gradient using olive/olive-light tones (`--olive`, `--olive-light`) at low opacity to create luminous depth without clashing with the brand.
   - Optional fine noise/grain overlay at very low opacity for texture.
3. Add a bottom divider: a horizontal gradient line (`from-transparent via-olive/40 to-transparent`) with a soft shadow/glow to mark the transition to the footer.
4. Keep all existing Mission copy, typography, and `data-reveal` animation unchanged.
5. Ensure the section remains full-width and responsive; adjust padding/margins so the rounded top edge is visible on desktop and mobile.
6. Verify color contrast passes and that the footer below is unaffected.

## Out of scope
- No changes to footer content, layout, or background.
- No changes to other homepage sections.
- No new dependencies.

## Verification
- TypeScript typecheck passes.
- Desktop and mobile screenshots show the Mission section clearly separated from the footer.
