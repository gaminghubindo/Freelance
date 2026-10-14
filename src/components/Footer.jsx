import React from "react";
import { UMKM_CONFIG } from "../config";

/**
 * Komponen Footer:
 * Menampilkan alamat lengkap, jam operasional, tautan media sosial,
 * serta informasi hak cipta singkat. Data diambil dari src/config.js.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* KOLOM 1: TENTANG UMKM */}
          <div className="footer-col">
            <h3>{UMKM_CONFIG.nama}</h3>
            <p style={{ marginBottom: "8px" }}>
              {UMKM_CONFIG.tagline}
            </p>
            <p>
              Menyediakan biji kopi murni hasil kurasi petani lokal Indonesia. 
              Diroasting segar setiap minggu untuk menjaga karakter rasa dan kehangatan cangkir Anda.
            </p>
          </div>

          {/* KOLOM 2: LOKASI & JAM BUKA */}
          <div className="footer-col">
            <h4>Alamat & Operasional</h4>
            <p style={{ marginBottom: "6px" }}>
              <strong>Alamat:</strong><br />
              {UMKM_CONFIG.alamat}
            </p>
            <p>
              <strong>Jam Operasional:</strong><br />
              {UMKM_CONFIG.jamBuka}
            </p>
          </div>

          {/* KOLOM 3: MEDIA SOSIAL */}
          <div className="footer-col">
            <h4>Media Sosial</h4>
            <p style={{ marginBottom: "10px" }}>
              Ikuti kabar sangrai mingguan & info stok varian kopi kami:
            </p>
            <a
              href={UMKM_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={`Kunjungi Instagram ${UMKM_CONFIG.instagram}`}
            >
              {/* Ikon Instagram SVG */}
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>{UMKM_CONFIG.instagram}</span>
            </a>
          </div>
        </div>

        {/* CATATAN HAK CIPTA DI BAGIAN BAWAH */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {UMKM_CONFIG.nama}. Dibuat dengan cinta untuk memajukan UMKM Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
