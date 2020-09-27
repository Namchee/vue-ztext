module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'google',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any':  'off',
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
}
