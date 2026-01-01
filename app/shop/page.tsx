"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory || (activeCategory === "Oils" && p.category.includes("Oil"))); // Handle "Oils" covering Body Oil/Hair Oil if needed, or strict matching.

  // Strict matching might be better based on data.ts categories: Serums, Oils, Creams, Cleansers
  // Let's do a more robust filter
  const finalProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  const categories = ["All", "Serums", "Oils", "Creams", "Cleansers"];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-20">
      <Navbar />

      {/* Page Header - Luxury Dark Gradient */}
      <div className="relative py-32 mb-12 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4C5A5]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <h1 className="relative text-5xl md:text-7xl font-serif text-[#D4C5A5] mb-6 tracking-tight">
          The Collection
        </h1>
        <p className="relative text-[#FEFEFA]/60 max-w-lg mx-auto leading-relaxed text-sm md:text-base tracking-wide">
          Clinically proven formulations designed to restore your skin's natural brilliance.
        </p>
      </div>

      {/* Filters (Luxury Minimalist) */}
      <div className="container mx-auto px-6 mb-20 flex items-center justify-center gap-8 text-xs md:text-sm font-medium border-b border-[#D4C5A5]/10 pb-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-6 -mb-6.5 whitespace-nowrap uppercase tracking-widest px-2 transition-colors ${
              activeCategory === cat 
                ? "text-[#D4C5A5] border-b border-[#D4C5A5]" 
                : "text-[#FEFEFA]/40 hover:text-[#D4C5A5]"
            }`}
          >
            {cat === "All" ? "All Products" : cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {finalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {finalProducts.length === 0 && (
          <div className="text-center py-20 text-[#FEFEFA]/40 italic">
            No products found in this category.
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
