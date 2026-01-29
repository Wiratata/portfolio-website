import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio-website/', // 👈 REQUIRED for GitHub Pages
  plugins: [react(), tailwindcss()],
})
