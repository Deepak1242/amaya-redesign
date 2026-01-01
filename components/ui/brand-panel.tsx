"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function BrandPanel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for scroll events dispatched from 3D scene
    const handleScrollComplete = () => setIsVisible(true);
    const handleScrollReverse = () => setIsVisible(false);

    window.addEventListener('scrollComplete', handleScrollComplete);
    window.addEventListener('scrollReverse', handleScrollReverse);
    
    return () => {
      window.removeEventListener('scrollComplete', handleScrollComplete);
      window.removeEventListener('scrollReverse', handleScrollReverse);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 flex items-center gap-12 transition-all duration-700 
        left-1/2 -translate-x-1/2 bottom-24 md:bottom-auto md:left-auto md:translate-x-0 md:top-[45%] md:-translate-y-1/2 md:right-[15%] lg:right-[20%]
        ${isVisible ? "opacity-100 translate-y-0 md:translate-y-[-50%]" : "opacity-0 translate-y-10 md:translate-y-[-50%] md:translate-x-20 pointer-events-none"}
      }`}
    >
      <div className="hidden md:block w-[2px] h-72 bg-gradient-to-b from-transparent via-[#D4C5A5] to-transparent" />
      
      <div className="w-72 md:w-80 bg-black/50 backdrop-blur-2xl border border-[#D4C5A5]/30 rounded-3xl p-6 md:p-8 shadow-2xl">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="relative w-8 h-8">
            <Image 
              src="/images/logo.png" 
              alt="Amaya Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="w-[1px] h-5 bg-[#D4C5A5]/50" />
          <span className="text-sm font-serif tracking-widest text-[#D4C5A5] uppercase">
            Amaya
          </span>
        </div>
        
        <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4C5A5] to-transparent mb-5" />
        
        <p className="text-white/80 text-xs leading-relaxed mb-5 font-light">
          We believe in the power of nature, enhanced by science. 
          Every formulation is a testament to purity and proven results.
        </p>
        
        <div className="space-y-3 mb-5">
          {[
            { icon: "✦", title: "100% Clean", desc: "No parabens or toxins" },
            { icon: "✦", title: "Clinically Proven", desc: "Dermatologist approved" },
            { icon: "✦", title: "Sustainably Sourced", desc: "Ethical botanicals" },
            { icon: "✦", title: "Cruelty Free", desc: "Never tested on animals" },
          ].map((belief, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#D4C5A5] text-xs mt-0.5">{belief.icon}</span>
              <div>
                <p className="text-[#D4C5A5] font-medium text-xs tracking-wide">{belief.title}</p>
                <p className="text-white/40 text-[10px]">{belief.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-[#D4C5A5]/80 font-serif text-sm italic text-center border-t border-[#D4C5A5]/20 pt-4 mb-6">
          "Where Nature Meets Elegance"
        </p>

        <Link 
          href="/shop" 
          className="block w-full text-center py-3 bg-[#D4C5A5] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 rounded-sm"
        >
          Explore Us
        </Link>
        
      </div>
    </div>
  );
}

