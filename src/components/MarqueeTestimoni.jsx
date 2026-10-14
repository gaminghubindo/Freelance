import React from "react";
import { DAFTAR_TESTIMONI } from "../data/testimoni";

/**
 * Komponen MarqueeTestimoni:
 * Menampilkan pita ulasan singkat pelanggan yang bergerak pelan secara horizontal.
 * - Berhenti otomatis saat di-hover oleh kursor.
 * - Otomatis berhenti/static jika pengguna mengaktifkan prefers-reduced-motion.
 * - Menambah kesan dinamis dan hidup tanpa terlihat norak.
 */
export default function MarqueeTestimoni() {
  // Cuplikan ulasan singkat
  const highlights = [
    { nama: "Dimas A.", kota: "Bandung", teks: "Aromanya beneran semerbak pas bungkus baru dibuka" },
    { nama: "Sarah P.", kota: "Jakarta", teks: "Admin fast response dan packing rapi pakai valve" },
    { nama: "Budi S.", kota: "Yogyakarta", teks: "Kualitas sangrai konsisten, crema tebal & nggak gosong" },
    { nama: "Nabila R.", kota: "Surabaya", teks: "Pengiriman cepat 2 hari, wangi segar satu rumah" },
    { nama: "Hendra W.", kota: "Semarang", teks: "Tanggal sangrai jelas, rasanya clean & aftertaste manis" },
    { nama: "Maya L.", kota: "Bogor", teks: "Varian Gayo Honey-nya nikmat banget buat manual brew" }
  ];

  // Gandakan array agar perulangan horizontal berjalan tanpa jeda
  const marqueeItems = [...highlights, ...highlights];

  return (
    <div className="marquee-wrapper" aria-label="Ulasan Singkat Berjalan">
      <div className="marquee-track">
        {marqueeItems.map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-quote">“{item.teks}”</span>
            <span className="marquee-author">— {item.nama} ({item.kota})</span>
            <span className="marquee-separator">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
