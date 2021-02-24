const path = require('path')
const basepath = path.resolve('./')
const { merge } = require('webpack-merge')
const basewebpack = require('./base.webpack.js')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
module.exports = merge(basewebpack, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(basepath, 'dist'),
    host: '0.0.0.0',
    hot: true,
    open: true,
    port: 8080,
    index: 'index.html'
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
