import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite' // 添加此行
import Components from 'unplugin-vue-components/vite' // 添加此行
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 添加此行

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      // 添加此配置
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 添加此配置
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 7100,
  },
})
