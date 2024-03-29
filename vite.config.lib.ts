import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'ZText',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `vue-ztext.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
