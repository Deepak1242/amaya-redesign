"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import { LiquidOrb } from "./liquid-orb";
import { Suspense } from "react";

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <LiquidOrb />
          </Float>
          
          {/* Particles or sparkles could be added here later */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
