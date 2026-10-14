import React, { createContext, useContext, useState, useEffect } from "react";
import { ANIMATION_CONFIG } from "../config";

const ScrollContext = createContext({
  scrollY: 0,
  scrollProgress: 0,
  isScrolled: false,
  isPastHero: false,
  isDesktop: true,
  isReducedMotion: false
});

/**
 * ScrollProvider:
 * Memastikan HANYA ADA SATU scroll listener di seluruh aplikasi.
 * Menggunakan requestAnimationFrame dan { passive: true } untuk performa optimal 60fps tanpa lagging.
 */
export function ScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollProgress: 0,
    isScrolled: false,
    isPastHero: false,
    isDesktop: typeof window !== "undefined" ? window.innerWidth >= 768 : true,
    isReducedMotion: false
  });

  useEffect(() => {
    // 1. Cek prefers-reduced-motion dari sistem pengguna
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReduced = motionQuery.matches;

    const handleMotionChange = (e) => {
      isReduced = e.matches;
      setScrollState((prev) => ({ ...prev, isReducedMotion: isReduced }));
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
    }

    let ticking = false;

    // 2. Fungsi tunggal yang dieksekusi per frame browser
    const updateScrollMetrics = () => {
      const y = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalDocHeight > 0 ? Math.min(Math.max((y / totalDocHeight) * 100, 0), 100) : 0;
      const isWide = window.innerWidth >= 768;

      setScrollState({
        scrollY: y,
        scrollProgress: progress,
        isScrolled: y > ANIMATION_CONFIG.scrollNavbarThreshold,
        isPastHero: y > ANIMATION_CONFIG.scrollHeroPassedThreshold,
        isDesktop: isWide,
        isReducedMotion: isReduced
      });

      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollMetrics);
        ticking = true;
      }
    };

    // 3. Listener tunggal dengan passive: true
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateScrollMetrics();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionChange);
      }
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  );
}

/**
 * Hook untuk membaca metrik scroll yang dibagikan
 */
export function useScroll() {
  return useContext(ScrollContext);
}
