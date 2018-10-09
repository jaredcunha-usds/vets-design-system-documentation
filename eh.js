const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getAbsolutePath = relativePath =>
  path.join(__dirname, '../', relativePath);

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
      },
      {
        // if we want to minify these images, we could add img-loader
        // but it currently only would apply to three images from uswds
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'})
  ]
}