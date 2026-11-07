import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  { ignores: ['dist/**', '.astro/**'] },
  ...astro.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsParser },
  },
  {
    files: ['**/*.astro'],
    languageOptions: { parserOptions: { parser: tsParser } },
  },
];
