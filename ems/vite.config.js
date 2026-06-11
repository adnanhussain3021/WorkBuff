import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: '0.0.0.0', // Important for cloud environments
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:5001',
          changeOrigin: true
        }
      }
    },
    define: {
      // Ensure env vars are always available in production builds
      'import.meta.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(
        env.VITE_CLERK_PUBLISHABLE_KEY || ''
      ),
      'import.meta.env.VITE_API_URL': JSON.stringify("")
    },
  }
})
