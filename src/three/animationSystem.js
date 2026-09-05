/**
 * Pure math helpers driving the one-way scroll narrative:
 *
 *   0.00–0.10  fully assembled, held (white theme)
 *   0.10–0.40  smooth 360° rotation, object stays together
 *   0.40–0.62  parts separate horizontally (explode)
 *   0.58–0.66  ZEBROLD fades in between the separated parts
 *   0.68–0.85  theme crossfades from warm white to dark charcoal
 *   0.85–1.00  held in the final exploded, dark state
 *
 * Everything is a pure function of progress, so scrolling back up reverses
 * the whole sequence naturally — there is no separate "return" animation.
 */

export const STAGES = [
  { key: 'assembled', from: 0.0, to: 0.1 },
  { key: 'rotating-in', from: 0.1, to: 0.25 },
  { key: 'rotating-out', from: 0.25, to: 0.4 },
  { key: 'exploding', from: 0.4, to: 0.62 },
  { key: 'revealed', from: 0.62, to: 0.68 },
  { key: 'transitioning', from: 0.68, to: 0.85 },
  { key: 'final', from: 0.85, to: 1.0 },
];

export function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  const t = clamp01((value - inMin) / (inMax - inMin || 1));
  return lerp(outMin, outMax, t);
}

export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Which stage index (1-based, 1..7) the given progress falls into. */
export function activeStageNumber(p) {
  for (let i = 0; i < STAGES.length; i++) {
    if (p <= STAGES[i].to || i === STAGES.length - 1) return i + 1;
  }
  return STAGES.length;
}

/** Full 360° (2π) turn of the still-assembled object; holds before/after. */
export function rotationYAt(p) {
  return easeInOutCubic(mapRange(p, 0.1, 0.4, 0, 1)) * Math.PI * 2;
}

/** 0→1 horizontal separation amount; only begins once the rotation finishes, then holds. */
export function explosionFactor(p) {
  return easeInOutCubic(mapRange(p, 0.4, 0.62, 0, 1));
}

/** 0→1 white→dark theme crossfade; only begins once the explosion has settled. */
export function themeFactor(p) {
  return easeInOutCubic(mapRange(p, 0.68, 0.85, 0, 1));
}

/** 0→1 opacity for the ZEBROLD wordmark, fading in as the gap opens. */
export function centerMarkFactor(p) {
  return mapRange(p, 0.58, 0.66, 0, 1);
}

/**
 * Slow, continuous "breathing" drift used only once parts have separated —
 * kept at zero during the assembled/rotating stages so the 360° turn reads
 * as one clean, rigid object.
 */
export function breathe(elapsed, period = 11, phase = 0) {
  return Math.sin((elapsed / period) * Math.PI * 2 + phase);
}

// Camera stays locked through the pause + full rotation for a clean read,
// then gently dollies back as the assembly opens up and the theme shifts.
const CAMERA_KEYFRAMES = [
  { t: 0.0, pos: [0, 0.12, 7.6], fov: 38 },
  { t: 0.1, pos: [0, 0.12, 7.6], fov: 38 },
  { t: 0.4, pos: [0, 0.12, 7.6], fov: 38 },
  { t: 0.62, pos: [-0.1, 0.2, 10.6], fov: 42 },
  { t: 0.85, pos: [0, 0.22, 11.4], fov: 44 },
  { t: 1.0, pos: [0, 0.22, 11.4], fov: 44 },
];

/** Cinematic camera position for the given progress; interpolates linearly between keyframes. */
export function cameraPositionAt(p) {
  for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
    const a = CAMERA_KEYFRAMES[i];
    const b = CAMERA_KEYFRAMES[i + 1];
    if (p >= a.t && p <= b.t) {
      const localT = (p - a.t) / (b.t - a.t || 1);
      return [
        lerp(a.pos[0], b.pos[0], localT),
        lerp(a.pos[1], b.pos[1], localT),
        lerp(a.pos[2], b.pos[2], localT),
      ];
    }
  }
  return CAMERA_KEYFRAMES[CAMERA_KEYFRAMES.length - 1].pos;
}

/** Cinematic camera field-of-view for the given progress. */
export function cameraFovAt(p) {
  for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
    const a = CAMERA_KEYFRAMES[i];
    const b = CAMERA_KEYFRAMES[i + 1];
    if (p >= a.t && p <= b.t) {
      const localT = (p - a.t) / (b.t - a.t || 1);
      return lerp(a.fov, b.fov, localT);
    }
  }
  return CAMERA_KEYFRAMES[CAMERA_KEYFRAMES.length - 1].fov;
}

// Fraction of the full frame height the object (and its center gap) is held
// below true screen-center, clearing room above it for the heading/description
// text. Expressed as a fraction of the vertical FOV rather than a fixed world
// offset so the on-screen gap stays this same size regardless of how far the
// camera has dollied back — the CSS logo overlay (which tracks the gap with a
// matching `50% + FRAME_SHIFT_FRACTION*100vh` offset) stays aligned throughout.
export const FRAME_SHIFT_FRACTION = 0.12;

/** World-space Y offset applied to both the camera position and its lookAt
 * target at the given progress, so the whole rig translates (not tilts) and
 * the object is pushed FRAME_SHIFT_FRACTION of the frame height down-screen. */
export function frameShiftYAt(p) {
  const [, , z] = cameraPositionAt(p);
  const fovRad = (cameraFovAt(p) * Math.PI) / 180;
  const frameHeight = 2 * z * Math.tan(fovRad / 2);
  return FRAME_SHIFT_FRACTION * frameHeight;
}
