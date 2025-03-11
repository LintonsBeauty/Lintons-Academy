import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import Sitemap from 'vite-plugin-sitemap'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    imagetools(),

    tsconfigPaths(),
    Sitemap({
      hostname: 'https://lintonsacademy.com',
      dynamicRoutes: [
        '/',
        '/hair-school',
        '/beauty-school',
        '/contact-us',
        '/about-us',
        '/careers',
      ],
    }),
  ],
})
