import { defineConfig } from 'vite'
import { mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.js'


export default mergeConfig(
  viteConfig,
  defineConfig({
    test:{
      globals: true,
      environment: 'jsdom',
      css: false
    }
  })
);
