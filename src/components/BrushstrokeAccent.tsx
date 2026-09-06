type BrushstrokeAccentProps = {
  /** Positioning + sizing utilities, e.g. "absolute -top-24 right-0 w-[720px]" */
  className?: string;
  /** Rotation in degrees */
  rotate?: number;
  /** Stroke opacity, 0-1 */
  opacity?: number;
  /** Slow ambient drift animation */
  drift?: boolean;
  /** Mirror the stroke horizontally */
  flip?: boolean;
};

/**
 * Hand-drawn sweeping brushstroke used as ambient decoration in dark sections.
 * Purely decorative — always aria-hidden.
 */
export function BrushstrokeAccent({
  className = "",
  rotate = 0,
  opacity = 0.22,
  drift = false,
  flip = false,
}: BrushstrokeAccentProps) {
  const transforms = [
    rotate ? `rotate(${rotate}deg)` : "",
    flip ? "scaleX(-1)" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 720 280"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${drift ? "animate-drift" : ""} ${className}`}
      style={{
        opacity,
        ...(transforms ? { transform: transforms } : {}),
      }}
    >
      {/* Main sweeping stroke: thick in the middle, tapered and frayed at the ends */}
      <path
        fill="currentColor"
        d="M8 196c34-33 86-59 148-77 63-19 131-30 199-33 61-3 122 1 181 12 33 6 63 15 86 28 10 6 17 12 18 19 1 8-6 14-18 17-19 5-42 4-64 1-52-7-104-19-157-24-73-7-146-1-217 14-49 10-96 25-137 45-10 5-19 10-27 15-6 3-11 5-14 3-3-2-2-7 2-12 8-9 19-17 31-24 44-27 98-46 155-59 79-18 161-23 242-16 27 2 53 6 79 11 5 1 10 3 10 6 0 4-6 5-12 5-16 1-33-2-49-4-63-10-127-14-190-8-70 6-138 24-198 55-14 7-27 15-38 24-4 3-8 6-11 5-4-1-3-5-1-8 4-7 11-13 19-19z"
      />
      {/* Companion flick — a lighter secondary swipe for hand-drawn irregularity */}
      <path
        fill="currentColor"
        opacity="0.55"
        d="M96 246c58-24 121-40 186-49 71-10 143-11 214-4 24 3 48 7 71 13 6 1 11 4 11 7 0 4-6 5-13 4-18-1-36-5-54-7-70-9-141-9-211-1-63 7-125 22-183 45-7 3-14 6-19 4-4-1-4-6-2-9 1-1 3-2 0-3z"
      />
    </svg>
  );
}
