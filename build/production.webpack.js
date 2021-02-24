const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const basewebpack = require('./base.webpack.js')
module.exports = merge(basewebpack, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
})
