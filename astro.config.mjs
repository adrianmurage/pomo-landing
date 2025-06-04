import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adrianmurage.github.io',
  base: '/pomo-landing',
  output: 'static',
  integrations: [],
  build: {
    assets: 'assets',
    client: 'client',
  },
});