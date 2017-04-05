
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const buildConfig = {
  paths: {
    appHtml: path.resolve(__dirname, './template/index.html')
  }
};

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    template: buildConfig.paths.appHtml
  })]
};
