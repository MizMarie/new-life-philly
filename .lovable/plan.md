# Fix the logo "flash screen" on mobile

## What I found

Checking the live site at new-life-philly.lovable.app on a phone-sized browser, the published version is still loading its fonts from Google's servers, and that font file is "render blocking" — the phone refuses to draw any text until it arrives. On a cell connection that can easily take a couple of seconds.

At the same time, the page tells the phone to fetch the church logo first, ahead of everything else. So the logo arrives quickly and gets drawn on an otherwise empty white page, and the text and photos only appear once the font finally lands. That is the "logo on a blank white screen for 2-3 seconds."

Two things line up with this:
- The self-hosted font fix we already made has not been published yet, so the live site still has the slow Google font request.
- The logo is given priority loading, which makes it the one thing visible during the wait.

This is a strong match, not yet 100% proven, so step 1 is confirmation.

## Plan

1. Publish the current version so the already-fixed self-hosted fonts go live, then re-check the site on a throttled mobile connection and see whether the flash is gone.
2. If any flash remains: stop giving the logo priority loading so it no longer paints alone ahead of the page, and make the header area render its background and text immediately.
3. Re-test on a slow mobile profile with a frame-by-frame capture of the first 5 seconds, and confirm the first thing that appears is the real page, not a lone logo.
4. Ask you to reload the live site on your phone (fully closing the tab first) to confirm it matches what I see.

## Technical notes

- Live HTML still contains `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...">` plus `<link rel="preload" as="image" href=".../nlp-logo.jpg">`; the deployed bundle predates the `@fontsource` change in `src/styles.css`.
- Step 2, if needed: drop the logo image preload, keep the hero preload, and verify no other render-blocking third-party request remains.
- No copy, layout, or styling changes.
