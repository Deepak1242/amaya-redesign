"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({ text, speed = 20, className, reverse = false }: MarqueeProps) {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap border-y border-[var(--color-charcoal)]/10 bg-white py-4">
      <motion.div
        className={cn("flex min-w-full font-serif text-4xl md:text-6xl uppercase tracking-tighter text-[var(--color-charcoal)]/10 font-bold", className)}
        animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
      <motion.div
        className={cn("absolute top-4 flex min-w-full font-serif text-4xl md:text-6xl uppercase tracking-tighter text-[var(--color-charcoal)]/10 font-bold", className)}
        animate={{ x: reverse ? ["-100%", "0%"] : ["100%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </motion.div>
    </div>
  );
}
