"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-[#D4C5A5]/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          className="lg:hidden p-2 -ml-2 text-[#D4C5A5]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="relative w-8 h-8">
            <Image 
              src="/images/logo.png" 
              alt="Amaya Logo" 
              fill 
              className="object-contain"
            />
          </div>
          
          <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-[#D4C5A5] to-transparent" />
          
          <span className="text-xl font-serif tracking-[0.3em] font-light text-[#D4C5A5] uppercase">
            Amaya
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/shop"
            className="text-sm font-medium tracking-wide text-[#D4C5A5]/80 hover:text-[#D4C5A5] transition-colors uppercase"
          >
            Shop
          </Link>
          {["Science", "About", "Journal"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-[#D4C5A5]/80 hover:text-[#D4C5A5] transition-colors uppercase"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block p-2 hover:bg-[#D4C5A5]/10 rounded-full transition-colors">
            <Search size={20} className="stroke-[1.5] text-[#D4C5A5]" />
          </button>
          
          <Link href="/account" className="hidden sm:block p-2 hover:bg-[#D4C5A5]/10 rounded-full transition-colors">
            <User size={20} className="stroke-[1.5] text-[#D4C5A5]" />
          </Link>

          <button className="p-2 relative hover:bg-[#D4C5A5]/10 rounded-full transition-colors">
            <ShoppingBag size={20} className="stroke-[1.5] text-[#D4C5A5]" />
            <span className="absolute top-1 right-0 w-2 h-2 bg-[#D4C5A5] rounded-full ring-2 ring-black" />
          </button>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-[#D4C5A5]/20 p-6 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-2">
          {["Shop", "Science", "About", "Journal", "Account"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg font-medium py-2 border-b border-[#D4C5A5]/10 text-[#D4C5A5]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
