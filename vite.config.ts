import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'prototype/app.html'),
        dashboard: resolve(__dirname, 'prototype/dashboard.html'),
        linkinbio: resolve(__dirname, 'prototype/linkinbio.html'),
      },
    },
  },
});
