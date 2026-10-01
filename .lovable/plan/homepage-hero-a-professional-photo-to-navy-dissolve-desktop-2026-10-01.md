# Homepage Hero: a professional photo-to-navy dissolve (desktop only)

## What's wrong now
The photo is cropped tight. The singer's mic and hand sit right at its right edge, so any fade has to go over them. The bright white wall fading into navy also turns pale blue on the way, which shows up as the blue band over his hands.

## The fix
Give the fade empty space to happen in, so it never touches a person.

1. **Extend the photo to the right with AI.** Add about 50% more width on the right side: more of the same back wall, ceiling beam and soft stage light, matching the color, grain and focus. The area falls gently into shadow toward the right. The original pixels (both singers, the back singer, mic, hands) are locked and stay exactly as they are. Only the new strip is generated. If the narrower laptop widths need it, I'll also add a little ceiling above so the photo can sit slightly smaller without gaps.
2. **Fade only over the new strip.** The photo runs from the left edge to just before the text. The dissolve starts past the mic tip and ends just before "Real People." Because the added wall is already darkening, it fades from shadow into navy, not white into pale blue. No band, no line.
3. **No overlay on the people.** No tint, no blobs, no blur. Faces, hands and mic stay natural and sharp.
4. **Text stays exactly where it is now**, same left edge, padding and width cap. It sits on solid navy.
5. **Phones stay exactly as they are.** Phones keep the current photo file and crop. Only desktop gets the extended version.

## How I'll check it before telling you it's done
- Screenshots at 1440, 1280, 1024 and 768. I'll look at each one up close.
- Pass rule: both faces, the singer's hand and the full mic are fully clear of the fade at every width. The fade ends before the text. No visible line or blue band.
- A brightness scan across the fade zone at three heights, to prove there's no hard step.
- I'll check the generated wall for anything odd (warped shapes, extra objects, smears). If it isn't clean, I'll redo it before showing you.
- Mobile screenshot matches the current one exactly.

## Technical details
- Outpaint with imagegen edit_image in inpaint mode: a wider canvas (about 1800x1500) with the original 1200x1500 on the left and a white mask over the new right strip only. Original pixels are kept 1:1. Upload via lovable-assets as a new desktop hero asset. The current asset stays for mobile.
- Hero markup: `<picture>` with a `md:` media source pointing to the extended image, and an `<img>` fallback to the current HERO_IMG. Both sources are defined in one place at the top of `src/routes/index.tsx`.
- Desktop photo container: left 0, right edge about 56% (tuned per breakpoint so the fade ends before the text block at 50% + 80px). Use object-cover with object-position left/top so the singers land where they are now, or slightly smaller at narrow widths. One simple multi-stop horizontal mask over the generated strip only, standard and -webkit- forms.
- Remove the current mask that sits over the mic. No other sections, copy, colors or the mobile gradient change.
