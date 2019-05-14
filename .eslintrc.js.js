module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    _: false,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['*.js'],
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
  ],
};
