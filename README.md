# Freelance — Landing Page Testimoni UMKM (Kopi Senja Nusantara)

Landing page ulasan & testimoni pelanggan untuk UMKM lokal berbasis **React + Vite** (JavaScript murni tanpa framework CSS tambahan).

## ✨ Fitur Utama
- **Desain Hangat & Bersih**: Sesuai estetika toko kopi / UMKM lokal dengan tipografi Google Fonts (*Lora* & *Plus Jakarta Sans*).
- **Integrasi WhatsApp Otomatis**: Tombol pesan langsung mengarah ke WhatsApp dengan format pesan otomatis ter-encode.
- **Efek Scroll-Down Nyata**: Kartu testimoni mengangkat naik 56–68px dengan skala membesar halus (0.92 ke 1.0) saat digulir masuk layar.
- **Parallax Berlapis Ringan**: Hero image & teks bergerak lembut mengikuti scroll (otomatis dinonaktifkan di layar HP & prefers-reduced-motion).
- **Indikator Scroll Progress**: Garis progres 3px di bagian atas halaman.
- **Pita Testimoni Berjalan (Marquee)**: Cuplikan ulasan singkat bergerak horizontal (berhenti saat di-hover).
- **Accordion FAQ Halus**: Animasi tinggi CSS Grid tanpa reflow layout.
- **Slot Gambar & Fallback Otomatis**: Slot foto di Hero, Kenapa Kami, dan Avatar testimoni yang otomatis fallback ke inisial jika foto belum diunggah.

## 🚀 Menjalankan Proyek Secara Lokal

1. Pastikan dependensi sudah terinstal:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan (port dikunci di `http://localhost:5173/`):
   ```bash
   npm run dev
   ```

3. Build untuk produksi:
   ```bash
   npm run build
   ```

## 📁 Struktur Konfigurasi
- `src/config.js`: Nama UMKM, nomor WhatsApp, alamat, jam operasional, dan parameter animasi.
- `src/data/testimoni.js`: Daftar 6 data ulasan pelanggan.
- `src/index.css`: Variabel CSS `:root` untuk warna dan transisi.
- `public/images/`: Folder untuk menaruh foto asli produk & testimoni.
