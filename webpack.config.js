const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '',
    filename: 'js/bandle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        use: {
          loader: "babel-loader",
          options: { presets: ["env", "react"] }
        }
      },
      {
        test: /\.s[c|a]ss$/,
        exclude: [/node_modules/, /public/],
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ]
}
