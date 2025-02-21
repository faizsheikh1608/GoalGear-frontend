import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Ensures assets are loaded correctly
  build: {
    outDir: 'dist', // Ensures correct output directory
  },
  server: {
    historyApiFallback: true, // Fixes SPA routing issues
  },
});
