import path from "path"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgSprite from 'vite-plugin-svg-sprite';

export default defineConfig({
  plugins: [
    react(),
      // 配置 svg-sprite 插件
      svgSprite({
        // 指定需要加载的文件目录
        include: ['src/assets/svgs/**/*.svg'],
        symbolId: 'icon-[name]', // 定义 symbol 的 id 格式
      }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
