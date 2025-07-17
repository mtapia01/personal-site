import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-site/',
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
        assetFileNames: (assetInfo) => {
          if (/\.(ttf|eot)$/.test(assetInfo.name ?? '')) {
            return 'ignored/[name][extname]'; // put them in a junk folder
          }
          return 'assets/[name]-[hash][extname]';
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vuetify')) return 'vuetify';
            if (id.includes('material-design-icons')) return 'mdi';
            // Chunk external libraries separately
            if (id.includes('vue')) {
              return 'vue';
            }
            if (id.includes('lodash')) {
              return 'lodash';
            }
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // General vendor chunk
          }
          return null;
        },
      },
    },
  }
});
