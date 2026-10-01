# Longer hero fade

## Goal
Make the desktop hero photo's right-edge dissolve start further left so it reads as a gradual fade, not an abrupt edge.

## Change (one file: src/routes/index.tsx, desktop mask only)

Replace the current photo-container mask (fade starts at 78%, about 140px at 1280px) with a longer eased mask that starts at 66% (about 215px at 1280px):

```text
linear-gradient(to right,
  black 0%,
  black 66%,
  rgba(0,0,0,0.92) 72%,
  rgba(0,0,0,0.78) 78%,
  rgba(0,0,0,0.58) 84%,
  rgba(0,0,0,0.36) 90%,
  rgba(0,0,0,0.16) 95%,
  transparent 100%)
```

Applied to both `mask-image` and `-webkit-mask-image`.

## Why this is safe
- The front singer's face, hand and microphone all sit left of ~60% of the photo width, so they stay fully opaque; only the back wall, mic stands and the far-right area soften.
- The navy behind the fade is the same solid navy token as the text side, so the longer dissolve has no seam.
- Text block position, padding, width cap, copy, mobile, and all other sections are untouched.

## Verify
- Screenshot desktop at 1280px and 1024px; confirm the fade reads as a smooth dissolve and the singers are intact.
- Brightness scan across the fade zone at three rows to confirm no hard line (jumps near the photo edge stay small).
- Confirm the build is clean.
