import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Komponen Gambar:
 * - Menjaga rasio aspek tetap (aspect-ratio) untuk mencegah layout jump.
 * - Menggunakan animasi terungkap perlahan (scale 1.08 ke 1 sambil fade-in).
 * - Menampilkan placeholder abu hangat yang rapi jika file gambar belum ada.
 *
 * @param {string} src - Path gambar di public/images/
 * @param {string} alt - Deskripsi gambar
 * @param {string} [aspectRatio="16 / 9"] - Rasio aspek
 * @param {boolean} [priority=false] - Eager loading untuk hero image
 * @param {string} [keterangan="Foto Produk / UMKM"] - Petunjuk placeholder
 * @param {string} [className=""] - Class tambahan
 * @param {object} [style={}] - Style tambahan
 */
export default function Gambar({
  src,
  alt,
  aspectRatio = "16 / 9",
  priority = false,
  keterangan = "Foto Produk / UMKM",
  className = "",
  style = {}
}) {
  const [hasError, setHasError] = useState(false);
  const [containerRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={containerRef}
      className={`gambar-wrapper ${className}`}
      style={{
        aspectRatio: aspectRatio,
        ...style
      }}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          onError={() => setHasError(true)}
          className={`gambar-img ${isVisible ? "is-revealed" : ""}`}
        />
      ) : (
        /* PLACEHOLDER NETRAL & RAPI SAAT FOTO BELUM DIUNGGAH */
        <div
          className={`gambar-placeholder ${isVisible ? "is-revealed" : ""}`}
          role="img"
          aria-label={alt || keterangan}
        >
          <svg
            className="gambar-placeholder-icon"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span className="gambar-placeholder-title">{keterangan}</span>
          <span className="gambar-placeholder-hint">
            Siapkan: <code>{src}</code>
          </span>
        </div>
      )}
    </div>
  );
}
