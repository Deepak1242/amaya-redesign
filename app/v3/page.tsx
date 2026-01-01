import { Navbar } from "@/components/layout/navbar";
import { ScrollyScene } from "@/components/3d/scrolly-scene";
import { BrandPanel } from "@/components/ui/brand-panel";

export default function HomeV3() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Fixed Golden Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Full-screen 3D Scrollytelling Experience */}
      <section className="relative h-screen w-full">
        <ScrollyScene />
        
        {/* Brand Panel - appears on scroll */}
        <BrandPanel />
        
        {/* Scroll Progress Indicator */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300"
              aria-label={`Act ${dot}`}
            />
          ))}
        </div>
        
        {/* Scroll Hint - Bottom */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 animate-pulse">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Scroll</p>
        </div>
      </section>
    </main>
  );
}

