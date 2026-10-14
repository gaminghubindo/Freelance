import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Kunci port agar selalu tetap di http://localhost:5173/ (tidak berubah-ubah)
  },
  preview: {
    port: 5173,
    strictPort: true, // Pastikan mode preview juga selalu menggunakan port 5173 yang sama
  }
})
