import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', //  <---  Change this to '/'
  build: {
    outDir: 'dist',
  },
  server: {
    headers: {
      'Content-Type': 'text/javascript', // This is for local development only
    },
    historyApiFallback: true,
  },
});