const path = require('node:path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.WEBPACK_ENV === 'production'
const port = process.env.PORT ?? 9119

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  mode: process.env.WEBPACK_ENV,
  devtool: false,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      filename: 'index.html',
      minify: isProduction
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    port
  }
}
