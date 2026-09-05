import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Parameterized, reusable CAD-style component generators for the exploded
 * turbine/rotor assembly. Every builder returns a plain BufferGeometry (the
 * transparent shell — edges/wireframe are derived from it the same way as
 * everywhere else in the scene) plus its own halfWidth (extent along the
 * generator's local Y axis, which becomes the assembly's X axis once the
 * part is rotated into place) and outerRadius (radial/visual extent,
 * perpendicular to that axis) — the two numbers the layout system
 * (MechanicalParts.js) needs to flush-stack parts with zero gaps and size
 * explosion gaps proportionally. Dimensions are derived from the exact same
 * ratio constants the meshes are built with, so they can never drift out of
 * sync with what's actually on screen.
 */

// How far ribs/blades/teeth protrude beyond their component's base radius,
// as a fraction of that radius.
const RIB_DEPTH_RATIO = 0.07;
const BLADE_LEN_RATIO = 0.32;
const TOOTH_LEN_RATIO = 0.16;

function radialArray(count, build) {
  const parts = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const geo = build(i, angle);
    geo.rotateY(angle);
    parts.push(geo);
  }
  return parts;
}

/** Wide ribbed drum — the outer-end housings/casings and the smaller
 * secondary coupling section share this builder at different scales. */
export function createRibbedHousing(radius, depth, ribCount = 20) {
  const shell = new THREE.CylinderGeometry(radius, radius, depth, 32, 1, true);
  const ribDepth = radius * RIB_DEPTH_RATIO;
  const ribWidth = radius * 0.1;
  const ribs = radialArray(ribCount, () => {
    const rib = new THREE.BoxGeometry(ribWidth, depth * 1.02, ribDepth);
    rib.translate(0, 0, radius + ribDepth / 2);
    return rib;
  });
  return mergeGeometries([shell, ...ribs]);
}

/** Thin flat disc/spacer — a coin-like clustering element. */
export function createDiscSpacer(radius, thickness) {
  return new THREE.CylinderGeometry(radius, radius, thickness, 36);
}

/** Textured rotor/fin-ring core: a finely segmented shell with a radial
 * array of slim, pitched turbine-blade fins — the densest, most detailed
 * component in the assembly. */
export function createFinRing(radius, depth, bladeCount = 10) {
  const shell = new THREE.CylinderGeometry(radius, radius, depth, 20, 5, true);
  const bladeLen = radius * BLADE_LEN_RATIO;
  const bladeThickness = radius * 0.07;
  const blades = radialArray(bladeCount, () => {
    const blade = new THREE.BoxGeometry(bladeThickness, depth * 0.86, bladeLen);
    blade.rotateZ(0.32); // subtle pitch, reads as an angled turbine blade
    blade.translate(0, 0, radius + bladeLen / 2);
    return blade;
  });
  return mergeGeometries([shell, ...blades]);
}

/** Thin central shaft segment — the rod the surrounding discs/housings ride on. */
export function createShaft(radius, length) {
  return new THREE.CylinderGeometry(radius, radius, length, 12);
}

/** Disc with trapezoidal gear teeth extruded around the rim — the
 * mechanical coupling/flange look. */
export function createGearFlange(radius, depth, toothCount = 14) {
  const hub = new THREE.CylinderGeometry(radius, radius, depth, 32);
  const toothLen = radius * TOOTH_LEN_RATIO;
  const toothWidth = ((Math.PI * 2 * radius) / toothCount) * 0.55;
  const teeth = radialArray(toothCount, () => {
    const tooth = new THREE.BoxGeometry(toothWidth, depth * 0.92, toothLen);
    tooth.translate(0, 0, radius + toothLen / 2);
    return tooth;
  });
  return mergeGeometries([hub, ...teeth]);
}

/** Builds the shell geometry for a PART_DEFS entry. */
export function buildPartGeometry(def) {
  switch (def.builder) {
    case 'housing':
      return createRibbedHousing(def.radius, def.depth, def.ribCount);
    case 'disc':
      return createDiscSpacer(def.radius, def.thickness);
    case 'finRing':
      return createFinRing(def.radius, def.depth, def.bladeCount);
    case 'gear':
      return createGearFlange(def.radius, def.depth, def.toothCount);
    case 'shaft':
      return createShaft(def.radius, def.length);
    default:
      throw new Error(`Unknown part builder: ${def.builder}`);
  }
}

/** Pure-math companion to buildPartGeometry — same ratio constants, no
 * THREE.BufferGeometry construction — so the layout system can get exact
 * dimensions without paying for (or duplicating) mesh generation. */
export function measurePart(def) {
  switch (def.builder) {
    case 'housing':
      return {
        halfWidth: def.depth / 2,
        outerRadius: def.radius * (1 + RIB_DEPTH_RATIO),
      };
    case 'disc':
      return { halfWidth: def.thickness / 2, outerRadius: def.radius };
    case 'finRing':
      return {
        halfWidth: def.depth / 2,
        outerRadius: def.radius * (1 + BLADE_LEN_RATIO),
      };
    case 'gear':
      return {
        halfWidth: def.depth / 2,
        outerRadius: def.radius * (1 + TOOTH_LEN_RATIO),
      };
    case 'shaft':
      return {
        // The shaft's mesh is visually longer than its stacking slot (see
        // stackHalfWidth in partDefs.js) so it reads as running through the
        // neighboring hollow parts rather than stopping flush at its own edge.
        halfWidth: def.stackHalfWidth ?? def.length / 2,
        outerRadius: def.radius,
      };
    default:
      throw new Error(`Unknown part builder: ${def.builder}`);
  }
}
