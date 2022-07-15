/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

const nodeEnv = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
      '@actions': path.resolve(__dirname, './src/actions.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtraxtPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: nodeEnv ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
      filename: './index.html',
    }),
    new MiniCssExtraxtPlugin({
      filename: nodeEnv ? 'assets/[name].css' : 'assets/[name].css',
    }),
  ],
};
