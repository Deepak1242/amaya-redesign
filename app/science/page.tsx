"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FEFEFA]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4C5A5]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="block text-[#D4C5A5] text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Our Philosophy
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#D4C5A5] mb-8 leading-tight">
              Clinical Precision. <br/> <span className="italic text-[#FEFEFA]">Botanical Soul.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#FEFEFA]/60 leading-relaxed max-w-2xl mx-auto">
              We bridge the gap between ancient Ayurvedic wisdom and modern dermatological science. No fillers, just potent, bio-active formulations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 border-y border-[#D4C5A5]/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { label: "Natural Origin", value: "98%" },
              { label: "Clinically Proven", value: "100%" },
              { label: "Sustainably Sourced", value: "A+" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 border border-[#D4C5A5]/10 rounded-2xl bg-[#D4C5A5]/5 backdrop-blur-sm">
                  <div className="text-5xl md:text-6xl font-serif text-[#D4C5A5] mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-[#FEFEFA]/50">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <FadeIn direction="right">
                <div className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image 
                    src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=1200" 
                    alt="Saffron Ingredients" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#D4C5A5]/10 mix-blend-overlay" />
                </div>
              </FadeIn>
            </div>
            
            <div className="flex-1 space-y-8">
              <FadeIn direction="left">
                <h2 className="text-4xl font-serif text-[#D4C5A5]">The Gold Standard</h2>
                <div className="space-y-6">
                  {[
                    { title: "Kashmiri Saffron", desc: "The world's most expensive spice, known for its potent antioxidant properties and ability to brighten complexion." },
                    { title: "Pure Gold", desc: "Colloidal gold helps improve skin elasticity and stimulates cellular regeneration." },
                    { title: "Hyaluronic Acid", desc: "Multi-molecular weight hydration that penetrates deep into the dermis." }
                  ].map((item, i) => (
                    <div key={i} className="border-l border-[#D4C5A5]/30 pl-6">
                      <h3 className="text-lg font-serif text-[#FEFEFA] mb-2">{item.title}</h3>
                      <p className="text-[#FEFEFA]/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
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
