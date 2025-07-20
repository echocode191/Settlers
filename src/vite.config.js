import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'assets/logo.png'],
      manifest: {
        name: 'Settlers Inn',
        short_name: 'Settlers',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d1117',
        theme_color: '#0d1117',
        icons: [
          {
            src: 'assets/logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
            },
          },
          {
            urlPattern: ({ request }) =>
              ['style', 'script', 'image'].includes(request.destination),
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});
