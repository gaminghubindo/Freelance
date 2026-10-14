import React, { useState } from "react";

/**
 * Komponen Avatar:
 * Menampilkan foto pelanggan jika file tersedia di public/images/avatar-X.jpg.
 * Jika file belum ada atau gagal dimuat, otomatis fallback ke inisial nama
 * dengan lingkaran warna netral hangat yang rapi.
 *
 * File yang dapat Anda siapkan (opsional):
 * - avatar-1.jpg s/d avatar-6.jpg di folder public/images/
 */
export default function Avatar({ foto, inisial, nama }) {
  const [hasError, setHasError] = useState(false);

  if (foto && !hasError) {
    return (
      <div className="avatar avatar-has-image">
        <img
          src={foto}
          alt={`Foto ulasan ${nama}`}
          loading="lazy"
          className="avatar-img"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div className="avatar" aria-label={`Inisial ${nama}`}>
      {inisial}
    </div>
  );
}
