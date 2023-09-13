import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/rent-cars-react',
  resolve: {
    alias: { src: '/src' }
  }
});
