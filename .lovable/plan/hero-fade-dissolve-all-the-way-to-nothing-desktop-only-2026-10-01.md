# Hero fade: dissolve all the way to nothing (desktop only)

## What's causing the line
The fade gets very faint near the end, but then it stops suddenly at the photo's right edge. Your eye picks up that sudden stop as a soft blue line running top to bottom, crossing the mic stands in front of the singer. The colors right there barely change. It's the abrupt end of the fade that you notice.

## The fix
1. **Make the fade finish before the photo's edge.** The photo will be fully gone a bit before its right border (around 94 to 95 percent of its width). That way the edge itself is never visible, because nothing is left to cut off.
2. **Ease into the end instead of stopping.** Replace the current steps with a smooth S-shaped curve (about 16 small steps). The photo starts fading gently, fades fastest in the middle, and slows down to nothing at the end. Because the start and end are both gradual, there's no point where your eye picks up a line.
3. **Keep the same overall length.** The fade still starts at about the middle of the photo. The singer's face, hand and the main part of his mic stay clear, and only the far mic stands and the back wall dissolve.

## What stays the same
- Photo size, crop and where the people sit on screen
- Text position and spacing (exactly as the client likes it)
- Navy color, phone layout, all wording, every other section

## How I'll check it
- Screenshots at 1167 (your current screen), 1280 and 1024, plus zoomed-in close-ups of the fade area
- Measure brightness column by column across the fade, so I can show there's no sudden change or end point anywhere, including on the mic stands
- Confirm the build is clean

## Technical details
- In `src/routes/index.tsx`, swap the photo container's `mask-image` / `-webkit-mask-image` for a smootherstep-eased gradient. Alpha goes from 1 at 50% to 0 at about 95%, with zero slope at both ends (example tail: 0.06 at 88%, 0.025 at 91%, 0.008 at 93%, 0 at 95%). Container stays `md:right-1/2`, and the img classes stay as they are.
