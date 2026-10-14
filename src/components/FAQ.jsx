import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Komponen FAQ (Pertanyaan yang Sering Diajukan):
 * - Judul section naik 40px dari bawah dengan fade.
 * - Accordion membuka dengan transisi tinggi CSS Grid yang sangat halus tanpa lompatan layout.
 */
export default function FAQ() {
  const [openId, setOpenId] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const faqData = [
    {
      id: 0,
      tanya: "Bagaimana cara memesan kopi di Kopi Senja Nusantara?",
      jawab:
        "Cukup klik tombol 'Pesan via WhatsApp' yang ada di website ini. Anda akan langsung terhubung dengan admin kami. Sebutkan varian biji kopi yang diinginkan dan alamat pengiriman, admin kami akan segera menghitung total beserta ongkos kirimnya."
    },
    {
      id: 1,
      tanya: "Apakah bisa dipesan dalam bentuk bubuk (ground coffee)?",
      jawab:
        "Tentu bisa sekali! Kami menyediakan opsi biji utuh (whole beans) atau digiling gratis sesuai alat seduh Anda, mulai dari giling halus (espresso / tubruk), medium (V60 / aeropress), hingga kasar (French Press / Cold Brew)."
    },
    {
      id: 2,
      tanya: "Berapa lama proses pengiriman ke luar kota / luar pulau?",
      jawab:
        "Pesanan yang masuk sebelum pukul 14.00 WIB akan dikirim pada hari yang sama. Untuk wilayah Pulau Jawa biasanya tiba dalam 1–2 hari kerja, sedangkan luar Jawa sekitar 2–4 hari kerja menggunakan ekspedisi terpercaya dengan nomor resi yang kami bagikan via WhatsApp."
    },
    {
      id: 3,
      tanya: "Bagaimana jika paket saya terima dalam kondisi rusak?",
      jawab:
        "Kenyamanan dan kepuasan Anda adalah prioritas kami. Jika bungkus robek atau paket rusak saat diterima, cukup fotokan paketnya dan kirim ke WhatsApp kami. Kami akan kirimkan paket pengganti baru tanpa biaya tambahan."
    }
  ];

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="section"
      id="faq"
      aria-label="Tanya Jawab"
    >
      <div className="container">
        {/* HEADER SECTION DENGAN NAIK 40PX */}
        <div className={`section-header reveal-title-block ${isVisible ? "is-visible" : ""}`}>
          <span className="section-label">Tanya Jawab</span>
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p className="section-subtitle">
            Ada hal yang ingin Anda ketahui sebelum memesan? Berikut jawaban untuk pertanyaan umum dari pelanggan.
          </p>
        </div>

        {/* ACCORDION DENGAN TRANSISI TINGGI HALUS */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item card-stagger-up ${isVisible ? "is-visible" : ""} ${isOpen ? "is-open" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  type="button"
                  className="faq-button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.tanya}</span>
                  <svg
                    className="faq-icon"
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
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* CONTAINER ANIMASI TINGGI HALUS */}
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.jawab}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
