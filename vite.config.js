import { defineConfig } from 'vite';
const path = require('path');
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, './source/javascript'),
      '@parts': path.resolve(__dirname, './source/scss/partials'),
      '@styles': path.resolve(__dirname, './source/scss'),
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './')
    }
  }
});