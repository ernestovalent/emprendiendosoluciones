const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

/** @type {import('webpack').Configuration} */

module.exports = merge(common, {
  mode: 'production',
  output:{
    filename: 'main.js',
    publicPath: 'http://emprendiendosoluciones/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
});