import { useEffect, useRef, useState } from "react";

/**
 * Hook Scroll Reveal (IntersectionObserver):
 * Mendeteksi ketika sebuah elemen masuk ke dalam layar pengguna dan memperbarui state isVisible.
 * Animasi otomatis diputar ulang saat elemen masuk kembali ke layar tanpa kedip.
 *
 * @param {object} [options] - Opsi IntersectionObserver (threshold & rootMargin)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Cek prefers-reduced-motion: jika aktif, langsung tampilkan selalu
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    // 2. Observer yang memutar ulang animasi saat masuk dan keluar layar
    const observer = new IntersectionObserver(([entry]) => {
      // Perbarui visibilitas tanpa flickering
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}
