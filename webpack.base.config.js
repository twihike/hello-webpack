const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const codeframe = require('eslint/lib/cli-engine/formatters/codeframe');

module.exports = {
  entry: {
    main: ['./src/index.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: codeframe,
              configFile: '.eslintrc.js',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: codeframe,
              configFile: '.eslintrc.js',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(svg)(\?.*)?$/,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024,
            },
          },
        },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024,
            },
          },
        },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },
  // node: {
  //   setImmediate: false,
  //   process: 'mock',
  //   dgram: 'empty',
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty',
  //   child_process: 'empty',
  // },
  externals: [
    {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  ],
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      formatter: 'codeframe',
      // checkSyntacticErrors: true,
    }),
  ],
};
