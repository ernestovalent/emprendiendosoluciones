const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
/** @type {import('webpack').Configuration} */

module.exports = merge(common, {
  mode: 'development',
  entry: './src/js/menu.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  }
});
