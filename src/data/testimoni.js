/**
 * =============================================================================
 * DATA TESTIMONI PELANGGAN (Kopi Senja Nusantara)
 * =============================================================================
 * Anda bisa menambah, menghapus, atau mengubah daftar ulasan di bawah ini.
 * Pastikan format objek tetap sama:
 * - id: nomor unik
 * - inisial: 2 huruf inisial nama untuk avatar fallback
 * - nama: nama pelanggan
 * - kota: kota asal pelanggan
 * - rating: angka 1-5
 * - isi: ulasan jujur & natural dari pelanggan
 * - foto: path ke foto pelanggan di public/images/ (fallback ke inisial jika file belum ada)
 */

export const DAFTAR_TESTIMONI = [
  {
    id: 1,
    inisial: "DA",
    nama: "Dimas Anggara",
    kota: "Bandung",
    rating: 5,
    foto: "/images/avatar-1.jpg",
    isi: "Awalnya coba pesan beans Flores Bajawa 200 gram buat seduhan V60 di rumah. Aromanya beneran semerbak pas bungkus baru dibuka, notes manis alaminya kerasa banget. Sekarang sudah repeat order ketiga kalinya buat stok ngantor."
  },
  {
    id: 2,
    inisial: "SP",
    nama: "Sarah Pratiwi",
    kota: "Jakarta Selatan",
    rating: 5,
    foto: "/images/avatar-2.jpg",
    isi: "Paling suka sama adminnya yang fast response di WhatsApp. Ditanya-tanya rekomendasi kopi yang aman di lambung dijelasin sabar banget. Packing rapi pakai kardus tebal, kantongnya ada valve kedap udara jadi aromanya tetap fresh."
  },
  {
    id: 3,
    inisial: "BS",
    nama: "Budi Santoso",
    kota: "Yogyakarta",
    rating: 5,
    foto: "/images/avatar-3.jpg",
    isi: "Kopi Senja ini langganan saya kalau butuh beans buat espresso base di kedai kecil saya. Biji kopinya matang merata, crema tebal, dan nggak gosong. Senang bisa support roastery lokal yang kualitasnya konsisten gini."
  },
  {
    id: 4,
    inisial: "NR",
    nama: "Nabila Rahma",
    kota: "Surabaya",
    rating: 5,
    foto: "/images/avatar-4.jpg",
    isi: "Pengiriman ke Surabaya cuma 2 hari kerja. Begitu diseduh tubruk pagi-pagi, aromanya wangi satu rumah. Segar banget rasanya, beda jauh sama kopi sachet atau kopi supermarket yang aromanya udah hilang."
  },
  {
    id: 5,
    inisial: "HW",
    nama: "Hendra Wijaya",
    kota: "Semarang",
    rating: 5,
    foto: "/images/avatar-5.jpg",
    isi: "Harganya jujur masuk akal buat ukuran specialty coffee fresh roast. Tanggal sangrainya jelas tertera di stiker kemasan (baru 4 hari waktu saya terima paketnya). Rasanya clean, aftertaste-nya manis."
  },
  {
    id: 6,
    inisial: "ML",
    nama: "Maya Lestari",
    kota: "Bogor",
    rating: 5,
    foto: "/images/avatar-6.jpg",
    isi: "Awalnya beli buat kado ulang tahun suami yang hobi seduh manual brew. Ternyata suami suka banget sama varian Gayo Honey-nya. Bakal langganan terus nih!"
  }
];
