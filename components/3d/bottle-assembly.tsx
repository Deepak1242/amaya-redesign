"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Html, MeshDistortMaterial, Float, useTexture, Decal } from "@react-three/drei";
import * as THREE from "three";

export function BottleAssembly() {
  const scroll = useScroll();
  

  const bannerTexture = useTexture('/images/banner.png');
  const logoTexture = useTexture('/images/logo.png');
  

  bannerTexture.wrapS = THREE.ClampToEdgeWrapping;
  bannerTexture.wrapT = THREE.ClampToEdgeWrapping;
  bannerTexture.repeat.set(1, 1);
  bannerTexture.offset.set(0, 0);
  
  logoTexture.center.set(0.5, 0.5);
  logoTexture.rotation = 0;
  
  const groupRef = useRef<THREE.Group>(null);
  const capRef = useRef<THREE.Group>(null);
  const creamRef = useRef<THREE.Mesh>(null);
  const glassRef = useRef<THREE.Mesh>(null);
  

  const heroTextRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  

  const lastScrollState = useRef('reverse');

  const { viewport } = useThree();
  const isMobile = viewport.width < 4.5;

  useFrame((state) => {
    const r = scroll.offset;
    const time = state.clock.elapsedTime;
    
    // --- CAMERA CHOREOGRAPHY ---
    if (groupRef.current) {
      let xRot = 0, yRot = 0, zPos = 0, yPos = 0, scale = 1;
      
      if (r < 0.25) {
        xRot = Math.PI / 2;
        zPos = 0;
        yPos = 0;
        scale = isMobile ? 0.6 : 0.8;
        
        scale += Math.sin(time * 1.5) * 0.02;
        
      } else if (r < 0.50) {
        const p = (r - 0.25) / 0.25;
        const e = THREE.MathUtils.smootherstep(p, 0, 1);
        
        xRot = THREE.MathUtils.lerp(Math.PI / 2, -0.1, e);
        zPos = 0;
        yPos = 0;
        scale = THREE.MathUtils.lerp(isMobile ? 0.6 : 0.8, isMobile ? 0.55 : 0.75, e);
        
      } else if (r < 0.65) {
        xRot = -0.1;
        zPos = 0;
        yPos = 0;
        scale = isMobile ? 0.55 : 0.75;
        yRot = Math.sin(time * 0.5) * 0.05;
        
      } else if (r < 0.75) {
        const p = (r - 0.65) / 0.10;
        const e = THREE.MathUtils.smootherstep(p, 0, 1);
        
        xRot = -0.1;
        zPos = THREE.MathUtils.lerp(0, -1.5, e);
        yPos = 0;
        scale = isMobile ? 0.55 : 0.75;
        
      } else if (r < 0.90) {
        xRot = -0.1;
        zPos = -1.5;
        yPos = isMobile ? 0.5 : -0.5;
        scale = isMobile ? 0.5 : 0.65;
        
      } else {
        xRot = -0.1;
        zPos = -1.5;
        
        yPos = isMobile ? 0.8 : -0.5; 
        scale = isMobile ? 0.45 : 0.6;
        
        if (!isMobile) {
            const p = Math.min(1, (r - 0.90) / 0.10);
            const e = THREE.MathUtils.smootherstep(p, 0, 1);
            groupRef.current.position.x = THREE.MathUtils.lerp(0, -1.55, e);
        } else {
            groupRef.current.position.x = 0;
        }
        
        const currentScrollState = r > 0.95 ? 'complete' : 'reverse';
        
        if (typeof window !== 'undefined' && lastScrollState.current !== currentScrollState) {
           if (currentScrollState === 'complete') {
             window.dispatchEvent(new CustomEvent('scrollComplete'));
           } else {
             window.dispatchEvent(new CustomEvent('scrollReverse'));
           }
           lastScrollState.current = currentScrollState;
        }
      }
      
      if (r < 0.90) {
        groupRef.current.position.x = 0;
      }
      
      groupRef.current.rotation.x = xRot;
      groupRef.current.rotation.y = yRot;
      groupRef.current.position.z = zPos;
      groupRef.current.position.y = yPos;
      groupRef.current.scale.setScalar(scale);
    }
    
    if (capRef.current) {
      if (r > 0.75 && r < 0.90) {
        const p = (r - 0.75) / 0.15;
        const e = THREE.MathUtils.smootherstep(p, 0, 1);
        

        capRef.current.position.y = 0.75 + (e * 2);
        capRef.current.rotation.y = e * Math.PI * 3;
        
      } else if (r >= 0.90) {
        capRef.current.position.y = 2.75;
        capRef.current.rotation.y = Math.PI * 3;
      } else {
        capRef.current.position.y = 0.75;
        capRef.current.rotation.y = 0;
      }
    }
    
    if (creamRef.current) {
      if (r > 0.78) {
        const p = Math.min(1, (r - 0.78) / 0.12);
        const e = THREE.MathUtils.smootherstep(p, 0, 1);
        
        creamRef.current.position.y = 0.9 + (e * 0.8);
        
        const size = e * 0.5;
        creamRef.current.scale.set(size, size, size);
        creamRef.current.visible = true;
        
        creamRef.current.position.y += Math.sin(time * 3) * 0.05 * e;
        
      } else {
        creamRef.current.visible = false;
      }
    }
    
    if (glassRef.current) {
      const mat = glassRef.current.material as THREE.MeshPhysicalMaterial;
      
      if (r > 0.35 && r < 0.55) {
        const p = (r - 0.35) / 0.2;
        mat.iridescence = THREE.MathUtils.lerp(0.3, 1, Math.sin(p * Math.PI));
      } else {
        mat.iridescence = 0.3;
      }
    }
    
    if (heroTextRef.current) {
      if (r < 0.12) {
        const p = Math.min(1, r / 0.08);
        heroTextRef.current.style.opacity = p.toString();
        heroTextRef.current.style.letterSpacing = `${30 - (p * 20)}px`;
      } else if (r < 0.25) {
        const p = (r - 0.12) / 0.13;
        heroTextRef.current.style.opacity = (1 - p).toString();
      } else {
        heroTextRef.current.style.opacity = "0";
      }
    }
    

    
    if (contentPanelRef.current) {
      if (r > 0.65) {
        const p = Math.min(1, (r - 0.65) / 0.15);
        const e = THREE.MathUtils.smootherstep(p, 0, 1);
        contentPanelRef.current.style.opacity = e.toString();
        contentPanelRef.current.style.transform = `translateX(${100 - (e * 100)}px)`;
      } else {
        contentPanelRef.current.style.opacity = "0";
        contentPanelRef.current.style.transform = "translateX(100px)";
      }
    }
    
    if (ctaRef.current) {
      if (r > 0.92) {
        const p = Math.min(1, (r - 0.92) / 0.08);
        ctaRef.current.style.opacity = p.toString();
        ctaRef.current.style.transform = `translateY(${20 - (p * 20)}px)`;
        ctaRef.current.style.pointerEvents = "auto";
      } else {
        ctaRef.current.style.opacity = "0";
        ctaRef.current.style.pointerEvents = "none";
      }
    }
  });

  return (
    <group ref={groupRef}>
      
      <mesh ref={glassRef} position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 1.4, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.95}
          opacity={1}
          roughness={0.05}
          ior={1.5}
          thickness={1.4}
          transparent
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          iridescence={0.3}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[100, 400]}
        />
      </mesh>
      
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 1.2, 64]} />
        <meshStandardMaterial color="#FBF8F3" roughness={0.5} />
        
        <Decal
          position={[0, 0, 0.91]}
          rotation={[0, 0, 0]}
          scale={[1.8, 1.1, 1]}
          map={bannerTexture}
        />
      </mesh>
      
      <mesh position={[0, 0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.89, 64]} />
        <meshStandardMaterial color="#FBF8F3" roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.89, 64]} />
        <meshStandardMaterial color="#FBF8F3" roughness={0.3} />
      </mesh>
      

      
      {/* Floating Organic Cream Blob */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh ref={creamRef} position={[0, 1.2, 0]} visible={false}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#F5EDE0"
            distort={0.4}
            speed={2}
            roughness={0.15}
            metalness={0.05}
          />
        </mesh>
      </Float>
      
      {/* ===== THE CAP ===== */}
      <group ref={capRef} position={[0, 0.75, 0]}>
        {/* Main Cap Body - GREEN */}
        <mesh castShadow>
          <cylinderGeometry args={[1.05, 1.05, 0.8, 64]} />
          <meshStandardMaterial
            color="#2A5A52"
            metalness={0.5}
            roughness={0.3}
            envMapIntensity={1.5}
          />
        </mesh>
        
        {/* Cap Top Ring */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[1.05, 1.05, 0.06, 64]} />
          <meshStandardMaterial color="#1E4A42" metalness={0.6} roughness={0.25} />
        </mesh>
        
        {/* Cap Center Emboss */}
        <mesh position={[0, 0.43, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.3, 0.5, 64]} />
          <meshStandardMaterial color="#1E4A42" metalness={0.7} roughness={0.2} />
        </mesh>
        
        <mesh position={[0, 0.44, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.8, 1.8]} />
          <meshStandardMaterial 
            map={logoTexture}
            transparent
            alphaTest={0.1}
            roughness={0.05}
            metalness={1.0}
            envMapIntensity={3.0}
            emissive="#FFD700"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
      
      {/* ===== UI OVERLAYS ===== */}
      

      
      <Html fullscreen className="pointer-events-none">
        <div className="absolute inset-0 flex items-end justify-center md:items-center md:justify-end pb-24 md:pb-0 md:pr-20">
          <div
            ref={contentPanelRef}
            className="opacity-0 w-[90%] max-w-sm md:w-[420px]"
            style={{ transform: "translateX(0px)" }}
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-[#D4C5A5]/30 rounded-3xl p-8 md:p-10 shadow-2xl">
              
              <h2 className="text-4xl md:text-5xl font-serif text-[#D4C5A5] mb-2 tracking-wide">
                Amaya
              </h2>
              <p className="text-xs uppercase tracking-[0.4em] text-[#D4C5A5]/60 mb-8 font-light">
                Skin Essentials
              </p>
              
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4C5A5] to-transparent mb-8" />
              
              <p className="text-white/80 text-sm leading-relaxed mb-8 font-light">
                We believe in the power of nature, enhanced by science. 
                Every formulation is a testament to our commitment to 
                purity, potency, and proven results.
              </p>
              
              <div className="space-y-5 mb-8">
                {[
                  { icon: "✦", title: "100% Clean", desc: "No parabens, sulfates, or toxins" },
                  { icon: "✦", title: "Clinically Proven", desc: "Backed by dermatological research" },
                  { icon: "✦", title: "Sustainably Sourced", desc: "Ethically harvested botanicals" },
                  { icon: "✦", title: "Cruelty Free", desc: "Never tested on animals" },
                ].map((belief, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-[#D4C5A5] text-lg mt-0.5">{belief.icon}</span>
                    <div>
                      <p className="text-[#D4C5A5] font-medium text-sm tracking-wide">{belief.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">{belief.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4C5A5]/30 to-transparent mb-6" />
              
              <p className="text-[#D4C5A5] font-serif text-lg italic text-center">
                "Where Nature Meets Elegance"
              </p>
              
            </div>
          </div>
        </div>
      </Html>
      
      <Html fullscreen>
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div
            ref={ctaRef}
            className="opacity-0"
            style={{ transform: "translateY(20px)", pointerEvents: "none" }}
          >
            <button className="group relative px-12 py-4 bg-[#2A5A52] text-white uppercase tracking-[0.3em] text-xs font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(42,90,82,0.5)]">
              <span className="relative z-10">Begin Your Ritual</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4C5A5] to-[#2A5A52] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </Html>
      
    </group>
  );
}
