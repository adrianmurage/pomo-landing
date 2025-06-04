import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adrianmurage.github.io',
  base: '/pomo-landing',
  trailingSlash: 'always',
  outDir: './dist',
  build: {
    format: 'directory'
  },
  integrations: []
});