import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      overlay: false,
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"', dev: { logLevel: ['warning', 'error']}},
    })
  ],
})
