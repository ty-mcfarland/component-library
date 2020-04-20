const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils }  = require('webpack-config-utils')

const NODE_ENV = process.env.NODE_ENV || 'development'
const { ifDevelopment, ifProduction } = getIfUtils(NODE_ENV)

module.exports = {
  entry: './src/index.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/')
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};