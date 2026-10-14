import React, { useState, useEffect } from "react";
import { UMKM_CONFIG, ANIMATION_CONFIG } from "../config";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Dekorasi from "./Dekorasi";

/**
 * Hook Count-Up:
 * Menghitung naik angka secara mulus dari 0 ke target saat elemen terlihat.
 * Otomatis diputar ulang saat elemen masuk kembali ke layar.
 */
function useCountUp(targetNumber, isVisible, duration = ANIMATION_CONFIG.countUpDuration, start = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Jika tidak terlihat, kembalikan ke 0 agar siap diputar ulang saat terlihat lagi
    if (!isVisible) {
      setValue(0);
      return;
    }

    // Hormati pengaturan prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(targetNumber);
      return;
    }

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (targetNumber - start) * easedProgress);
      setValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, targetNumber, duration, start]);

  return value;
}

/**
 * Komponen Stats:
 * Menampilkan 3 metrik sederhana dengan animasi count-up dan fade-in naik 40px saat terlihat di layar.
 */
export default function Stats() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.2 });

  const countPelanggan = useCountUp(1500, isVisible, 1200, 0);
  const countProduk = useCountUp(8200, isVisible, 1400, 0);
  const countTahun = useCountUp(2021, isVisible, 1000, 2000);

  const formatRibu = (num) => num.toLocaleString("id-ID");

  return (
    <section
      ref={sectionRef}
      className={`stats-section reveal-section ${isVisible ? "is-visible" : ""}`}
      aria-label="Statistik Toko"
    >
      {/* ELEMEN DEKORATIF LATAR BELAKANG STATISTIK */}
      <Dekorasi section="stats" />

      <div className="container">
        <div className="stats-grid">
          {/* STAT 1: PELANGGAN PUAS */}
          <div className="stat-item">
            <div className="stat-number">
              {isVisible ? `${formatRibu(countPelanggan)}+` : "0+"}
            </div>
            <div className="stat-label">Pelanggan Puas di Seluruh Indonesia</div>
          </div>

          {/* STAT 2: PRODUK TERJUAL */}
          <div className="stat-item">
            <div className="stat-number">
              {isVisible ? `${formatRibu(countProduk)}+` : "0+"}
            </div>
            <div className="stat-label">Kantong Kopi Segar Terkirim</div>
          </div>

          {/* STAT 3: TAHUN BERDIRI */}
          <div className="stat-item">
            <div className="stat-number">
              Sejak {isVisible ? (countTahun || 2021) : "2021"}
            </div>
            <div className="stat-label">Konsisten Menjaga Mutu Sangrai</div>
          </div>
        </div>
      </div>
    </section>
  );
}
