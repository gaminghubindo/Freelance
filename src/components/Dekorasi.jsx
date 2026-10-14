import React from "react";
import { DAFTAR_DEKORASI } from "../config/dekorasi";
import { useScroll } from "../context/ScrollContext";

/**
 * Komponen Dekorasi:
 * Menampilkan lingkaran dekoratif latar belakang yang bergerak dengan parallax ringan saat scroll.
 * - Menggunakan konfigurasi terpusat dari src/config/dekorasi.js.
 * - Otomatis menyusut dan dikurangi menjadi 3 lingkaran di layar HP (< 768px).
 * - Otomatis mematikan pergerakan parallax jika prefers-reduced-motion aktif atau di HP.
 * - Dilengkapi pointer-events: none dan aria-hidden="true" agar tidak mengganggu interaksi/aksesibilitas.
 *
 * @param {string} section - Nama bagian ("hero", "stats", "testimoni", "keunggulan", "faq", "cta")
 */
export default function Dekorasi({ section }) {
  const { scrollY, isDesktop, isReducedMotion } = useScroll();
  const items = DAFTAR_DEKORASI[section];

  if (!items || items.length === 0) return null;

  const canAnimateParallax = isDesktop && !isReducedMotion;

  return (
    <div className="dekorasi-container" aria-hidden="true">
      {items.map((item) => {
        // Di layar HP (< 768px), lewati lingkaran yang tidak ditandai showMobile
        if (!isDesktop && !item.showMobile) {
          return null;
        }

        // Tentukan ukuran: di HP pakai ukuranMobile, di desktop pakai ukuran penuh
        const diameter = isDesktop ? item.ukuran : (item.ukuranMobile || Math.round(item.ukuran * 0.6));

        // Hitung pergeseran vertikal parallax (hanya di desktop dan bukan reduced-motion)
        const translateY = canAnimateParallax
          ? (scrollY * item.speed).toFixed(1)
          : 0;

        return (
          <div
            key={item.id}
            className={`dekorasi-lingkaran dekorasi-${item.tipe}`}
            style={{
              width: `${diameter}px`,
              height: `${diameter}px`,
              backgroundColor: item.warna,
              border: item.border || "none",
              transform: `translateY(${translateY}px)`,
              ...item.posisi
            }}
          />
        );
      })}
    </div>
  );
}
