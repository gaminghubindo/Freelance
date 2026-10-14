import React from "react";
import Gambar from "./Gambar";
import { ANIMATION_CONFIG } from "../config";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useScroll } from "../context/ScrollContext";

/**
 * Komponen Keunggulan (Kenapa Pilih Kami):
 * - Judul section naik 40px dari bawah dengan fade.
 * - Gambar bergeser pelan di dalam bingkainya (parallax halus dengan overflow hidden).
 * - 3 kartu nilai jual muncul satu per satu dengan geser naik bertahap (stagger).
 */
export default function Keunggulan() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });
  const { scrollY, isDesktop, isReducedMotion } = useScroll();

  // Parallax gambar di dalam bingkai (hanya di desktop, dibatasi -24px s/d +24px)
  const canAnimateParallax = isDesktop && !isReducedMotion;
  const imageInnerTranslate = canAnimateParallax
    ? Math.max(Math.min((scrollY - 1100) * ANIMATION_CONFIG.parallaxKeunggulanImage, 24), -24)
    : 0;

  const keunggulanItems = [
    {
      id: 1,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      judul: "Langsung dari Petani Lokal",
      deskripsi:
        "Bekerja sama erat dengan petani di Aceh Gayo, Kintamani, Flores, dan Temanggung demi menjaga mutu dan kesejahteraan petani kita."
    },
    {
      id: 2,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      judul: "Sangrai Segar Mingguan",
      deskripsi:
        "Bukan stok timbunan berbulan-bulan di rak. Semua biji disangrai dalam batch kecil secara rutin dengan tanggal sangrai yang transparan."
    },
    {
      id: 3,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      judul: "Kemasan Valve & Ziplock",
      deskripsi:
        "Menggunakan kantong foil dengan one-way degassing valve dan ziplock praktis agar aroma kopi terlindungi dari paparan oksigen luar."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="section"
      id="keunggulan"
      aria-label="Keunggulan Kami"
    >
      <div className="container">
        {/* HEADER SECTION DENGAN NAIK 40PX */}
        <div className={`section-header reveal-title-block ${isVisible ? "is-visible" : ""}`}>
          <span className="section-label">Kenapa Kami</span>
          <h2 className="section-title">Mengapa Memilih Kopi Senja Nusantara?</h2>
          <p className="section-subtitle">
            Komitmen kami untuk menyajikan biji kopi berkualitas dengan proses yang jujur dan transparan.
          </p>
        </div>

        {/* LAYOUT DENGAN FOTO PENDUKUNG & 3 KARTU */}
        <div className="keunggulan-layout">
          {/* FOTO PENDUKUNG BERGESER DI DALAM BINGKAI OVERFLOW HIDDEN */}
          <div className="keunggulan-media-frame">
            <div
              className="keunggulan-media-inner"
              style={{
                transform: `translateY(${imageInnerTranslate.toFixed(1)}px)`
              }}
            >
              <Gambar
                src="/images/keunggulan-kopi.jpg"
                alt="Biji kopi pilihan dan proses roasting Kopi Senja Nusantara"
                aspectRatio="4 / 3"
                priority={false}
                keterangan="Foto Pendukung: Proses Sangrai / Biji Kopi"
              />
            </div>
          </div>

          {/* DAFTAR 3 KARTU MUNCUL SATU PER SATU DENGAN GESER NAIK */}
          <div className="keunggulan-cards-col">
            {keunggulanItems.map((item, index) => (
              <div
                key={item.id}
                className={`keunggulan-card card-stagger-up ${isVisible ? "is-visible" : ""}`}
                style={{
                  transitionDelay: `${index * ANIMATION_CONFIG.staggerKeunggulanDelay}ms`
                }}
              >
                <div className="keunggulan-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="keunggulan-title">{item.judul}</h3>
                  <p className="keunggulan-desc">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
