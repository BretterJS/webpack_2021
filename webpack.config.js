const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { main: path.resolve(__dirname, './src/app.js') },
  output: {
    path: path.join(__dirname, '/dist'),
    // filename: '[name].[contenthash].js',
    filename: 'app.bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, '/dist'),
    static: {
      directory: path.join(__dirname, './dist'),
    },
    host: 'localhost',
    port: 3000,
    watchFiles: '/dist',
    hot: true,
    //
    liveReload: true,
    // watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // test: /\.css$/,
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};
