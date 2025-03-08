import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: 'personal-site',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Chunk external libraries separately
            if (id.includes('vue')) {
              return 'vue';
            }
            if (id.includes('lodash')) {
              return 'lodash';
            }
            return 'vendor'; // General vendor chunk
          }
          return null;
        },
      },
    },
  }
});
