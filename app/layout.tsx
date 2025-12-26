import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import React from "react";
import content from "@/lib/content";
import PointerGlow from "@/components/PointerGlow";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: `${content.name} — ${content.title}`,
  description: content.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen antialiased bg-primary text-white font-primary`}
      >
        <a href="#content" className="skip-link sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Toaster />
        <PointerGlow />
        <Header />
        <Transition>
          <main id="content" className="min-h-screen">
            {children}
          </main>
        </Transition>
      </body>
    </html>
  );
}
