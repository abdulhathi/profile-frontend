import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'static', // source folder
          dest: '', // copy into dist root
        },
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 80,
  },
})
