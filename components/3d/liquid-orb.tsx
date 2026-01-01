"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function LiquidOrb() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      // Subtle rotation
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Mouse interaction (lerping for smoothness)
      const x = state.mouse.x * 0.5;
      const y = state.mouse.y * 0.5;
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, x, 0.1);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, y, 0.1);
    }
  });

  return (
    <Sphere args={[1, 64, 64]} scale={2.2} ref={sphereRef}>
      <MeshDistortMaterial
        color="#E8F0EE"         // Sage-like base
        attach="material"
        distort={0.5}           // Strength of distortion
        speed={2}               // Speed of distortion
        roughness={0.2}
        metalness={0.1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={0.1}
        radius={1}
      />
    </Sphere>
  );
}
