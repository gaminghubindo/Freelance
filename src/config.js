/**
 * =============================================================================
 * KONFIGURASI UTAMA UMKM (Kopi Senja Nusantara)
 * =============================================================================
 * Silakan ganti data di bawah ini sesuai dengan informasi bisnis/UMKM Anda.
 * Bagian ini yang menentukan nama, nomor kontak, pesan otomatis WhatsApp,
 * alamat toko, jam buka, dan tautan media sosial.
 */

export const UMKM_CONFIG = {
  // GANTI DENGAN NAMA UMKM ANDA
  nama: "Kopi Senja Nusantara",
  
  // GANTI DENGAN BIDANG USAHA / TAGLINE SINGKAT
  tagline: "Kedai Kopi & Roastery Lokal",

  // GANTI DENGAN NOMOR WHATSAPP ANDA (Gunakan format 62, tanpa tanda + atau spasi)
  // Contoh: 6281234567890 (bukan 081234567890)
  nomorWA: "6281234567890",

  // GANTI DENGAN DRAFT PESAN PEMBUKA SAAT CALON PEMBELI KLIK TOMBOL WHATSAPP
  pesanWA: "Halo kak, saya lihat testimoni di website dan tertarik untuk pesan kopi.",

  // GANTI DENGAN ALAMAT LENGKAP UMKM ANDA
  alamat: "Jl. Melati No. 24, Kotabaru, Yogyakarta",

  // GANTI DENGAN JAM OPERASIONAL TOKO / KEDAI ANDA
  jamBuka: "Senin – Minggu, 08.00 – 21.00 WIB",

  // GANTI DENGAN USERNAME / LINK INSTAGRAM ANDA
  instagram: "@kopisenja.id",
  instagramUrl: "https://instagram.com/kopisenja.id",

  // STATISTIK RINGKAS UNTUK SOCIAL PROOF
  stats: {
    pelangganPuas: "1.500+",
    produkTerjual: "8.200+",
    tahunBerdiri: "2021",
    ratingTeks: "4,9 / 5 dari 200+ ulasan penikmat kopi"
  }
};

/**
 * =============================================================================
 * KONFIGURASI PENGATURAN ANIMASI & PARALLAX
 * =============================================================================
 * Kumpulan variabel untuk mengatur kecepatan, jarak pergeseran, dan jeda animasi.
 * Anda dapat menyesuaikan angka di sini jika ingin efek lebih cepat atau lebih lambat.
 */
export const ANIMATION_CONFIG = {
  // KECEPATAN PARALLAX (Hanya aktif di desktop >= 768px, rasio scroll 0.1 - 0.3x)
  parallaxHeroImage: 0.25,        // Kecepatan gerak gambar hero (bergerak lebih lambat dari scroll)
  parallaxHeroText: 0.14,         // Kecepatan teks hero bergeser saat scroll keluar
  parallaxKeunggulanImage: 0.12,  // Kecepatan gambar keunggulan bergeser di dalam bingkai
  parallaxDecoShape1: 0.16,       // Kecepatan elemen dekoratif latar belakang 1
  parallaxDecoShape2: -0.12,      // Kecepatan elemen dekoratif latar belakang 2

  // JARAK GESER ANIMASI REVEAL (pixel)
  revealTitleDistance: 40,        // Jarak naik judul section (40px)
  revealCardDistance: 30,         // Jarak geser kartu testimoni & keunggulan (30px)

  // JEDA WAKTU ANTAR ELEMEN (milidetik)
  staggerTestimoniDelay: 120,     // Selang waktu kemunculan kartu testimoni (100-150ms)
  staggerKeunggulanDelay: 120,    // Selang waktu kemunculan poin keunggulan

  // SCROLL THRESHOLD (posisi scroll dalam pixel)
  scrollNavbarThreshold: 20,      // Scroll posisi saat navbar berubah latar putih & mengecil
  scrollHeroPassedThreshold: 380, // Scroll posisi saat tombol WA mengambang mulai muncul

  // COUNT UP DURATION (milidetik)
  countUpDuration: 1300           // Durasi perhitungan angka statistik
};

/**
 * Fungsi pembantu untuk membuat link WhatsApp otomatis yang aman.
 * Menghasilkan format: https://wa.me/{nomor}?text={pesan_url_encoded}
 * @param {string} [pesanKustom] - Opsional, jika ingin mengirim pesan yang berbeda untuk tombol tertentu
 * @returns {string} URL WhatsApp siap pakai
 */
export function getWhatsAppUrl(pesanKustom) {
  const teks = pesanKustom || UMKM_CONFIG.pesanWA;
  return `https://wa.me/${UMKM_CONFIG.nomorWA}?text=${encodeURIComponent(teks)}`;
}
