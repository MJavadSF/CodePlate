const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'unused-imports', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['off', prettierOptions],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-var': 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'array-callback-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-useless-concat': 'off',
    'no-loop-func': 'warn',
    'no-empty': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'for-direction': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'sort-vars': 'off',
    'react/jsx-key': 'error',
    'sort-imports': [
      'off',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: { 'prettier/prettier': ['off', prettierOptions] },
    },
  ],
};
