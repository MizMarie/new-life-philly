# Plan: Reduce What We Believe hero overlay opacity

## Goal
Make the background photo more visible on the `/what-we-believe` (What We Believe) hero by reducing the opacity of the teal-blue gradient overlay, matching the treatment just applied to Meet Our Team.

## Current state
The hero overlay in `src/routes/what-we-believe.tsx` uses:

```text
bg-gradient-to-t from-navy/100 via-navy/90 to-navy/80
```

This dark navy/teal gradient is nearly solid at the bottom and makes the worship-team photo hard to see.

## Change to make
Update the gradient opacity stops in `src/routes/what-we-believe.tsx` to the same lighter values used on the leadership page:

```text
bg-gradient-to-t from-navy/80 via-navy/60 to-navy/40
```

This keeps the white headline readable while revealing much more of the underlying worship image. Values can be tuned during implementation if needed.

## Verification
- Run `bunx tsc --noEmit` to confirm no type errors.
- Run `bun run build:dev` to confirm the build passes.
- Capture Playwright screenshots at desktop and mobile widths to confirm the photo is clearly visible and the white headline still has enough contrast.

## Scope
Only `src/routes/what-we-believe.tsx` hero overlay line is affected. No other pages or components change.
