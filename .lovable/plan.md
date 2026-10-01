# Hero photo position + smoother gradient

Two small fixes to the homepage hero (src/routes/index.tsx, lines 60-73). Nothing else changes.

## 1. Shift the photo crop so the lead singer is not lost at the edge

The photo band fills the left 44% of the hero and the image is cropped with `object-[center_28%]`, which centers the crop window. The lead singer sits left of center in the photo, but the current crop pushes him toward the right side of the visible band, right where the navy gradient thickens, so he visually disappears.

- Change the image's object-position from `center 28%` to a left-shifted value (about `38% 28%`), which moves the visible crop window left so the singer sits comfortably inside the clear part of the photo, away from the gradient.
- Verify at desktop widths that both singers' faces stay fully in frame and uncropped, and confirm mobile still looks right.

## 2. Make the gradient a true fade instead of a blue box

The desktop gradient currently jumps from 80% navy at the 40% mark to solid navy at 44%, which reads as a hard-edged blue box with a tint over the photo.

- Re-space the desktop gradient stops so the navy builds gradually: light tint over the photo, then a smooth ramp through the middle, reaching full solid navy only where the text sits. No stop jumps more than ~35 percentage points between neighbors, so there is no visible seam.
- Keep the existing navy color token, keep the light ~16% tint over the faces, and keep full-strength navy behind the headline, info line, subhead, and buttons.
- The mobile gradient stays exactly as it is.

## Verification

- Screenshots at desktop widths (1024, 1280, 1440) and phone width: singer clear of the gradient zone, faces in frame, no visible hard edge in the fade, white text still high-contrast.
- Confirm the build is clean and no copy changed.

## Technical details

- File touched: src/routes/index.tsx only (hero `object-position` class and the `md:` gradient class list).
- No copy, color token, layout, or other-section changes.
