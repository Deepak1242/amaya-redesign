import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Star, Truck, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { FadeIn } from "@/components/animations/fade-in";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  
  // Find related products (same category, excluding current)
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FEFEFA]">
      <Navbar />
      
      {/* Product Main Section */}
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Gallery (Left) */}
          <div className="relative aspect-[4/5] bg-[#111] border border-[#D4C5A5]/10 rounded-sm overflow-hidden sticky top-32">
             {/* Tag */}
             {product.tags.includes("Best Seller") && (
                <span className="absolute top-6 left-6 bg-[#D4C5A5] text-black text-xs font-bold uppercase tracking-widest px-3 py-1.5 z-10">
                  Best Seller
                </span>
             )}
             
             {/* Product Image */}
             <Image 
               src={product.image} 
               alt={product.name} 
               fill 
               className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
             />
          </div>

          {/* Details (Right) */}
          <div className="py-8">
             <FadeIn>
                {/* Breadcrumbs */}
                <div className="text-xs text-[#D4C5A5]/60 uppercase tracking-widest mb-8 flex gap-2">
                   <Link href="/shop" className="hover:text-[#D4C5A5] transition-colors">Shop</Link> / 
                   <span className="text-[#D4C5A5]">{product.category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-[#FEFEFA] mb-6 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-8">
                   <div className="flex text-[#D4C5A5] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                         <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-[#D4C5A5]/20"} />
                      ))}
                   </div>
                   <span className="text-xs text-[#FEFEFA]/40 uppercase tracking-widest">{product.reviews} Reviews</span>
                </div>

                <div className="text-3xl font-serif text-[#D4C5A5] mb-8 flex items-baseline gap-4">
                  <span>{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                     <span className="text-lg text-[#FEFEFA]/20 line-through decoration-1 font-sans">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>

                <p className="text-[#FEFEFA]/70 leading-relaxed mb-10 text-lg font-light max-w-lg">
                  {product.description}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-3 gap-4 mb-12 pb-12 border-b border-[#D4C5A5]/10">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="text-center p-4 bg-[#D4C5A5]/5 border border-[#D4C5A5]/10 rounded-sm">
                       <span className="block text-[10px] font-bold uppercase tracking-widest text-[#D4C5A5]/60 mb-2">Benefit</span>
                       <span className="text-xs font-medium text-[#FEFEFA]">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="space-y-6 mb-16">
                   <Button className="w-full h-14 text-sm font-bold uppercase tracking-[0.2em] bg-[#D4C5A5] text-black hover:bg-[#FEFEFA] hover:text-black transition-all duration-300">
                     Add to Cart - {formatPrice(product.price)}
                   </Button>
                   <p className="text-center text-xs text-[#FEFEFA]/40 flex justify-center gap-8">
                     <span className="inline-flex items-center gap-2"><Truck size={14} className="text-[#D4C5A5]"/> Free Shipping</span>
                     <span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-[#D4C5A5]"/> 30-Day Guarantee</span>
                   </p>
                </div>

                {/* Ingredients & Use */}
                <div className="space-y-10">
                   <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-[#D4C5A5]">
                        <Leaf size={14} /> Key Ingredients
                      </h3>
                      <div className="flex flex-wrap gap-2">
                         {product.ingredients.map((ing, i) => (
                            <span key={i} className="text-xs border border-[#D4C5A5]/20 px-4 py-2 text-[#FEFEFA]/80 rounded-full">
                               {ing}
                            </span>
                         ))}
                      </div>
                   </div>
                   
                   <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#D4C5A5]">Ritual</h3>
                      <p className="text-sm text-[#FEFEFA]/60 leading-loose max-w-md">
                        Apply 2-3 drops to clean skin morning and night. Massage gently in upward circular motions until fully absorbed. Inhale deeply to ground yourself.
                      </p>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {related.length > 0 && (
         <section className="py-24 border-t border-[#D4C5A5]/10">
            <div className="container mx-auto px-6">
              <FadeIn>
                 <div className="flex items-end justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#D4C5A5]">Complete The Ritual</h2>
                    <Link href="/shop" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#FEFEFA]/40 hover:text-[#D4C5A5] transition-colors">
                       View All <ArrowRight size={14} />
                    </Link>
                 </div>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {related.map(p => (
                   <ProductCard key={p.id} product={p} />
                 ))}
              </div>
            </div>
         </section>
      )}

      <Footer />
    </main>
  );
}
