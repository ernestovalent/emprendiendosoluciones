const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
/** @type {import('webpack').Configuration} */

module.exports = merge(common, {
  mode: 'production',
  entry: './src/js/menu.js',
  output:{
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
});