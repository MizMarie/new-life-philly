# Plan: Tighten Next Steps hero height on laptop only

## Goal
Reduce the overall height of the Next Steps hero on laptop/desktop breakpoints so it no longer feels taller than the Meet Our Team and What We Believe heroes, while keeping the mobile hero unchanged.

## Current state
The Next Steps hero in `src/routes/next-steps.tsx` currently uses:
- `flex min-h-[320px] max-h-[520px] items-center`
- `py-16 md:py-20`
- no explicit height value (it sizes by content + max-height)

By contrast, the Meet Our Team and What We Believe heroes use:
- `flex h-[55vh] min-h-[320px] max-h-[580px] items-center justify-center`

That viewport-height approach lets those heroes shrink on shorter laptop screens, while the Next Steps hero is currently sitting closer to its max-height cap.

## Changes to make
1. **Add a laptop-only viewport height** — Add `md:h-[55vh]` so the hero can scale down on laptop screens like the other pages, but leave mobile on its content/max-height behavior.
2. **Lower the laptop max-height cap** — Change `md:max-h-[520px]` to `md:max-h-[480px]`.
3. **Reduce laptop vertical padding** — Change `md:py-20` to `md:py-16` so the content has less vertical breathing room on laptop.

Mobile values (`py-16`, `max-h-[520px]`) stay exactly as they are.

## Verification
- Run `bunx tsc --noEmit` to confirm no type errors.
- Run `bun run build:dev` to confirm the build passes.
- Capture Playwright screenshots at desktop (laptop) and mobile widths to confirm the Next Steps hero is now shorter than before on laptop and unchanged on mobile.

## Scope
Only the hero section in `src/routes/next-steps.tsx` is affected. No other pages, components, or content change.
