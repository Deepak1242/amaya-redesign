"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, Preload } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { BottleAssembly } from "./bottle-assembly";
import { ParticleSystem } from "./particles";
import { SceneEnvironment } from "./scene-environment";
import { Suspense, useEffect, useRef } from "react";

export function ScrollyScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollContainer = containerRef.current?.querySelector('[data-lenis-prevent]') as HTMLElement 
        || containerRef.current?.querySelector('div[style*="overflow"]') as HTMLElement
        || containerRef.current?.querySelector('div > div > div') as HTMLElement;
      
      if (scrollContainer && scrollContainer.scrollHeight > scrollContainer.clientHeight) {
        scrollContainer.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 h-screen w-screen"
      data-lenis-prevent
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <spotLight
            position={[5, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          
          <spotLight
            position={[-5, 5, -5]}
            angle={0.5}
            penumbra={1}
            intensity={1}
            color="#D4C5A5"
          />
          
          <pointLight position={[-5, -5, 5]} intensity={0.3} color="#4A7A72" />
          
          <Environment preset="night" />
          
          <ScrollControls 
            pages={5} 
            damping={0.2}
          >
            <SceneEnvironment />
            <BottleAssembly />
          </ScrollControls>
          
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.6}
              luminanceSmoothing={0.9}
              intensity={0.5}
              radius={0.8}
            />
            <Vignette eskil={false} offset={0.1} darkness={0.8} />
          </EffectComposer>
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

