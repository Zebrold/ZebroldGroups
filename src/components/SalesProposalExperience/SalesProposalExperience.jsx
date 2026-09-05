import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLanguage } from '../../context/LanguageContext';
import useScrollProgress from '../../hooks/useScrollProgress';
import MechanicalAssembly from '../../three/MechanicalAssembly';
import CameraRig from '../../three/cameraAnimation';
import Lights from '../../three/Lights';
import { themeFactor } from '../../three/animationSystem';
import { themeCssVars } from '../../three/theme';
import ProposalHeader from './ProposalHeader';
import FeatureRail from './FeatureRail';
import './SalesProposalExperience.css';

function useViewportProfile() {
  const [profile, setProfile] = useState(() => getProfile());

  function getProfile() {
    if (typeof window === 'undefined') return { scale: 1, orientation: 'vertical' };
    const w = window.innerWidth;
    if (w <= 640) return { scale: 0.42, orientation: 'horizontal' };
    if (w <= 1024) return { scale: 0.66, orientation: 'vertical' };
    return { scale: 0.86, orientation: 'vertical' };
  }

  useEffect(() => {
    let raf = null;
    const onResize = () => {
      if (raf != null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        setProfile(getProfile());
      });
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return profile;
}

export default function SalesProposalExperience() {
  const { lang } = useLanguage();
  const scrollRef = useRef(null);
  const wrapRef = useRef(null);
  const glStateRef = useRef(null);
  const { progress, progressRef } = useScrollProgress(scrollRef);
  const { scale, orientation } = useViewportProfile();

  const themeVars = useMemo(() => themeCssVars(themeFactor(progress)), [progress]);

  // R3F's own ResizeObserver can miss its first measurement while the sticky
  // container is still settling, leaving the canvas at its 300x150 default.
  // Measure the wrapper directly and keep the renderer/camera in sync with it.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const applySize = () => {
      const state = glStateRef.current;
      if (!state || !wrap) return;
      const { width, height } = wrap.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      state.gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      state.gl.setSize(width, height);
      state.camera.aspect = width / height;
      state.camera.updateProjectionMatrix();
    };

    applySize();
    const observer = new ResizeObserver(applySize);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [scale]);

  return (
    <section className="sp-scroll" ref={scrollRef} style={themeVars}>
      <div className="sp-sticky">
        <div className="sp-canvas-wrap" ref={wrapRef}>
          <Canvas
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            camera={{ fov: 38, position: [0, 0.12, 7.6], near: 0.1, far: 60 }}
            onCreated={(state) => {
              glStateRef.current = state;
              const { width, height } = wrapRef.current.getBoundingClientRect();
              if (width > 0 && height > 0) {
                state.gl.setSize(width, height);
                state.camera.aspect = width / height;
                state.camera.updateProjectionMatrix();
              }
            }}
          >
            <Lights />
            <group scale={scale} position={[0, -0.18, 0]}>
              <MechanicalAssembly progressRef={progressRef} />
            </group>
            <CameraRig progressRef={progressRef} />
          </Canvas>
        </div>

        <div className="sp-overlay">
          <ProposalHeader lang={lang} progress={progress} />

          <FeatureRail lang={lang} progress={progress} />
        </div>
      </div>
    </section>
  );
}
