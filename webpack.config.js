const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      }),
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'file-loader',
        'img-loader',
      ],
    }],
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CopyWebpackPlugin([
      { context: path.resolve(__dirname, 'src'), from: '*.html' },
      { from: path.resolve(__dirname, 'src/assets'), to: 'assets' },
    ]),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
