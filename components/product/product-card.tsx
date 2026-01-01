"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

import { FadeIn } from "@/components/animations/fade-in";

export function ProductCard({ product, className }: ProductCardProps) {
  // Safe price formatting for Indian Rupee
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <FadeIn>
      <div className={cn("group relative flex flex-col h-full", className)}>
        {/* Image Container with Hover Effect */}
        <Link href={`/product/${product.slug}`} className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6 cursor-pointer border border-[#D4C5A5]/10 group-hover:border-[#D4C5A5]/50 transition-colors duration-500">
          {/* Tag Badge */}
          {product.tags.includes("Best Seller") && (
            <span className="absolute top-3 left-3 bg-[#D4C5A5] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10">
              Best Seller
            </span>
          )}
          
          {/* Product Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] group-hover:scale-105 transition-transform duration-700 ease-out">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
            />
          </div>

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
            <Button className="w-full bg-[#D4C5A5]/90 backdrop-blur-md text-black border border-[#D4C5A5] hover:bg-[#D4C5A5] hover:text-black transition-colors uppercase tracking-wider text-xs font-bold h-10 shadow-lg">
              Add to Cart - {formatPrice(product.price)}
            </Button>
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col flex-grow text-center group-hover:opacity-100 transition-opacity">
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-xl text-[#FEFEFA] group-hover:text-[#D4C5A5] transition-colors mb-2 tracking-wide">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-[#FEFEFA]/40 uppercase tracking-widest mb-3 line-clamp-1">
              {product.category}
          </p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-2 opacity-60">
             <Star size={12} fill="currentColor" className="text-[#D4C5A5]" />
             <span className="text-xs text-[#FEFEFA]/40 font-medium">{product.rating} ({product.reviews})</span>
          </div>

        </div>
      </div>
    </FadeIn>
  );
}
