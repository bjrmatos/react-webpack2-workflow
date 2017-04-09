
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin'),
      CopyPublicPlugin = require('./CopyPublicPlugin');

const buildConfig = {
  publicUrl: '/',
  paths: {
    app: path.resolve(__dirname, '../src'),
    publicResources: path.resolve(__dirname, '../public'),
    build: path.resolve(__dirname, '../dist'),
    appHtml: path.resolve(__dirname, '../template/index.html')
  }
};

module.exports = {
  context: buildConfig.paths.app,
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
    path: buildConfig.paths.build,
    filename: '[name].bundle.js',
    publicPath: buildConfig.publicUrl
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: buildConfig.publicUrl.slice(-1) === '/' ? buildConfig.publicUrl.slice(0, -1) : buildConfig.publicUrl
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: buildConfig.paths.appHtml
    }),
    new CopyPublicPlugin({
      public: buildConfig.paths.publicResources,
      dist: buildConfig.paths.build
    })
  ]
};
