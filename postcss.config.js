module.exports = ctx => ({
  plugins: {
    'postcss-preset-env': {},
    cssnano:
      ctx.env === 'production'
        ? {
            preset: [
              'default',
              {
                normalizeUrl: false,
                mergeLonghand: false,
              },
            ],
          }
        : false,
  },
});
