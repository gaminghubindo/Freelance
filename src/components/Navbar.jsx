import React from "react";
import { UMKM_CONFIG, getWhatsAppUrl } from "../config";
import { useScroll } from "../context/ScrollContext";

/**
 * Komponen Navbar:
 * - Transparan di bagian paling atas.
 * - Berubah menjadi berlatar putih dengan garis tipis dan mengecil sedikit tingginya saat digulir.
 * - Menggunakan state terpusat dari ScrollContext (tanpa menambah event listener baru).
 */
export default function Navbar() {
  const { isScrolled } = useScroll();
  const waUrl = getWhatsAppUrl("Halo kak, saya ingin tanya-tanya seputar produk Kopi Senja Nusantara.");

  return (
    <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* LOGO / NAMA UMKM */}
        <div className="navbar-brand">
          <a href="#" className="navbar-brand-name">
            {UMKM_CONFIG.nama}
          </a>
          <span className="navbar-brand-tagline">
            {UMKM_CONFIG.tagline}
          </span>
        </div>

        {/* TOMBOL CHAT WHATSAPP CEPAT */}
        <div className="navbar-action">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            aria-label="Chat via WhatsApp"
          >
            {/* Ikon WhatsApp SVG Sederhana */}
            <svg
              width="18"
              height="18"
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
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
