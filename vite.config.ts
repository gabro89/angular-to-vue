import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: {
      host: 'localhost',
  },
    proxy: {
      '/api': 'https://dsp-health-upscale-api-upscale.azure-api.net/',
    }
  },
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
  ],
})
