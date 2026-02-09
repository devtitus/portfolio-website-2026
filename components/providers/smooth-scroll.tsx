"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * SmoothScrollProvider with performance optimizations:
 * - Respects prefers-reduced-motion preference
 * - Pauses animation loop when page is hidden (tab inactive)
 * - Uses stable refs to avoid unnecessary re-renders
 * - Properly cancels rAF on cleanup
 */
const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);

  // rAF loop function with pause capability
  const animate = useCallback((time: number) => {
    if (!isRunningRef.current || !lenisRef.current) return;

    lenisRef.current.raf(time);
    rafIdRef.current = requestAnimationFrame(animate);
  }, []);

  const startLoop = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    rafIdRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stopLoop = useCallback(() => {
    isRunningRef.current = false;
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  // Scroll restoration on route change
  const pathname = usePathname();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Skip Lenis entirely if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis
    const lenisInstance = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenisInstance;

    // Make Lenis instance globally accessible for modal interactions
    (window as any).lenis = lenisInstance;

    // Handle visibility change - pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    // Handle reduced motion preference change
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stopLoop();
        // Clean up global reference
        delete (window as any).lenis;
        lenisInstance.destroy();
        lenisRef.current = null;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    // Start the animation loop only if page is visible
    if (!document.hidden) {
      startLoop();
    }

    return () => {
      stopLoop();
      // Clean up global reference
      delete (window as any).lenis;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, [startLoop, stopLoop]);

  return <>{children}</>;
};

export default SmoothScrollProvider;
