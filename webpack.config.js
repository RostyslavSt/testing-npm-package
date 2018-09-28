const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
        // use: {
        //   loader: 'eslint-loader',
        //   options: {},
        // },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  devtool: 'inline-source-map',
};

module.exports = config;
