"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FEFEFA]">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-end justify-between border-b border-[#D4C5A5]/20 pb-8 mb-12 gap-6">
            <div>
               <h1 className="text-4xl font-serif text-[#D4C5A5] mb-2">My Account</h1>
               <p className="text-[#FEFEFA]/60">Welcome back, Traveler.</p>
            </div>
            <Button variant="outline" className="border-[#D4C5A5]/50 text-[#D4C5A5] hover:bg-[#D4C5A5] hover:text-black">Log Out</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
             {/* Sidebar Nav */}
             <div className="space-y-1">
                {["Dashboard", "Orders", "Addresses", "Wisdom (Saved)", "Settings"].map((item, i) => (
                   <button 
                     key={item}
                     className={`w-full text-left py-3 px-4 text-sm uppercase tracking-widest transition-colors ${i === 0 ? 'bg-[#D4C5A5]/10 text-[#D4C5A5] border-l-2 border-[#D4C5A5]' : 'text-[#FEFEFA]/40 hover:text-[#FEFEFA] hover:bg-white/5'}`}
                   >
                     {item}
                   </button>
                ))}
             </div>

             {/* Main Content */}
             <div className="md:col-span-3 space-y-8">
                {/* Recent Orders */}
                <div className="p-8 border border-[#D4C5A5]/20 bg-[#D4C5A5]/5 rounded-sm">
                   <h2 className="text-xl font-serif text-[#FEFEFA] mb-6">Recent Orders</h2>
                   
                   <div className="space-y-6">
                      <div className="flex justify-between items-center pb-6 border-b border-[#D4C5A5]/10">
                         <div>
                            <span className="block text-sm font-bold text-[#D4C5A5] mb-1">#ORD-2938</span>
                            <span className="text-xs text-[#FEFEFA]/60">Placed on Oct 24, 2025</span>
                         </div>
                         <div className="text-right">
                           <span className="block text-sm font-medium text-[#FEFEFA] mb-1">Rs. 3,499</span>
                           <span className="inline-block px-2 py-1 bg-[#D4C5A5]/20 text-[#D4C5A5] text-[10px] uppercase tracking-wider rounded-sm">In Transit</span>
                         </div>
                      </div>
                      
                      <div className="text-center pt-2">
                         <button className="text-xs uppercase tracking-widest text-[#D4C5A5] hover:text-white transition-colors">View All Orders</button>
                      </div>
                   </div>
                </div>

                {/* Profile Snapshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-6 border border-[#D4C5A5]/20 rounded-sm">
                      <h3 className="text-lg font-serif text-[#FEFEFA] mb-4">Shipping Address</h3>
                      <p className="text-sm text-[#FEFEFA]/60 leading-relaxed">
                        Deepak Bhagat<br/>
                        12, Golden Palm Residency<br/>
                        Mumbai, Maharashtra 400050<br/>
                        India
                      </p>
                      <button className="mt-4 text-xs uppercase tracking-widest text-[#D4C5A5] hover:text-white">Edit</button>
                   </div>
                   
                   <div className="p-6 border border-[#D4C5A5]/20 rounded-sm">
                      <h3 className="text-lg font-serif text-[#FEFEFA] mb-4">Personal Profile</h3>
                      <p className="text-sm text-[#FEFEFA]/60 leading-relaxed">
                        deepak@example.com<br/>
                        +91 98765 43210<br/>
                        Birthday: Jan 15
                      </p>
                      <button className="mt-4 text-xs uppercase tracking-widest text-[#D4C5A5] hover:text-white">Edit</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
