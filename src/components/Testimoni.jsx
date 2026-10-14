import React from "react";
import { DAFTAR_TESTIMONI } from "../data/testimoni";
import Avatar from "./Avatar";
import Dekorasi from "./Dekorasi";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Komponen Kartu Testimoni Individual:
 * Menggunakan observer mandiri agar animasi naik dan meluncur (scrolldown effect)
 * terpicu tepat saat kartu tersebut masuk ke dalam layar pengguna.
 */
function TestimoniCardItem({ item, index }) {
  // Trigger tepat saat kartu masuk 12% ke dalam layar dari bawah
  const [cardRef, isVisible] = useScrollReveal({
    threshold: 0.12,
    rootMargin: "0px 0px -30px 0px"
  });

  // Tentukan kolom di desktop (0: kiri, 1: tengah, 2: kanan)
  const colIndex = index % 3;
  const colClass =
    colIndex === 0
      ? "card-col-left"
      : colIndex === 1
      ? "card-col-center"
      : "card-col-right";

  // Jeda bertingkat (stagger) 120ms per kolom
  const staggerDelay = colIndex * 120;

  return (
    <article
      ref={cardRef}
      className={`testimoni-card ${colClass} ${isVisible ? "is-visible" : ""}`}
      style={{
        transitionDelay: `${staggerDelay}ms`
      }}
    >
      <div>
        {/* PROFIL PELANGGAN (AVATAR FOTO / INISIAL) */}
        <div className="testimoni-header">
          <Avatar
            foto={item.foto}
            inisial={item.inisial}
            nama={item.nama}
          />
          <div className="testimoni-meta">
            <span className="testimoni-name">{item.nama}</span>
            <span className="testimoni-city">{item.kota}</span>
          </div>
        </div>

        {/* BINTANG RATING */}
        <div
          className="testimoni-stars"
          aria-label={`Rating ${item.rating} dari 5 bintang`}
        >
          {[...Array(item.rating)].map((_, i) => (
            <svg
              key={i}
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        {/* ISI TESTIMONI NATURAL */}
        <p className="testimoni-text">“{item.isi}”</p>
      </div>
    </article>
  );
}

/**
 * Komponen Testimoni:
 * - Judul section naik dengan fade saat scroll.
 * - Setiap kartu ulasan memiliki efek scroll-down yang nyata dan terasakan.
 * - Elemen dekoratif latar belakang menggunakan <Dekorasi section="testimoni" />.
 */
export default function Testimoni() {
  const [headerRef, isHeaderVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      className="section"
      id="testimoni"
      aria-label="Ulasan Pelanggan"
    >
      {/* ELEMEN DEKORATIF LATAR BELAKANG TESTIMONI */}
      <Dekorasi section="testimoni" />

      <div className="container">
        {/* HEADER SECTION DENGAN FADE & NAIK 40PX */}
        <div
          ref={headerRef}
          className={`section-header reveal-title-block ${isHeaderVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">Ulasan Jujur</span>
          <h2 className="section-title">Apa Kata Mereka yang Sudah Menyeduh?</h2>
          <p className="section-subtitle">
            Ulasan nyata tanpa rekayasa dari pelanggan rumahan, barista, dan penikmat kopi nusantara.
          </p>
        </div>

        {/* GRID KARTU TESTIMONI DENGAN SCROLL-DOWN EFFECT YANG NYATA */}
        <div className="testimoni-grid">
          {DAFTAR_TESTIMONI.map((item, index) => (
            <TestimoniCardItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
