import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  minify: true,
  splitting: false,
  sourcemap: true,
  external: ['react', 'react-dom', 'styled-components'],
});
