import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PARTS } from './MechanicalParts';
import { createGeometries, createEdgeGeometries, createMaterials, disposeAll, applyThemeToMaterials } from './materials';
import { lerp, explosionFactor, rotationYAt, themeFactor, breathe } from './animationSystem';

const SELF_ROTATE_SPEED = 0.12; // rad/s — slow, premium, not spinny
const FLOAT_AMPLITUDE = 0.05;
const FLOAT_PERIOD = 7.5;
const PARALLAX_AMPLITUDE = 0.035;
const PARALLAX_PERIOD = 13;
const BREATHE_PERIOD = 11;
const BREATHE_AMPLITUDE = 0.16; // extra X drift, scaled by current explosion factor

/**
 * Real procedural CAD-style mechanical assembly, animating the scripted
 * narrative: held assembled -> one clean 360° turn as a single rigid body ->
 * parts separate independently along X -> a subtle "alive" breathing/float
 * loop only once exploded -> wireframe crossfades from the initial dark
 * (on white) to light (on dark) palette. Nothing here is a single mesh
 * moving as one unit — every part gets its own group and transform.
 */
export default function MechanicalAssembly({ progressRef }) {
  const assemblyRef = useRef(null);
  const groupMap = useRef({});

  const geometries = useMemo(() => createGeometries(), []);
  const edgeGeometries = useMemo(() => createEdgeGeometries(geometries), [geometries]);
  const materials = useMemo(() => createMaterials(), []);

  useEffect(() => {
    return () => {
      disposeAll(geometries, edgeGeometries, materials);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerRef = (id) => (el) => {
    if (el) groupMap.current[id] = el;
    else delete groupMap.current[id];
  };

  useFrame((state) => {
    const p = progressRef.current ?? 0;
    const explosion = explosionFactor(p);
    const elapsed = state.clock.elapsedTime;

    if (assemblyRef.current) {
      assemblyRef.current.rotation.y = rotationYAt(p);
    }

    applyThemeToMaterials(materials, themeFactor(p));

    for (let i = 0; i < PARTS.length; i++) {
      const part = PARTS[i];
      const group = groupMap.current[part.id];
      if (!group) continue;

      // Idle drift only comes alive once parts have separated, so the pause
      // and the full 360° turn stay perfectly rigid and symmetrical.
      const breathX = breathe(elapsed, BREATHE_PERIOD, part.floatPhase) * BREATHE_AMPLITUDE * explosion;
      const floatY = breathe(elapsed, FLOAT_PERIOD, part.floatPhase * 1.7) * FLOAT_AMPLITUDE * explosion;
      const parallaxZ = breathe(elapsed, PARALLAX_PERIOD, part.floatPhase * 0.6) * PARALLAX_AMPLITUDE * explosion;

      const baseX = lerp(part.initialPos[0], part.explodedPos[0], explosion);
      const baseY = lerp(part.initialPos[1], part.explodedPos[1], explosion);
      const baseZ = lerp(part.initialPos[2], part.explodedPos[2], explosion);

      group.position.set(
        baseX + (part.initialPos[0] < 0 ? -Math.abs(breathX) : Math.abs(breathX)),
        baseY + floatY,
        baseZ + parallaxZ
      );

      group.rotation.set(
        lerp(part.initialRot[0], part.explodedRot[0], explosion),
        lerp(part.initialRot[1], part.explodedRot[1], explosion),
        lerp(part.initialRot[2], part.explodedRot[2], explosion)
      );

      if (part.selfRotate) {
        // Every part's geometry is built symmetric around its own local Y
        // axis (the cylinder's native spin axis) before the [0,0,PI/2] base
        // rotation tilts it into the assembly's X axis — incrementing Y here
        // spins the part cleanly in place around that axis rather than
        // wobbling around the already-tilted frame.
        group.rotation.y += ((elapsed * SELF_ROTATE_SPEED) % (Math.PI * 2)) * explosion;
      }
    }
  });

  return (
    <group ref={assemblyRef} rotation={[-0.03, 0, 0]}>
      {PARTS.map((part) => (
        <group key={part.id} ref={registerRef(part.id)} position={part.initialPos} rotation={part.initialRot}>
          <mesh geometry={geometries[part.type]} material={materials[part.variant]} />
          <lineSegments geometry={edgeGeometries[part.type]} material={materials[part.line]} />
        </group>
      ))}
    </group>
  );
}
