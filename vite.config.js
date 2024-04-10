import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPurge from 'vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/faq-accordion-fem/',
  plugins: [react(), htmlPurge()]
})
