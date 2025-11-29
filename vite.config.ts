import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lumi-ailikxin/',   // ⭐ 仓库名，前后都有斜杠
  plugins: [react()],
})
