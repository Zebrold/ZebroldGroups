/**
 * Exploded turbine/rotor assembly: a left group and a right group of parts,
 * each running (innermost -> outermost, by radial size): a disc/spacer
 * cluster, a rotor blade/fin-ring core, a gear/flange coupling, a secondary
 * disc/spacer, a secondary housing/coupling section, and finally the wide
 * ribbed outer housing. At rest (assembled) every part sits flush against
 * its neighbor — there is zero gap anywhere, including at the centerline,
 * so the object reads as one continuous machine with no pre-existing split.
 * The gap that eventually holds the ZEBROLD mark is purely a byproduct of
 * the explosion animation pulling the two innermost parts apart from that
 * flush contact point.
 *
 * Every component's actual mesh geometry lives in geometryBuilders.js,
 * driven by the shared PART_DEFS config (partDefs.js) — this file only
 * derives layout: assembled position (flush stacking) and exploded position
 * (proportional, symmetric gaps), both computed from each part's measured
 * halfWidth/outerRadius rather than hand-picked numbers, so geometry and
 * layout can never drift apart.
 *
 * The two sides are intentionally NOT mirror-identical — different geometry
 * variants, spacing and jitter per side — so it reads as one asymmetric
 * engineered machine rather than a symmetric prop.
 */

import { PART_DEFS } from './partDefs';
import { measurePart } from './geometryBuilders';

const ROT = {
  cylinder: [0, 0, Math.PI / 2], // every component's long axis runs along X once rotated into place
};

const DIMENSIONS = Object.fromEntries(
  Object.entries(PART_DEFS).map(([type, def]) => [type, measurePart(def)])
);

// Ordered by "role" (center -> outer end); the actual assembled/exploded
// stacking order is derived below by sorting on each part's measured
// outerRadius, so the silhouette always tapers smoothly regardless of the
// order listed here.
const LEFT_SPEC = [
  { key: 'DiscD', type: 'discD', selfRotate: false },
  { key: 'DiscC', type: 'discC', selfRotate: false },
  { key: 'FinRing', type: 'finRing', selfRotate: true },
  { key: 'DiscB', type: 'discB', selfRotate: false },
  { key: 'Gear', type: 'gear', selfRotate: true },
  { key: 'DiscA', type: 'discA', selfRotate: false },
  { key: 'Coupling', type: 'coupling', selfRotate: false },
  { key: 'Housing', type: 'housing', selfRotate: false },
];

const RIGHT_SPEC = [
  { key: 'DiscD', type: 'discD', selfRotate: false },
  { key: 'DiscC', type: 'discC', selfRotate: false },
  { key: 'FinRing', type: 'finRingAlt', selfRotate: true },
  { key: 'DiscB', type: 'discB', selfRotate: false },
  { key: 'Gear', type: 'gearAlt', selfRotate: true },
  { key: 'DiscA', type: 'discA', selfRotate: false },
  { key: 'Coupling', type: 'couplingAlt', selfRotate: false },
  { key: 'Housing', type: 'housingAlt', selfRotate: false },
];

// How much of the explosion gap at each joint is a flat floor (so even the
// smallest, innermost parts pull apart by an obvious amount — never a
// barely-visible micro-offset) vs. scaled by the part's own radial size (so
// wide housings open up proportionally more than small discs/spacers).
const EXPLOSION_GAP_FLOOR = 0.45;
const EXPLOSION_GAP_SCALE = 0.85;

/** Sorts a side's parts innermost -> outermost by measured radial size, so
 * the assembled silhouette always tapers smoothly with zero perceived gaps
 * — independent of the order they're listed in above. */
function byOuterRadiusAsc(spec) {
  return [...spec].sort((a, b) => DIMENSIONS[a.type].outerRadius - DIMENSIONS[b.type].outerRadius);
}

/** Flush-stacks a side's parts outward from the centerline: each part's assembled
 * position is the previous part's position plus the sum of their half-widths —
 * true touching contact, not an arbitrary offset. */
function withFlushAssembledX(spec) {
  let cursor = 0;
  return spec.map((part) => {
    const half = DIMENSIONS[part.type].halfWidth;
    cursor += half;
    const assembledX = cursor;
    cursor += half;
    return { ...part, assembledX };
  });
}

/** Stacks a side's parts outward with an added explosion gap at every joint,
 * proportional to each part's own radial size, then rescales the whole
 * sequence so the outermost part lands at `targetOuterX` — keeping the
 * explosion within the camera's already-tuned framing while making every
 * individual gap proportional and symmetric between the two sides (same
 * formula run independently on each side's own geometry). */
function withExplodedX(spec, targetOuterX) {
  let cursor = 0;
  const raw = spec.map((part) => {
    const half = DIMENSIONS[part.type].halfWidth;
    const gap = EXPLOSION_GAP_FLOOR + DIMENSIONS[part.type].outerRadius * EXPLOSION_GAP_SCALE;
    cursor += half + gap;
    const rawX = cursor;
    cursor += half + gap;
    return { ...part, rawX };
  });
  const scale = targetOuterX / raw[raw.length - 1].rawX;
  return raw.map((part) => ({ ...part, explodedX: part.rawX * scale }));
}

function buildSide(spec, sign, jitterSign, targetOuterX) {
  const ordered = byOuterRadiusAsc(spec);
  const assembled = withFlushAssembledX(ordered);
  const exploded = withExplodedX(ordered, targetOuterX);
  return assembled.map((part, i) => {
    const baseRot = ROT.cylinder;
    // The innermost part (DiscD) reads as a secondary/thinner line; everything else is primary.
    const line = part.key === 'DiscD' ? 'secondary' : 'primary';
    const variant = i < 2 ? 'inner' : 'outer';
    const explodedX = exploded[i].explodedX;
    return {
      id: `${sign < 0 ? 'left' : 'right'}${part.key}`,
      type: part.type,
      variant,
      line,
      selfRotate: part.selfRotate,
      floatPhase: i * 0.9 + (sign < 0 ? 0 : 1.3),
      initialPos: [sign * part.assembledX, 0, 0],
      initialRot: baseRot,
      explodedPos: [
        sign * explodedX,
        jitterSign * (0.05 + i * 0.02),
        (i % 2 === 0 ? 1 : -1) * jitterSign * 0.12,
      ],
      explodedRot: [
        baseRot[0] + jitterSign * 0.08,
        baseRot[1] + sign * 0.14,
        baseRot[2] + jitterSign * 0.06,
      ],
    };
  });
}

// Target outermost reach kept close to the original hand-tuned values so the
// existing camera keyframes (cameraAnimation.jsx) still frame the exploded
// state cleanly without any part clipping out of view.
export const LEFT_PARTS = buildSide(LEFT_SPEC, -1, 1, 7.55);
export const RIGHT_PARTS = buildSide(RIGHT_SPEC, 1, -1, 8.15);

export const PARTS = [...LEFT_PARTS, ...RIGHT_PARTS];
