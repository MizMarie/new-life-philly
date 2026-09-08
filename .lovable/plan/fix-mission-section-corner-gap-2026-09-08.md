# Fix Mission section corner gap

## Goal
Keep the Mission section’s rounded top edge while filling the small corner gaps with the sage color from the section above, so the transition from the First Sunday section to Mission looks seamless.

## Current state
In `src/routes/index.tsx`, the Mission `<section>` uses `rounded-t-[28px] bg-navy`. Because the section sits directly on the white page background, the rounded top corners cut away the navy at the top-left and top-right, exposing white slivers instead of the sage section above it.

## What will change
Only the Mission section wrapper in `src/routes/index.tsx`.

## Implementation details

1. Split the Mission section into two layers:
   - **Outer `<section>`**: `bg-sage` (no top border-radius), so the exposed corner slivers match the First Sunday section.
   - **Inner `<div>`**: carries the existing `rounded-t-[28px] bg-navy`, plus the radial glow, grain texture, bottom divider, and centered mission copy.
2. Move the luminous background layers, bottom divider, and `data-reveal` content inside the inner navy div.
3. Keep all Mission copy, typography, and animation unchanged.
4. Leave the footer and all other homepage sections untouched.

## Out of scope
- No changes to footer content, layout, or background.
- No changes to other homepage sections.
- No new dependencies.

## Verification
- TypeScript typecheck passes.
- Dev build passes.
- Desktop and mobile screenshots show the Mission section’s top corners filled with sage and no white gap.
