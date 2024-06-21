import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
      react()
  ],
  server: {
    port: 4200
  },
  root: 'src/jsMain/typescript',
  publicDir: '../resources',
  build: {
    outDir: "../../../dist"
  }
})
