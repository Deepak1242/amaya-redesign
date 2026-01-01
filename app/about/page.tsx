"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FEFEFA]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="https://images.unsplash.com/photo-1556228720-1957be91942e?auto=format&fit=crop&q=80&w=2000" 
             alt="Forest Landscape" 
             fill 
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-2xl px-6">
          <FadeIn>
             <h1 className="text-6xl md:text-8xl font-serif text-[#D4C5A5] mb-6">Origins</h1>
             <p className="text-xl text-[#FEFEFA]/80 leading-relaxed font-light">
               Born from the earth. Perfected by science. <br/>
               The story of Amaya is the story of nature itself.
             </p>
          </FadeIn>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <FadeIn>
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#D4C5A5]">The Founder's Vision</h2>
                  <div className="w-12 h-[1px] bg-[#D4C5A5]" />
                  <p className="text-[#FEFEFA]/60 leading-loose">
                    "I wanted to create something that felt like a ritual, not just a routine. Skincare should be a moment of pause—a sacred connection between you and the natural world."
                  </p>
                  <p className="text-[#FEFEFA]/60 leading-loose">
                    We travel across the globe to source the rarest botanicals, ensuring that every drop of Amaya captures the essence of its origin. From the saffron fields of Kashmir to the rose valleys of Bulgaria.
                  </p>
                  
                  <div className="pt-8">
                    <span className="font-serif italic text-2xl text-[#D4C5A5]">Amaya Devi</span>
                    <span className="block text-xs uppercase tracking-widest text-[#FEFEFA]/40 mt-1">Founder & CEO</span>
                  </div>
                </div>
             </FadeIn>
             
             <FadeIn delay={0.2} direction="left">
               <div className="relative aspect-[4/5]">
                 <div className="absolute inset-0 border border-[#D4C5A5]/20 translate-x-4 translate-y-4 rounded-sm" />
                 <div className="absolute inset-0 bg-[#111] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1200" 
                      alt="Founder Portrait" 
                      fill 
                      className="object-cover"
                    />
                 </div>
               </div>
             </FadeIn>
           </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-32 bg-[#D4C5A5]/5 text-center">
         <div className="container mx-auto px-6">
            <h3 className="text-2xl md:text-4xl font-serif text-[#D4C5A5] leading-relaxed max-w-4xl mx-auto">
              "We believe that true luxury is conscious. It is the awareness of what we put on our skin, and the impact we leave on the earth."
            </h3>
         </div>
      </section>

      <Footer />
    </main>
  );
}
