# Reorder navigation: Meet Our Team first

Swap the order of the first two navigation links so "Meet Our Team" appears before "What We Believe" in both the desktop and mobile nav menus.

## Change

In `src/lib/site-content.ts`, update `NAV_LINKS`:

```text
Current order:
- What We Believe  → /what-we-believe
- Meet Our Team    → /leadership
- Sermons          → /sermons
- Next Steps       → /next-steps

New order:
- Meet Our Team    → /leadership
- What We Believe  → /what-we-believe
- Sermons          → /sermons
- Next Steps       → /next-steps
```

The header (`SiteHeader.tsx`) and footer render from `NAV_LINKS`, so both menus update automatically. No other files need changes.

## Verification

- `bunx tsc --noEmit` passes.
- Desktop and mobile screenshots show "Meet Our Team" before "What We Believe" in the nav.
