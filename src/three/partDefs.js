/**
 * Single source of truth for every component's build parameters. Both the
 * mesh generation (geometryBuilders.js, consumed by materials.js) and the
 * layout/stacking math (MechanicalParts.js) read from here, so a part's
 * on-screen size can never drift out of sync with the numbers the flush-
 * stacking and explosion-gap math use.
 *
 * Left/right variants ('Alt' suffix) use slightly different dimensions —
 * intentional: the assembly reads as one asymmetric engineered machine,
 * not a mirrored prop.
 */

export const PART_DEFS = {
  // Central shaft — thin core rod. Its geometry is deliberately longer than
  // its stacking slot (stackHalfWidth) so it visually runs through the
  // hollow bore of its nearest neighbors rather than stopping flush at its
  // own edge.
  shaft: { builder: 'shaft', radius: 0.045, length: 1.3, stackHalfWidth: 0.18 },

  // Disc/spacer cluster (shared geometry both sides — small enough that
  // per-side variation wouldn't read).
  discD: { builder: 'disc', radius: 0.2, thickness: 0.05 },
  discC: { builder: 'disc', radius: 0.32, thickness: 0.055 },
  discB: { builder: 'disc', radius: 0.5, thickness: 0.06 },
  discA: { builder: 'disc', radius: 0.66, thickness: 0.06 },

  // Rotor blade / fin-ring core — the densest, most detailed component.
  finRing: { builder: 'finRing', radius: 0.4, depth: 0.85, bladeCount: 10 },
  finRingAlt: { builder: 'finRing', radius: 0.42, depth: 0.8, bladeCount: 8 },

  // Gear / flange coupling.
  gear: { builder: 'gear', radius: 0.58, depth: 0.13, toothCount: 14 },
  gearAlt: { builder: 'gear', radius: 0.6, depth: 0.12, toothCount: 12 },

  // Secondary housing / coupling section.
  coupling: { builder: 'housing', radius: 0.8, depth: 0.36, ribCount: 16 },
  couplingAlt: { builder: 'housing', radius: 0.76, depth: 0.38, ribCount: 14 },

  // Wide ribbed housing/casing — outermost, largest-diameter component.
  housing: { builder: 'housing', radius: 1.0, depth: 0.58, ribCount: 22 },
  housingAlt: { builder: 'housing', radius: 1.05, depth: 0.52, ribCount: 18 },
};
