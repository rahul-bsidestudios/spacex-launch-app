const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './server/index.js'],

  target: 'node',

  externals: [nodeExternals()], // omit the files from node_modules in the bundle 

  output: {
    path: path.resolve('server-build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        include: [
          path.resolve('src'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};