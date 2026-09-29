# Even up the Next Steps ministry cards

Right now the cards in each row end at different heights, so the "Learn More" links sit
at different levels and the bottom edges look ragged. Measured on a laptop-width screen:

```text
Row 1:  Events 574px   Life Groups 487px   Kids 514px
Row 2:  Youth 487px    Young Adults 460px  Women 514px  Men 542px
```

## What you'll see

Cards in the same row will be the same height, and every "Learn More" / "SEE WHAT'S
COMING UP THIS WEEK" link will line up on one shared baseline at the bottom of the row.
Longer descriptions simply take more room in the middle of the card; shorter ones get a
little air above their link instead of a short card.

Nothing else changes: same titles, labels, descriptions, photos, colors, fonts, corner
styling, and link destinations. The Events card keeps its own copy and pill button.

On a phone the cards stack one per row, so they stay the size they are today.

## Technical details

All edits are in `src/routes/next-steps.tsx` (the "Find your people" section). No changes
to `src/lib/site-content.ts`, styling tokens, or any other page.

1. Grid container: remove `lg:items-start` from
   `grid gap-[26px] lg:grid-cols-12 lg:items-start` so items stretch to the row height
   (the CSS grid default).

2. Card anchors (`CARD` is shared by all seven, so this is one edit in the `CARD`
   constant plus the two inline `lg:col-span-*` classes): make each card a column flex
   box by adding `flex flex-col` to `CARD`.

3. Card body wrappers (`px-[26px] pt-7 pb-[30px]`, three occurrences: Events, Life
   Groups, ministry map): add `flex flex-1 flex-col` so the body fills the card.

4. Bottom-pin the calls to action. Each CTA span moves into a wrapper that absorbs the
   leftover space, so the span itself keeps its own padding and box:
   - Events: `<span className="mt-5 inline-block rounded-full ...">` becomes
     `<div className="mt-auto pt-5"><span className="inline-block rounded-full ...">…</span></div>`
   - Life Groups: `<span className="mt-4 inline-block font-display ...">` becomes
     `<div className="mt-auto pt-4"><span className="inline-block font-display ...">…</span></div>`
   - Ministries ("Learn More →"): same `mt-auto pt-4` wrapper treatment.

5. Verify with a typecheck plus Playwright screenshots at 1280px and 390px, re-running the
   card-height measurement to confirm every card in a row reports an identical height and
   that no description is clipped.

## Alternative, if the result feels too airy

The Events photo is taller than the others on laptop screens (320px vs 210px), so the
shorter cards get their extra room above the link. If that gap reads as too much space,
the follow-up is to raise the `lg:col-span-3` photos to match on large screens so the
extra room comes from the picture instead. Say the word and I'll do that as a second pass.
