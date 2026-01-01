import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google"; // Changed Inter to Jost
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({ // Configured Jost
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amaya Skin Essentials | Clinically Backed, Botanically Sourced.",
  description: "Premium skincare for the modern minimalist. Science-backed formulasmeet rigorous purity standards.",
};

import SmoothScroll from "@/components/ui/smooth-scroll";
import { Preloader } from "@/components/ui/preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          jost.variable, // Applied Jost variable
          cormorant.variable,
          "antialiased min-h-screen flex flex-col font-sans" // Added font-sans default
        )}
      >
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
