"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "The Art of Slow Beauty",
    excerpt: "Why rushing your skincare routine does more harm than good. Rediscover the meditative power of touch.",
    category: "Rituals",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1570172619643-c8c201d3298a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Ingredient Spotlight: Saffron",
    excerpt: "Known as 'Red Gold', this potent spice has been the secret of royalty for centuries. Here is what science says.",
    category: "Science",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Sustainability Beyond the Bottle",
    excerpt: "How we are reducing our footprint through regenerative farming and zero-waste packaging initiatives.",
    category: "Sustainability",
    date: "Sep 15, 2025",
    image: "https://images.unsplash.com/photo-1542601906990-24d4c16419d9?auto=format&fit=crop&q=80&w=800"
  }
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FEFEFA]">
      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-20 text-center">
         <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif text-[#D4C5A5] mb-6">The Journal</h1>
            <div className="w-16 h-[1px] bg-[#D4C5A5]/30 mx-auto" />
         </FadeIn>
      </div>

      {/* Featured Article */}
      <section className="container mx-auto px-6 mb-20">
         <FadeIn direction="up">
           <div className="relative aspect-[21/9] w-full group cursor-pointer overflow-hidden border border-[#D4C5A5]/20 rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2000" 
                alt="Featured Article" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
                 <span className="text-[#D4C5A5] text-xs font-bold uppercase tracking-widest mb-4 block">Featured Story</span>
                 <h2 className="text-3xl md:text-5xl font-serif text-[#FEFEFA] mb-6 leading-tight group-hover:text-[#D4C5A5] transition-colors">
                   Ayurveda for the Modern Soul
                 </h2>
                 <p className="text-[#FEFEFA]/70 mb-8 text-lg">
                   How to integrate ancient dosha-balancing practices into your busy city lifestyle without feeling overwhelmed.
                 </p>
                 <Button variant="outline" className="border-[#D4C5A5] text-[#D4C5A5] hover:bg-[#D4C5A5] hover:text-black uppercase tracking-widest text-xs">Read Article</Button>
              </div>
           </div>
         </FadeIn>
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-6 pb-32">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {articles.map((article) => (
               <FadeIn key={article.id}>
                  <Link href={`/journal/${article.id}`} className="group block">
                     <div className="relative aspect-[3/4] mb-6 overflow-hidden border border-[#D4C5A5]/10">
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                     </div>
                     <div className="flex items-center gap-4 mb-3 text-xs uppercase tracking-widest text-[#D4C5A5]/60">
                        <span>{article.category}</span>
                        <span className="w-1 h-1 bg-[#D4C5A5]/60 rounded-full" />
                        <span>{article.date}</span>
                     </div>
                     <h3 className="text-2xl font-serif text-[#FEFEFA] mb-3 group-hover:text-[#D4C5A5] transition-colors">
                       {article.title}
                     </h3>
                     <p className="text-[#FEFEFA]/40 text-sm leading-relaxed line-clamp-3">
                       {article.excerpt}
                     </p>
                  </Link>
               </FadeIn>
            ))}
         </div>
      </section>

      <Footer />
    </main>
  );
}
