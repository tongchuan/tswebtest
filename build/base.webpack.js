const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basepath = path.resolve('./')
module.exports = {
  entry: path.resolve(basepath, 'src/test.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(basepath, 'dist')
  },
  plugins: [
  	new webpack.ProgressPlugin(),
  	new HtmlWebpackPlugin({
  		template: path.resolve(basepath, 'src/index.html'),
  		filename: 'index.html',
  		title: 'zhang'
  	})
  ],
  module: {
  	rules: [

      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'], // "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // enforce: "pre",
        include: path.resolve(basepath, 'src'),
        // use: ['eslint-loader'], //,{options:{}}
        // enforce: true,
        loader: 'eslint-loader',
        options: {
        }
      }
      // {
      //   test: /\.jsx?$/,
      //   use: [], //"",
      //   exclude: /node_modules/,
      // },
    ]
  },
  resolve: {
  	alias: {
  		src: path.resolve(basepath, 'src')
  	},
  	extensions: ['.ts', '.js', '.less', '.css', '.jsx', '.tsx']
  }
}
