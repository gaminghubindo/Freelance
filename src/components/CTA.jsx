import React from "react";
import { UMKM_CONFIG, getWhatsAppUrl } from "../config";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Komponen CTA (Call to Action Penutup):
 * Mengajak calon pembeli untuk langsung menghubungi UMKM via WhatsApp dengan animasi reveal naik 40px.
 */
export default function CTA() {
  const waUrl = getWhatsAppUrl("Halo kak, saya ingin pesan kopi untuk seduh di rumah. Boleh minta rekomendasi varian?");
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`section cta-section reveal-section ${isVisible ? "is-visible" : ""}`}
      aria-label="Ajakan Bertindak"
    >
      <div className="container">
        <div className="cta-box">
          <h2>Siap Menikmati Seduhan Kopi Berkualitas?</h2>
          <p>
            Belum tahu ingin varian apa? Tidak masalah. Admin kami siap membantu 
            merekomendasikan biji kopi yang paling cocok dengan selera dan alat seduh Anda.
          </p>

          <div className="cta-action">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
              style={{ fontSize: "1.05rem", padding: "14px 32px" }}
            >
              {/* Ikon WhatsApp SVG */}
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
              <span>Konsultasi & Pesan via WhatsApp</span>
            </a>
            <span className="cta-note">
              Balasan cepat selama jam operasional ({UMKM_CONFIG.jamBuka})
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
