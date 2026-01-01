import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { FadeIn } from "@/components/animations/fade-in";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { HeroScene } from "@/components/3d/hero-scene";

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      {/* Hero Section - 3D Experience */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        
        {/* 3D Background Layer */}
        <HeroScene />
        
        {/* Content Layer (Overlay) */}
        <div className="relative z-10 text-center max-w-5xl px-6 pointer-events-none">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif text-[12vw] md:text-[9vw] leading-[0.85] text-[var(--color-forest)] tracking-tighter mb-6 drop-shadow-sm mix-blend-multiply">
              Amaya <span className="italic font-light">Skin</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pointer-events-auto">
              <p className="text-lg md:text-xl text-[var(--color-charcoal)]/80 max-w-xs text-left md:text-right font-medium leading-tight mix-blend-multiply">
                Clinically Backed.<br/>Botanically Sourced.
              </p>
              <div className="h-px w-12 bg-black/20 hidden md:block" />
              <Button size="lg" className="rounded-none h-14 px-8 text-sm uppercase tracking-widest bg-[var(--color-forest)] hover:bg-[#2A524D] text-white backdrop-blur-sm" asChild>
                <Link href="/shop">Explore Collection</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-forest)]">Scroll</span>
        </div>
      </section>

      <Marquee text="Science • Soul • Beauty • Ritual •" speed={20} className="text-[var(--color-charcoal)]/30" />

      {/* Philosophy Section - Split View */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              {/* Image Placeholder - Editorial Shot */}
              <div className="relative aspect-[4/5] bg-[#D4C5A5]/20 overflow-hidden group">
                 <div className="absolute inset-0 bg-neutral-200" />
                 <Image 
                    src="/images/hero-texture.png" 
                    alt="Editorial Texture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                 />
              </div>
            </FadeIn>

            <FadeIn direction="left">
               <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#D4C5A5] mb-6">The Philosophy</span>
               <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-forest)] mb-8 leading-tight">
                 We believe in <br/> <span className="italic">conscious</span> efficacy.
               </h2>
               <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
                 Our formulas bridge the gap between ancient botanical wisdom and modern clinical science. No fillers, just potent actives designed to respect your skin barrier.
               </p>
               
               <ul className="space-y-4 mb-10">
                 {["Dermatologist Tested", "Cruelty Free", "Vegan Formulas"].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-sm uppercase tracking-wider font-medium text-[var(--color-forest)]">
                     <span className="w-1.5 h-1.5 bg-[#D4C5A5] rounded-full" /> {item}
                   </li>
                 ))}
               </ul>

               <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-forest)] border-b border-[var(--color-forest)] pb-1 hover:text-[#D4C5A5] hover:border-[#D4C5A5] transition-colors">
                 Read Our Story <ArrowRight size={16} />
               </Link>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Featured Product - Full Width Parallax */}
      <section className="relative py-40 overflow-hidden bg-[var(--color-forest)] text-[#FEFEFA]">
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-20">
               <div className="flex-1 order-2 md:order-1">
                 <FadeIn>
                   <div className="flex items-center gap-2 text-[#D4C5A5] mb-6">
                     <Star fill="currentColor" size={16} />
                     <Star fill="currentColor" size={16} />
                     <Star fill="currentColor" size={16} />
                     <Star fill="currentColor" size={16} />
                     <Star fill="currentColor" size={16} />
                     <span className="ml-2 text-xs uppercase tracking-widest opacity-80">500+ Reviews</span>
                   </div>
                   <h2 className="text-5xl md:text-7xl font-serif mb-8">Bliss Serum</h2>
                   <p className="text-xl opacity-80 mb-10 max-w-lg font-light leading-relaxed">
                     The cult-favorite Vitamin C complex that delivers visible radiance in just 7 days.
                   </p>
                   <Button size="lg" className="rounded-none bg-[#FEFEFA] text-[var(--color-forest)] hover:bg-[#D4C5A5] border-none px-12 h-14 uppercase tracking-widest text-xs font-bold" asChild>
                     <Link href="/product/bliss-advance-face-serum">Shop Now</Link>
                   </Button>
                 </FadeIn>
               </div>
               
               {/* Floating Bottle Image */}
               <div className="flex-1 order-1 md:order-2 flex justify-center">
                 <FadeIn direction="up" delay={0.2}>
                    <div className="relative w-80 h-[500px]">
                       <Image 
                         src="/images/bliss-serum.png" 
                         alt="Bliss Serum Editorial" 
                         fill
                         className="object-cover shadow-2xl"
                       />
                    </div>
                 </FadeIn>
               </div>
            </div>
         </div>
      </section>
      
      <Footer />
    </main>
  );
}
