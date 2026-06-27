const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build',
    port: process.env.PORT || 8080,
    historyApiFallback: false,
  },
  output: {
    path: path.resolve('.', 'dev_build'),
    clean: true
  }
})
