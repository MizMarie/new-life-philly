# Homepage hero: lengthen the fade again

## Goal
Make the photo-to-navy transition feel like a true dissolve, not a blue block. Extend the fade start from 60% to 50% of the photo width and add more intermediate stops so the opacity falloff is gentler per step.

## Change (src/routes/index.tsx, hero photo container only)
Replace the current desktop mask with a longer, finer-stepped one:

```text
linear-gradient(to right,
  black 0%, black 50%,
  rgba(0,0,0,0.95) 56%, rgba(0,0,0,0.86) 62%,
  rgba(0,0,0,0.74) 68%, rgba(0,0,0,0.60) 74%,
  rgba(0,0,0,0.45) 80%, rgba(0,0,0,0.32) 85%,
  rgba(0,0,0,0.20) 90%, rgba(0,0,0,0.10) 94%,
  rgba(0,0,0,0.04) 97%, transparent 100%)
```

Applied to both `mask-image` and `-webkit-mask-image` on the photo container (desktop only, as now). Fade zone becomes ~50% of the photo width (about 320px at 1280), versus ~40% now.

## Safety checks
- Singer's face, hand and mic sit left of ~45% of the photo width; verify they stay fully clear at 1280 and 1024.
- No change to the text block, mobile view, copy, or any other section.
- Verify with screenshots at 1280 and 1024 plus the averaged-brightness scan across the fade zone; largest step should stay in single digits.
- Build must stay clean.
