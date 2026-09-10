import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/NubeCognitiva/',
  plugins: [react(), tailwindcss()],
  build: {
    // Las secciones ya se dividen con React.lazy(); aquí sólo separamos las
    // dependencias grandes para que el primer chunk sea lo más pequeño posible.
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'motion', test: /node_modules[\\/]framer-motion/ },
            { name: 'forms', test: /node_modules[\\/](react-hook-form|zod|@hookform)/ },
            { name: 'markdown', test: /node_modules[\\/](react-markdown|remark|micromark|mdast|unist|hast|vfile|unified)/ },
            { name: 'vendor', test: /node_modules/ },
          ],
        },
      },
    },
  },
})
