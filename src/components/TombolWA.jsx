import React from "react";
import { getWhatsAppUrl } from "../config";
import { useScroll } from "../context/ScrollContext";

/**
 * Komponen TombolWA (Floating WhatsApp Button):
 * - Muncul dengan transisi halus hanya setelah pengguna menggulir melewati Hero section.
 * - Berdenyut lembut (pulse) sesekali untuk menarik perhatian secara sopan tanpa mengganggu.
 * - Berhenti berdenyut dan sedikit naik saat disentuh kursor (hover).
 */
export default function TombolWA() {
  const { isPastHero } = useScroll();
  const waUrl = getWhatsAppUrl("Halo kak, saya lihat testimoni di website dan tertarik untuk pesan.");

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-wa ${isPastHero ? "is-visible" : ""}`}
      aria-label="Hubungi kami melalui WhatsApp"
      title="Chat WhatsApp"
    >
      <svg
        className="floating-wa-icon"
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
      <span>Chat Kami</span>
    </a>
  );
}
