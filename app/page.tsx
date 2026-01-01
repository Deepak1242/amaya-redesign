"use client";

import { Navbar } from "@/components/layout/navbar";
import { BrandPanel } from "@/components/ui/brand-panel";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ScrollyScene = dynamic(() => import("@/components/3d/scrolly-scene").then((mod) => mod.ScrollyScene), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0A0A0A]" /> // Prevent white flash
});

export default function Home() {
  const [showDiscover, setShowDiscover] = useState(true);

  useEffect(() => {
    // Hide 'Discover' when scroll reaches the end
    const handleScrollComplete = () => setShowDiscover(false);
    const handleScrollReverse = () => setShowDiscover(true);

    window.addEventListener('scrollComplete', handleScrollComplete);
    window.addEventListener('scrollReverse', handleScrollReverse);
    
    return () => {
      window.removeEventListener('scrollComplete', handleScrollComplete);
      window.removeEventListener('scrollReverse', handleScrollReverse);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <section className="relative h-screen w-full">
        <ScrollyScene />
        
        <BrandPanel />
        
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300"
              aria-label={`Act ${dot}`}
            />
          ))}
        </div>
        
        <div 
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center animate-bounce duration-[2000ms] transition-opacity duration-500 ${
            showDiscover ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4C5A5] mb-2 font-medium">Discover</p>
          <ChevronDown className="text-[#D4C5A5] w-6 h-6 opacity-80" strokeWidth={1} />
        </div>
      </section>
    </main>
  );
}
