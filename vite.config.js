import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

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
    // TODO:
    // *.less中的@import ~前置符号
    // 兼容ESM构建工具
    // https://github.com/ant-design/pro-components/issues/1933
    alias: [{ find: /^~/, replacement: '' }],
  },
  server: {
    open: true,
  },
});
