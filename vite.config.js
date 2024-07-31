import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://onesuchdan.github.io/OneSuchDaniel.github.io",
  plugins: [react()
    ,viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'assets'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
})
