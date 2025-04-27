import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const tailwindcss = await import('@tailwindcss/vite').then(m => m.default)
  
  return {
    plugins: [react(), tailwindcss()],
    envPrefix: 'VITE_',
    root: '.',
    publicDir: 'public',
    server: {
      port: 5200,
      open: true,
    },
  }
})