# Replace the site logo everywhere

Use the uploaded 500×500 New Life logo as the site’s new brand mark.

## Changes

- Upload the supplied PNG through the project’s asset delivery system and replace the existing logo source used by the shared header and footer.
- Keep the current logo sizing and circular presentation so surrounding navigation and footer spacing remain unchanged.
- Preserve the header logo’s low-priority loading setting, which prevents it from painting alone before the rest of the mobile page.
- Create a properly downscaled 64×64 favicon from the same uploaded image and replace the current browser-tab icon.
- Leave the previous hosted logo asset in place but unused so older published versions are not broken.

## Verification

- Confirm no visible site code still references the old logo.
- Run the project checks.
- Review the header, footer, and favicon on desktop and mobile, including a slow-mobile first-paint check to ensure the logo flash does not return.

## Technical details

- Update the shared logo import used by `SiteHeader` and `SiteFooter` to a new asset pointer.
- Replace `public/favicon.png` with a padded/downscaled copy of the uploaded logo; the existing root metadata already points to that file.
