import { useEffect, useRef, useState } from 'react';

/**
 * Tracks normalized scroll progress (0 → 1) of a tall scroll container as it
 * passes under a sticky viewport. Exposes both a low-frequency React state
 * (for DOM overlays) and a high-frequency ref (for the WebGL render loop),
 * so canvas animation never waits on a React re-render.
 *
 * When `frozen` is true (debug mode), the hook stops overwriting progress
 * from scroll events so an externally-set value can be inspected.
 */
export default function useScrollProgress(containerRef, frozen = false) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const lastEmittedRef = useRef(0);
  const frozenRef = useRef(frozen);

  useEffect(() => {
    frozenRef.current = frozen;
  }, [frozen]);

  useEffect(() => {
    const measure = () => {
      rafRef.current = null;
      if (frozenRef.current) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const clamped = Math.min(1, Math.max(0, raw));
      progressRef.current = clamped;
      if (Math.abs(clamped - lastEmittedRef.current) > 0.0015) {
        lastEmittedRef.current = clamped;
        setProgress(clamped);
      }
    };

    const onScrollOrResize = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef]);

  const setOverride = (value) => {
    progressRef.current = value;
    lastEmittedRef.current = value;
    setProgress(value);
  };

  return { progress, progressRef, setOverride };
}
