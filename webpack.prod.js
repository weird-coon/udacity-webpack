const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
  devtool: 'source-map',
  stats: 'verbose',
  output: {
    library: 'app',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new WorkboxPlugin.GenerateSW(),
  ],
};
