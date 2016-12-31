var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    load: './src/js/load.js',
    main: './src/js/main.js',
    popup: './src/js/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/popup.html', to: 'popup.html' }
    ])
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

