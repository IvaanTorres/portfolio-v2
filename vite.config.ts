import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(), 
    Components({
      dts: true, // enabled by default if `typescript` is installed
    }),
    Unocss({
    presets: [
      presetAttributify({ /* preset options */}),
      presetUno(),
      // ...custom presets
    ],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        /* 'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core', */
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
  ],
})
