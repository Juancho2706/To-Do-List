const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './js'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do List J2706',
      filename: '../index.html',
      template: './index1.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
       generator: {
        filename: '../images/[hash][ext]',
      },
     },
    ],
  },
  
};