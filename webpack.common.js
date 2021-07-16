const path = require('path');
/** @type {import('webpack').Configuration} */

module.exports = {
  entry: {
    webpack: './src/webpack.js',
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    clean: true,
  }
}
