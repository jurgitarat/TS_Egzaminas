module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
      'airbnb-typescript/base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./11/tsconfig.json'],
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": [2],
      "@typescript-eslint/indent": [0]
    },
  };