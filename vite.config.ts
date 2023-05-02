/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { include: ['react', 'react-dom', 'vitest'] },
  test: { include: ['**/{test,spec}.{ts,tsx}'], environment: 'jsdom' },
})
