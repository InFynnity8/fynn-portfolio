"use client";

import React, { useEffect } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function PointerGlow() {
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX + window.scrollX + "px";
      const y = e.clientY + window.scrollY + "px";
      document.documentElement.style.setProperty("--pointer-x", x);
      document.documentElement.style.setProperty("--pointer-y", y);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  if (reduce) return null;

  return <div className="pointer-glow bg-white/20" aria-hidden="true" />;
}
