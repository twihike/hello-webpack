const path = require('path');
const sass = require('sass');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VisualizerPlugin = require('webpack-visualizer-plugin');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.config.js');

const nodeEnv = 'development';
process.env.NODE_ENV = nodeEnv;

module.exports = merge(base, {
  mode: nodeEnv,
  output: {
    filename: 'js/[name].js',
    assetModuleFilename: "assets/[name]-[contenthash:8][ext]",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    client: {
      logging: 'warn',
    },
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        VUE_APP_CLI_UI_URL: '""',
        BASE_URL: '""',
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    // new VisualizerPlugin(),
  ],
});
