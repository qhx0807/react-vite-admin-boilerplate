import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 自定义主题色
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    open: true,
  },
});
