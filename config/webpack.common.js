const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const htmlPages = require('./webpack.pages.js')
const CopyPlugin = require("copy-webpack-plugin");

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/javascripts/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",   
          "sass-loader",  
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(), ...htmlPages,
    
    new CopyPlugin({
      patterns: [
        { 
          // Путь от файла webpack.common.js до вашей новой папки с иконками
          // '../' нужен, чтобы выйти из папки config в корень проекта
          from: path.resolve(__dirname, "../src/images/favicon_io"), 
          // Папка 'favicon' создастся внутри dist автоматически
          to: "favicon" 
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}

