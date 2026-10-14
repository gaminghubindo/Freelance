/**
 * =============================================================================
 * KONFIGURASI ELEMEN DEKORATIF LINGKARAN LATAR BELAKANG
 * =============================================================================
 * Anda dapat menambah, menghapus, atau mengubah posisi, ukuran, warna, serta
 * kecepatan parallax lingkaran di seluruh halaman melalui array konfigurasi ini.
 *
 * Parameter per lingkaran:
 * - id: nama unik lingkaran
 * - ukuran: diameter lingkaran di layar desktop (pixel)
 * - ukuranMobile: diameter lingkaran di layar HP (< 768px)
 * - posisi: posisi CSS (top, bottom, left, right)
 * - tipe: "solid" (berisi warna lembut) atau "outline" (hanya garis tepi tipis)
 * - warna: warna isi lingkaran (abu hangat lembut atau aksen hijau transparan 6-10%)
 * - border: warna & ketebalan garis tepi (1-2px)
 * - speed: rasio pergeseran parallax saat scroll (0.05 - 0.25x)
 * - showMobile: true jika ingin tetap ditampilkan di HP (dibatasi 3 lingkaran di HP)
 */

export const DAFTAR_DEKORASI = {
  // 1. BAGIAN HERO (Kanan Atas & Kiri Bawah)
  hero: [
    {
      id: "hero-lingkaran-kanan",
      ukuran: 420,
      ukuranMobile: 240,
      posisi: { top: "-70px", right: "-100px" },
      tipe: "solid",
      warna: "rgba(47, 93, 80, 0.035)",
      border: "1px solid rgba(47, 93, 80, 0.05)",
      speed: 0.18,
      showMobile: true
    },
    {
      id: "hero-lingkaran-kiri",
      ukuran: 150,
      ukuranMobile: 0,
      posisi: { bottom: "40px", left: "-50px" },
      tipe: "outline",
      warna: "transparent",
      border: "1.5px solid rgba(47, 93, 80, 0.07)",
      speed: -0.10,
      showMobile: false
    }
  ],

  // 2. BAGIAN STATISTIK (Kanan)
  stats: [
    {
      id: "stats-lingkaran-kanan",
      ukuran: 70,
      ukuranMobile: 0,
      posisi: { top: "-20px", right: "6%" },
      tipe: "solid",
      warna: "rgba(47, 93, 80, 0.06)",
      border: "none",
      speed: 0.08,
      showMobile: false
    }
  ],

  // 3. BAGIAN TESTIMONI (Kiri Atas, Sebagian Keluar Layar)
  testimoni: [
    {
      id: "testimoni-lingkaran-kiri",
      ukuran: 390,
      ukuranMobile: 220,
      posisi: { top: "40px", left: "-130px" },
      tipe: "solid",
      warna: "rgba(235, 230, 222, 0.6)",
      border: "1px solid rgba(47, 93, 80, 0.04)",
      speed: 0.14,
      showMobile: true
    }
  ],

  // 4. BAGIAN KEUNGGULAN (Kanan Atas)
  keunggulan: [
    {
      id: "keunggulan-lingkaran-kanan",
      ukuran: 190,
      ukuranMobile: 0,
      posisi: { top: "30px", right: "-60px" },
      tipe: "solid",
      warna: "rgba(47, 93, 80, 0.05)",
      border: "1px solid rgba(47, 93, 80, 0.05)",
      speed: 0.12,
      showMobile: false
    }
  ],

  // 5. BAGIAN FAQ (Kiri Tengah, Outline Elegan)
  faq: [
    {
      id: "faq-lingkaran-kiri",
      ukuran: 260,
      ukuranMobile: 0,
      posisi: { top: "60px", left: "-90px" },
      tipe: "outline",
      warna: "transparent",
      border: "1.5px solid rgba(47, 93, 80, 0.08)",
      speed: -0.11,
      showMobile: false
    }
  ],

  // 6. BAGIAN CTA PENUTUP (Kanan Bawah)
  cta: [
    {
      id: "cta-lingkaran-kanan",
      ukuran: 370,
      ukuranMobile: 210,
      posisi: { bottom: "-80px", right: "-90px" },
      tipe: "solid",
      warna: "rgba(235, 230, 222, 0.65)",
      border: "1px solid rgba(47, 93, 80, 0.05)",
      speed: 0.16,
      showMobile: true
    }
  ]
};
