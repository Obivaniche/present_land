const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let htmlPageNames = ['work', 'contact', 'workSingle'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // относительный путь к HTML-файлам
    filename: `${name}.html`, // выходные HTML-файлы
    chunks: [`${name}`] // соответствующие файлы JS
  })
});

module.exports = {
  entry: { main: './src/pages/index.js',
    work: './src/pages/index.js',
    contact: './src/pages/index.js',
    workSingle: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
          'postcss-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin
    ({
      template: "./src/index.html",
      chunks: ['main']
    }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()]
    .concat(multipleHtmlPlugins)
};