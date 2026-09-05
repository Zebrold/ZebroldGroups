import { lerp } from './animationSystem';

/**
 * The section's two end-states — warm off-white (matching the site's
 * existing cream tone) at rest, true near-black once the sequence finishes.
 * Every other color is derived from these via linear interpolation driven
 * by themeFactor(progress), so the CSS side and the WebGL materials — and
 * the 3D canvas, which renders transparent and lets this CSS background
 * show through — all stay perfectly in sync with this single source of
 * truth. There is exactly one dark background value in the whole section;
 * never introduce a second near-black shade alongside it.
 */
export const LIGHT = {
  bg: [255, 255, 255], // pure white
  text: [33, 30, 29], // matches --color-black
  wire: [42, 39, 36],
  wireSecondary: [107, 104, 100],
  fill: [205, 201, 193], // mid-tone surface — lighter than the wire lines, darker than bg, so edges stay crisp on top
};

export const DARK = {
  bg: [10, 10, 10], // #0A0A0A — true near-black, not the old charcoal
  text: [231, 229, 226],
  wire: [240, 238, 234],
  wireSecondary: [180, 180, 180],
  fill: [64, 61, 57], // mid-tone surface — darker than the wire lines, lighter than bg
};

export const ACCENT_BLUE = '#356CC7';

function lerpChannel(a, b, t) {
  return Math.round(lerp(a, b, t));
}

export function lerpColor(a, b, t) {
  return [lerpChannel(a[0], b[0], t), lerpChannel(a[1], b[1], t), lerpChannel(a[2], b[2], t)];
}

export function rgba(rgb, alpha = 1) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

export function wireColorRGB(t) {
  return lerpColor(LIGHT.wire, DARK.wire, t);
}

export function wireSecondaryColorRGB(t) {
  return lerpColor(LIGHT.wireSecondary, DARK.wireSecondary, t);
}

/** Surface fill color — deliberately a different lightness tier than
 * wireColorRGB at every point in the crossfade, so the wireframe edges
 * drawn on top of a high-opacity fill stay visually distinct instead of
 * disappearing into a same-toned surface. */
export function fillColorRGB(t) {
  return lerpColor(LIGHT.fill, DARK.fill, t);
}

/** CSS custom properties for the whole section's DOM chrome at a given theme factor. */
export function themeCssVars(t) {
  const bg = lerpColor(LIGHT.bg, DARK.bg, t);
  const text = lerpColor(LIGHT.text, DARK.text, t);
  return {
    '--sp-bg': rgba(bg),
    '--sp-vignette': rgba(bg, 0.55),
    '--sp-text-primary': rgba(text),
    '--sp-text-secondary': rgba(text, 0.7),
    '--sp-text-tertiary': rgba(text, 0.5),
    '--sp-divider': rgba(text, 0.12),
  };
}
