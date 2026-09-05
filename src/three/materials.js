import * as THREE from 'three';
import { wireColorRGB, wireSecondaryColorRGB, fillColorRGB, ACCENT_BLUE } from './theme';
import { PART_DEFS } from './partDefs';
import { buildPartGeometry } from './geometryBuilders';

/** Reusable, once-created geometries keyed by part type. Never recreate per frame.
 * Built from PART_DEFS so every component's mesh always matches the dimensions
 * MechanicalParts.js used to lay it out — single source of truth, no drift. */
export function createGeometries() {
  return Object.fromEntries(
    Object.entries(PART_DEFS).map(([type, def]) => [type, buildPartGeometry(def)])
  );
}

/** CAD-style thin edge lines derived from the same base geometries. */
export function createEdgeGeometries(geometries) {
  return Object.fromEntries(
    Object.entries(geometries).map(([key, geo]) => [key, new THREE.EdgesGeometry(geo, 16)])
  );
}

/**
 * Restrained, premium-engineering material set: solid-reading CAD shells
 * (blueprint-style, no colored fill) at high opacity so nearer components
 * correctly occlude farther ones instead of ghosting through them, with
 * thin wireframe lines on top whose color crosses from dark (on the initial
 * white background) to light (on the final dark background) via
 * applyThemeToMaterials. The accent material stays a constant, subtle
 * Zebrold blue throughout. depthWrite is on so the depth buffer actually
 * resolves which surface is in front once opacity is this high.
 */
export function createMaterials() {
  return {
    outer: new THREE.MeshBasicMaterial({
      color: '#cdc9c1',
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: true,
    }),
    inner: new THREE.MeshBasicMaterial({
      color: '#cdc9c1',
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      depthWrite: true,
    }),
    primary: new THREE.LineBasicMaterial({
      color: '#2a2724',
      transparent: true,
      opacity: 0.75,
    }),
    secondary: new THREE.LineBasicMaterial({
      color: '#6b6864',
      transparent: true,
      opacity: 0.4,
    }),
    accent: new THREE.LineBasicMaterial({
      color: ACCENT_BLUE,
      transparent: true,
      opacity: 0.65,
    }),
  };
}

/** Crossfades the wireframe/shell colors from the light-theme to dark-theme palette. Cheap: mutates existing materials, no allocation. */
export function applyThemeToMaterials(materials, t) {
  const [pr, pg, pb] = wireColorRGB(t);
  materials.primary.color.setRGB(pr / 255, pg / 255, pb / 255, THREE.SRGBColorSpace);

  // Fill surfaces use a distinct mid-tone from the wire color (see
  // fillColorRGB) so the now-high-opacity fill still lets the edge lines
  // read as crisp lines on top of it, rather than the two blending together.
  const [fr, fg, fb] = fillColorRGB(t);
  materials.outer.color.setRGB(fr / 255, fg / 255, fb / 255, THREE.SRGBColorSpace);
  materials.inner.color.setRGB(fr / 255, fg / 255, fb / 255, THREE.SRGBColorSpace);

  const [sr, sg, sb] = wireSecondaryColorRGB(t);
  materials.secondary.color.setRGB(sr / 255, sg / 255, sb / 255, THREE.SRGBColorSpace);
}

export function disposeAll(...maps) {
  maps.forEach((map) => {
    if (!map) return;
    Object.values(map).forEach((resource) => resource?.dispose?.());
  });
}
