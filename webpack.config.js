const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  mode: NODE_ENV || 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // 'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              additionalData: '@import "./src/assets/styles/global.scss";',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'dist/images/[name]__[local]__[hash:base64:7].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: 'source-map',
};
