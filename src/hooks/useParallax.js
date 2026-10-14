import { useEffect, useRef } from "react";

/**
 * Hook Parallax Ringan:
 * Menggerakkan elemen sedikit lebih lambat dari scroll (maksimal 30-36px).
 *
 * Fitur keselamatan:
 * - Menggunakan requestAnimationFrame dan transform translateY (tanpa background-attachment).
 * - Otomatis dimatikan pada layar di bawah 768px (mobile) agar tetap mulus dan hemat baterai.
 * - Otomatis dimatikan jika sistem mendeteksi preferensi "prefers-reduced-motion".
 *
 * @param {number} [speed=0.1] - Kecepatan gerakan parallax (0.05 - 0.15)
 * @param {number} [maxOffset=36] - Batas jarak pergeseran maksimum dalam pixel
 * @returns {React.RefObject} ref untuk dipasang pada elemen container/gambar
 */
export function useParallax(speed = 0.1, maxOffset = 36) {
  const ref = useRef(null);

  useEffect(() => {
    // 1. Cek preferensi aksesibilitas pengguna (prefers-reduced-motion)
    const mediaQueryMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQueryMotion.matches) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!ref.current) {
            ticking = false;
            return;
          }

          // 2. Matikan di perangkat mobile / tablet kecil (< 768px)
          if (window.innerWidth < 768) {
            ref.current.style.transform = "translateY(0px)";
            ticking = false;
            return;
          }

          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // 3. Hanya hitung saat elemen berada di sekitar viewport
          if (rect.top < windowHeight && rect.bottom > 0) {
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const delta = elementCenter - viewportCenter;

            // Batasi pergeseran maksimal 30-36px
            let offset = -delta * speed;
            if (offset > maxOffset) offset = maxOffset;
            if (offset < -maxOffset) offset = -maxOffset;

            ref.current.style.transform = `translateY(${offset.toFixed(1)}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed, maxOffset]);

  return ref;
}
