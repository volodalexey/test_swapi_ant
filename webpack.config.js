const path = require('node:path')

const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.WEBPACK_ENV === 'production'
const isHashRouter = process.env.HASH_ROUTER === 'true'
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
    publicPath: isHashRouter ? undefined : '/',
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
    }),
    new DefinePlugin({
      'process.env.HASH_ROUTER': JSON.stringify(process.env.HASH_ROUTER || 'false')
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    port
  }
}
