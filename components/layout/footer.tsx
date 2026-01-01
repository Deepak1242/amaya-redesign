import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-[#FEFEFA] pt-20 pb-10 border-t border-[#D4C5A5]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif uppercase tracking-widest mb-6 text-[#D4C5A5]">Amaya</h3>
            <p className="text-[#FEFEFA]/60 text-sm leading-relaxed max-w-xs">
              Clinically backed. Botanically sourced. 
              Elevating your daily ritual with science and soul.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#D4C5A5]">Shop</h4>
            <ul className="space-y-4 text-sm text-[#FEFEFA]/60">
              <li><Link href="/shop/all" className="hover:text-[#D4C5A5] transition-colors">All Products</Link></li>
              <li><Link href="/shop/serums" className="hover:text-[#D4C5A5] transition-colors">Serums</Link></li>
              <li><Link href="/shop/moisturizers" className="hover:text-[#D4C5A5] transition-colors">Moisturizers</Link></li>
              <li><Link href="/shop/sets" className="hover:text-[#D4C5A5] transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#D4C5A5]">Company</h4>
            <ul className="space-y-4 text-sm text-[#FEFEFA]/60">
              <li><Link href="/about" className="hover:text-[#D4C5A5] transition-colors">Our Story</Link></li>
              <li><Link href="/ingredients" className="hover:text-[#D4C5A5] transition-colors">Ingredients</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#D4C5A5] transition-colors">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4C5A5] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#D4C5A5]">Newsletter</h4>
            <p className="text-[#FEFEFA]/60 text-sm mb-4">
              Join our list for 10% off your first order.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-[#D4C5A5]/30 px-0 py-2 w-full focus:outline-none focus:border-[#D4C5A5] transition-colors text-sm text-[#D4C5A5] placeholder:text-[#FEFEFA]/20"
              />
              <Button variant="ghost" className="text-xs uppercase tracking-widest text-[#D4C5A5] hover:bg-[#D4C5A5] hover:text-black">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Amaya Skin Essentials. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
