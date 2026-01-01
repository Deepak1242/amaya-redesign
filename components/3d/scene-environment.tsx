"use client";

import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export function SceneEnvironment() {
  const scroll = useScroll();

  useFrame((state) => {
    const r = scroll.offset;
    
    const voidColor = new THREE.Color("#0A0A0A");
    const emergeColor = new THREE.Color("#0F1A18");
    const revealColor = new THREE.Color("#1A2522");
    const formulaColor = new THREE.Color("#0D1210");
    
    let targetColor: THREE.Color;
    
    if (r < 0.15) {
      targetColor = voidColor;
    } else if (r < 0.35) {
      const p = (r - 0.15) / 0.2;
      targetColor = voidColor.clone().lerp(emergeColor, p);
    } else if (r < 0.75) {
      const p = (r - 0.35) / 0.4;
      targetColor = emergeColor.clone().lerp(revealColor, p);
    } else {
      const p = (r - 0.75) / 0.25;
      targetColor = revealColor.clone().lerp(formulaColor, p);
    }
    

    if (state.scene.background instanceof THREE.Color) {
      state.scene.background.lerp(targetColor, 0.05);
    } else {
      state.scene.background = targetColor;
    }
    

    if (state.scene.fog instanceof THREE.FogExp2) {
      state.scene.fog.color = state.scene.background as THREE.Color;
      
      if (r > 0.35 && r < 0.55) {
        state.scene.fog.density = 0.06;
      } else {
        state.scene.fog.density = 0.03;
      }
    }
  });

  return <fogExp2 attach="fog" args={["#0A0A0A", 0.03]} />;
}
