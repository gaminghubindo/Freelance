import React from "react";
import { UMKM_CONFIG, ANIMATION_CONFIG, getWhatsAppUrl } from "../config";
import Gambar from "./Gambar";
import { useScroll } from "../context/ScrollContext";

/**
 * Komponen Hero:
 * - Parallax berlapis: teks bergerak sedikit lebih cepat lalu memudar halus saat scroll keluar.
 * - Gambar hero bergerak lebih lambat dari scroll (0.25x) memberikan sensasi kedalaman fisik.
 * - Elemen dekoratif latar belakang bergerak dengan kecepatan berbeda.
 * - Otomatis dimatikan pada layar HP (<768px) dan prefers-reduced-motion.
 */
export default function Hero() {
  const { scrollY, isDesktop, isReducedMotion } = useScroll();
  const waUrl = getWhatsAppUrl();

  // Hitung parallax hanya jika di desktop dan tidak ada request reduced motion
  const canAnimateParallax = isDesktop && !isReducedMotion;

  // Parallax teks hero: bergerak sedikit dan memudar lembut
  const textTranslateY = canAnimateParallax
    ? Math.min(scrollY * ANIMATION_CONFIG.parallaxHeroText, 60)
    : 0;
  const textOpacity = canAnimateParallax
    ? Math.max(1 - scrollY / 480, 0)
    : 1;

  // Parallax gambar hero: bergerak lebih lambat dari scroll (sekitar 0.25x)
  const imageTranslateY = canAnimateParallax
    ? Math.min(scrollY * ANIMATION_CONFIG.parallaxHeroImage, 90)
    : 0;

  // Parallax bentuk dekoratif latar
  const deco1TranslateY = canAnimateParallax
    ? scrollY * ANIMATION_CONFIG.parallaxDecoShape1
    : 0;
  const deco2TranslateY = canAnimateParallax
    ? scrollY * ANIMATION_CONFIG.parallaxDecoShape2
    : 0;

  return (
    <section className="section hero">
      {/* ELEMEN DEKORATIF LATAR BELAKANG DENGAN PARALLAX BERBEDA (HALUS & TRANSPARAN) */}
      <div
        className="hero-deco-shape hero-deco-1"
        style={{ transform: `translateY(${deco1TranslateY.toFixed(1)}px)` }}
        aria-hidden="true"
      />
      <div
        className="hero-deco-shape hero-deco-2"
        style={{ transform: `translateY(${deco2TranslateY.toFixed(1)}px)` }}
        aria-hidden="true"
      />

      <div className="container hero-content">
        {/* KONTEN TEKS HERO DENGAN PARALLAX FADE OUT SAAT SCROLL */}
        <div
          className="hero-text-wrap"
          style={{
            transform: `translateY(${textTranslateY.toFixed(1)}px)`,
            opacity: textOpacity
          }}
        >
          {/* BADGE PENGANTAR */}
          <div className="hero-pill">
            <span className="hero-pill-badge">Roastery Lokal</span>
            <span>•</span>
            <span>Sangrai Segar Setiap Pekan</span>
          </div>

          {/* H1 UTAMA */}
          <h1 className="hero-title">
            Kopi Asli Petani Nusantara, Disangrai Segar Langsung ke Cangkir Anda.
          </h1>

          {/* SUBJUDUL SATU KALIMAT */}
          <p className="hero-desc">
            Nikmati rasa kopi nusantara yang bersih dan seimbang tanpa pengawet, 
            diproses dengan jujur untuk menemani obrolan hangat Anda setiap hari.
          </p>

          {/* TOMBOL AKSI UTAMA KE WHATSAPP */}
          <div className="hero-cta">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              style={{ fontSize: "1.05rem", padding: "12px 28px" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Pesan Kopi via WhatsApp</span>
            </a>
          </div>

          {/* RATING RINGKAS (SOCIAL PROOF) */}
          <div className="hero-rating">
            <div className="stars-row" aria-label="Rating 5 bintang">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span>{UMKM_CONFIG.stats.ratingTeks}</span>
          </div>
        </div>

        {/* SLOT GAMBAR BESAR HERO DENGAN PARALLAX BERGERAK LEBIH LAMBAT */}
        <div
          className="hero-media-container"
          style={{
            transform: `translateY(${imageTranslateY.toFixed(1)}px)`
          }}
        >
          <Gambar
            src="/images/hero-kopi.jpg"
            alt="Suasana kedai dan seduhan segar Kopi Senja Nusantara"
            aspectRatio="16 / 9"
            priority={true}
            keterangan="Foto Utama: Suasana Kedai / Seduhan Kopi"
            className="hero-media-image"
          />
        </div>
      </div>
    </section>
  );
}
