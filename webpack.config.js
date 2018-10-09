const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  mode: 'development',
  output: {
    filename: "bundle.js"
  },

  // Automatically compile when files change.
  watch: true,

  // Automatically reload the page when compilation is done.
  devServer: {
    inline: true
  },

  // Add sass-loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'})
  ]
}