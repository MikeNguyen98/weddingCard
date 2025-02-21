import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.yoursite\.com\//,
            handler: 'CacheFirst',
            options: { cacheName: 'cdn-assets' },
          },
        ],
      },
    }),
  ],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      routes: `${path.resolve(__dirname, './src/routes/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
    },
  },
});
