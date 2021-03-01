module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    _: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb', 'prettier'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: true,
          },
        ],
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: '.',
      },
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
    },
  ],
};
