// components/SmoothScrollWrapper.tsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // seconds — controls scroll easing duration
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      // 'smooth' is no longer an option here
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
