import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend:{
          colors:{
            'brand-blue': '#8EACCD', //color pastel del logo
            'brand-dark': '#1A1A1A',//negro suabe para texto
          },
        },
      },
    }),
  ],
})
