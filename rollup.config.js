import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.vue', '.ts', '.tsx', '.js', '.jsx'];

const plugins = [
  resolve(
    {
      extensions,
      browser: true,
    },
  ),
  commonjs(),
  typescript(),
  vue(),
];

export default [
  {
    input: './src/index.ts',
    external: ['vue'],
    plugins,
    output: {
      format: 'cjs',
      file: 'dist/vue-ztext.cjs.js',
      sourcemap: false,
      exports: 'named',
    },
  },
  {
    input: './src/index.ts',
    external: ['vue'],
    plugins,
    output: {
      format: 'umd',
      file: 'dist/vue-ztext.js',
      name: 'vue-ztext',
      sourcemap: false,
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
  },
  {
    input: './src/index.ts',
    external: ['vue'],
    plugins: [
      ...plugins,
      terser(),
    ],
    output: {
      format: 'umd',
      file: 'dist/vue-ztext.min.js',
      name: 'vue-ztext',
      sourcemap: false,
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
  },
  {
    input: './src/index.ts',
    external: ['vue'],
    plugins,
    output: {
      format: 'esm',
      file: 'dist/vue-ztext.esm.js',
      sourcemap: false,
    },
  },
];
