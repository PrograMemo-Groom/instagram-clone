import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: 3000
  },
  build: {
    minify: "terser", // 압축 최적화
    terserOptions: {
      format: {
        comments: false, // 주석 제거 옵션
      },
      compress: {
        drop_console: false, // console 제거
        drop_debugger: false, // debugger 제거
      }
    },
    sourcemap: false, // source map 비활성화
  }
})
