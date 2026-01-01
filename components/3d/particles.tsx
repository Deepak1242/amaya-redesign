"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";


function createCircleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

interface ParticleSystemProps {
  count?: number;
  radius?: number;
  color?: string;
}

export function ParticleSystem({ count = 200, radius = 3, color = "#D4C5A5" }: ParticleSystemProps) {
  const scroll = useScroll();
  const pointsRef = useRef<THREE.Points>(null);
  

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());
      
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
      

      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities };
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const r = scroll.offset;
    const geometry = pointsRef.current.geometry;
    const posArray = geometry.attributes.position.array as Float32Array;
    

    let attractionPoint = new THREE.Vector3(0, 0, 0);
    let attractionStrength = 0;
    let orbitSpeed = 1;
    
    if (r < 0.15) {
      orbitSpeed = 0.3;
    } else if (r < 0.35) {
      orbitSpeed = 0.8;
    } else if (r < 0.55) {
      orbitSpeed = 1.5;
    } else if (r < 0.75) {
      attractionPoint.set(0, 1.5, 0);
      attractionStrength = 0.02;
      orbitSpeed = 0.5;
    } else {
      attractionPoint.set(0, 0.5, 0);
      attractionStrength = 0.005;
      orbitSpeed = 0.2;
    }
    

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      

      let x = posArray[i3];
      let y = posArray[i3 + 1];
      let z = posArray[i3 + 2];
      

      const angle = delta * orbitSpeed * (0.5 + Math.random() * 0.5);
      const newX = x * Math.cos(angle) - z * Math.sin(angle);
      const newZ = x * Math.sin(angle) + z * Math.cos(angle);
      
      x = newX;
      z = newZ;
      

      if (attractionStrength > 0) {
        const dx = attractionPoint.x - x;
        const dy = attractionPoint.y - y;
        const dz = attractionPoint.z - z;
        
        x += dx * attractionStrength;
        y += dy * attractionStrength;
        z += dz * attractionStrength;
      }
      

      y += Math.sin(state.clock.elapsedTime + i * 0.1) * 0.002;
      
      posArray[i3] = x;
      posArray[i3 + 1] = y;
      posArray[i3 + 2] = z;
    }
    
    geometry.attributes.position.needsUpdate = true;
    

    const material = pointsRef.current.material as THREE.PointsMaterial;
    if (r < 0.1) {
      material.opacity = r * 10;
    } else if (r > 0.9) {
      material.opacity = (1 - r) * 10;
    } else {
      material.opacity = 1;
    }
  });


  const sphereTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    return createCircleTexture();
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <primitive
          attach="attributes-position"
          object={new THREE.BufferAttribute(positions, 3)}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={color}
        transparent
        opacity={0}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={sphereTexture}
        alphaMap={sphereTexture}
      />
    </points>
  );
}

export function OrbitalRing({ radius = 1.8, count = 50 }: { radius?: number; count?: number }) {
  const scroll = useScroll();
  const ringRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!ringRef.current) return;
    
    const r = scroll.offset;
    

    const material = ringRef.current.material as THREE.PointsMaterial;
    if (r > 0.35 && r < 0.55) {
      const progress = (r - 0.35) / 0.2;
      material.opacity = Math.sin(progress * Math.PI);
      ringRef.current.rotation.y += delta * 2;
    } else {
      material.opacity = 0;
    }
  });


  const sphereTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    return createCircleTexture();
  }, []);

  return (
    <points ref={ringRef} position={[0, 0.5, 0]}>
      <bufferGeometry>
        <primitive
          attach="attributes-position"
          object={new THREE.BufferAttribute(positions, 3)}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#FFD700"
        transparent
        opacity={0}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={sphereTexture}
        alphaMap={sphereTexture}
      />
    </points>
  );
}
