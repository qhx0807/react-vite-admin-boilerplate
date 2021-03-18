module.exports = {
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    semi: 'warn',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
};
