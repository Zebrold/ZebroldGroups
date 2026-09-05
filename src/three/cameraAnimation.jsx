import { useFrame, useThree } from '@react-three/fiber';
import { cameraPositionAt, cameraFovAt, frameShiftYAt } from './animationSystem';

/** Drives the camera along a small, restrained cinematic path keyed to scroll progress — a gentle dolly/reveal, never a full orbit. */
export default function CameraRig({ progressRef }) {
  const { camera } = useThree();

  // eslint-disable-next-line react-hooks/immutability -- R3F's imperative escape hatch: mutating the three.js camera outside React's render is the documented pattern.
  useFrame(() => {
    const p = progressRef.current;
    const [x, y, z] = cameraPositionAt(p);
    // Translate the whole rig (position + lookAt target) up by the same
    // amount, rather than tilting — this pushes the object down-screen to
    // clear the header text without distorting the perspective, and keeps
    // the CSS logo overlay (offset by the matching fraction) aligned with
    // the object's actual center gap at every camera distance.
    const shiftY = frameShiftYAt(p);
    camera.position.set(x, y + shiftY, z);
    camera.lookAt(0, shiftY, 0);
    const fov = cameraFovAt(p);
    if (Math.abs(camera.fov - fov) > 0.01) {
      // eslint-disable-next-line react-hooks/immutability -- R3F's imperative escape hatch.
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
