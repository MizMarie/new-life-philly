# Restore the logo’s organic brushstroke edge

The uploaded logo is correct: it contains over 107,000 transparent pixels, including transparent corners. The irregular painted edge disappeared because both site placements still apply the old logo’s styling: `rounded-full bg-white object-cover`. That clips the image to a perfect circle and places a white disc behind its transparent areas, especially visible against the black footer.

## Changes

- Remove the forced circular clipping and white background from the shared header and footer logo images.
- Use containment sizing so the complete painted perimeter stays visible within the existing 48px header and 84px footer footprint.
- Keep the header’s low-priority loading setting so the mobile logo-flash fix remains intact.
- Keep the favicon generated from the transparent uploaded PNG; its transparent corners already preserve the organic silhouette.

## Verification

- Review the header on white and the footer on black to confirm the irregular brushstroke edge is visible rather than sitting inside a white circle.
- Check desktop and mobile layouts for unchanged alignment and spacing.
- Run the project checks and repeat the slow-mobile first-paint check.
