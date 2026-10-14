import React from "react";
import { useScroll } from "../context/ScrollContext";

/**
 * Komponen ScrollProgress:
 * Menampilkan garis progres tipis (3px) warna aksen di bagian paling atas halaman.
 * Menggunakan CSS transform: scaleX() untuk akselerasi GPU 60fps tanpa memicu layout-reflow.
 */
export default function ScrollProgress() {
  const { scrollProgress, isReducedMotion } = useScroll();

  // Matikan jika pengguna meminta reduced-motion
  if (isReducedMotion) return null;

  return (
    <div
      className="scroll-progress-bar"
      style={{
        transform: `scaleX(${scrollProgress / 100})`
      }}
      aria-hidden="true"
    />
  );
}
