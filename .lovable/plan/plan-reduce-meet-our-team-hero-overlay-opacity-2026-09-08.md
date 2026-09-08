# Plan: Reduce Meet Our Team hero overlay opacity

## Goal
Make the background photo more visible on the `/leadership` (Meet Our Team) hero by reducing the opacity of the teal-blue gradient overlay.

## Current state
The hero overlay in `src/routes/leadership.tsx` uses:

```text
bg-gradient-to-t from-navy/100 via-navy/90 to-navy/80
```

This dark navy/teal gradient is nearly solid at the bottom and makes the photo hard to see.

## Change to make
Update the gradient opacity stops in `src/routes/leadership.tsx` to a lighter set of values, for example:

```text
bg-gradient-to-t from-navy/80 via-navy/60 to-navy/40
```

This keeps text readable while revealing much more of the underlying image. The exact final values can be tuned during implementation if the first attempt still feels too heavy or too light.

## Verification
- Run `bunx tsc --noEmit` to confirm no type errors.
- Run `bun run build:dev` to confirm the build passes.
- Capture Playwright screenshots at desktop and mobile widths to confirm the photo is clearly visible and the white headline still has enough contrast.

## Scope
Only `src/routes/leadership.tsx` hero overlay line is affected. No other pages or components change.
