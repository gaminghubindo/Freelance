import React from "react";
import { ScrollProvider } from "./context/ScrollContext";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimoni from "./components/Testimoni";
import Keunggulan from "./components/Keunggulan";
import FAQ from "./components/FAQ";
import MarqueeTestimoni from "./components/MarqueeTestimoni";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TombolWA from "./components/TombolWA";

/**
 * Komponen Utama (App):
 * Menyusun seluruh landing page dalam ScrollProvider tunggal,
 * dilengkapi ScrollProgress bar, Marquee cuplikan testimoni, dan animasi terkoordinasi.
 */
export default function App() {
  return (
    <ScrollProvider>
      <div className="site-wrapper">
        {/* INDIKATOR PROGRES SCROLL (3PX DI ATAS HALAMAN) */}
        <ScrollProgress />

        {/* 1. NAVBAR */}
        <Navbar />

        {/* KONTEN UTAMA */}
        <main id="main-content">
          {/* 2. HERO SECTION */}
          <Hero />

          {/* 3. STATISTIK */}
          <Stats />

          {/* 4. TESTIMONI PELANGGAN */}
          <Testimoni />

          {/* 5. KEUNGGULAN PRODUK */}
          <Keunggulan />

          {/* 6. FAQ (ACCORDION) */}
          <FAQ />

          {/* 7. PITA ULASAN BERJALAN (MARQUEE) */}
          <MarqueeTestimoni />

          {/* 8. AJAKAN PENUTUP (CTA) */}
          <CTA />
        </main>

        {/* 9. FOOTER */}
        <Footer />

        {/* 10. TOMBOL WHATSAPP MENGAMBANG */}
        <TombolWA />
      </div>
    </ScrollProvider>
  );
}
