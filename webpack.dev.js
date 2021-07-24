const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Emprendiendo Soluciones',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "img"),
          to: "assets/images"
        }
      ]
    })

  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
});
