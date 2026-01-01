"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Only show preloader on homepage, v2, or v3
    if (pathname !== "/" && pathname !== "/v2" && pathname !== "/v3") {
      setIsLoading(false);
      return;
    }

    // Lock scroll
    document.body.style.overflow = "hidden";

    // Progress counter with easing
    const duration = 1800;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      // Ease-out curve for more dramatic finish
      const t = currentStep / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.min(100, eased * 100));
      
      if (currentStep >= steps) {
        clearInterval(progressTimer);
      }
    }, intervalTime);

    // End loading - immediate after progress completes
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [pathname]);

  if ((pathname !== "/" && pathname !== "/v2" && pathname !== "/v3") && isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" } 
          }}
        >
          {/* Animated Background Gradient */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, #D4C5A5 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Golden Particles Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#D4C5A5]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Logo with Glow */}
            <motion.div
              className="relative w-24 h-24 mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
              }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#D4C5A5]/30 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Image 
                src="/images/logo.png" 
                alt="Amaya" 
                fill 
                className="object-contain relative z-10"
              />
            </motion.div>

            {/* Brand Name */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="font-serif text-5xl md:text-7xl text-[#D4C5A5] tracking-wider"
                initial={{ y: "100%" }}
                animate={{ 
                  y: 0, 
                  transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 } 
                }}
              >
                AMAYA
              </motion.h1>
            </div>

            {/* Tagline */}
            <div className="overflow-hidden mb-10">
              <motion.p
                className="text-xs md:text-sm uppercase tracking-[0.5em] text-[#D4C5A5]/60 font-light"
                initial={{ y: "100%" }}
                animate={{ 
                  y: 0, 
                  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.6 } 
                }}
              >
                Skin Essentials
              </motion.p>
            </div>

            {/* Progress Bar Container */}
            <motion.div
              className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ 
                opacity: 1, 
                scaleX: 1,
                transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.8 }
              }}
            >
              {/* Progress Fill */}
              <motion.div
                className="absolute inset-0 origin-left"
                style={{
                  background: "linear-gradient(90deg, #D4C5A5, #F5EBD9)",
                  scaleX: progress / 100,
                }}
                transition={{ duration: 0.1 }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Progress Percentage */}
            <motion.div
              className="mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 0.5, delay: 1 }
              }}
            >
              <span className="font-mono text-sm text-[#D4C5A5]/80 tracking-widest">
                {Math.round(progress)}%
              </span>
            </motion.div>

          </div>

          {/* Bottom Decorative Elements */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 1.2 }
            }}
          >
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4C5A5]/50" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4C5A5]/40 font-light">
              Nature Meets Elegance
            </span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4C5A5]/50" />
          </motion.div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-[1px] border-t-[1px] border-[#D4C5A5]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.3 }
            }}
          />
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 border-r-[1px] border-t-[1px] border-[#D4C5A5]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.4 }
            }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 border-l-[1px] border-b-[1px] border-[#D4C5A5]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.5 }
            }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-[1px] border-b-[1px] border-[#D4C5A5]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.6 }
            }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
