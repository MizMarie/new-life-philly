# Replace the homepage hero photo

## What changes

Swap the hero photo for the newly uploaded one (Homepage_Hero_4_x_5_in-3.jpg). It is a 4:5 portrait, same shape as the current photo, so the existing layout carries over unchanged.

## Steps

1. Upload the new photo as a CDN asset (lovable-assets) and replace the `homepage-hero.jpg.asset.json` pointer the homepage already imports. The import in `src/routes/index.tsx` stays the single source for the hero image, so no code rewiring is needed.
2. Keep everything else exactly as it is:
   - Photo container at the left 50 percent on desktop, same soft dissolve mask at its right edge.
   - Text block position, padding, and width cap unchanged.
   - Mobile stacking and navy tint unchanged.
   - No copy, color, or other-section changes.
3. Check the crop: the new photo has the lead singer centered and the woman at the left edge. Confirm `object-position` keeps both faces fully in frame at desktop and mobile widths; adjust the percentage only if a face gets cut.
4. Delete the old hero asset from the CDN once the new one is verified, so it does not linger unused.

## Verification

- Screenshot the hero at 1280px, 1024px, and phone width: both singers fully visible, dissolve edge smooth, no stripe, no text over the photo.
- Confirm the build log shows a clean build.
