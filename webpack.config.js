require('webpack');
require('css-loader');
require('extract-loader');
require('file-loader');
require('html-loader');
require('sass-loader');
var path = require('path');


module.exports = {
  entry: {
    'load.js': './src/js/load.js',
    'main.js': './src/js/main.js',
    'popup.js': './src/js/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: /js\/.*\.js/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /.*\.html/,
        loaders: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader?' + JSON.stringify({
            attrs: ['img:src', 'link:href']
          })
        ]
      },
      {
        test: /css\/.*\.scss/,
        loaders: [
          'file-loader?name=[sha256:hash:16].css',
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

