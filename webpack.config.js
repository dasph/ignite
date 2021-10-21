import path from 'path'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'

export default (env, options) => {
  const prod = options.mode === 'production'

  return {
    mode: 'development',
    devtool: false,
    entry: './app/index.tsx',
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    output: {
      clean: true,
      publicPath: '/',
      path: `${path.resolve()}/public`,
      filename: `bundle${prod ? '.[contenthash:8]' : ''}.js`,
      assetModuleFilename: `assets/[name]${prod ? '.[contenthash:8]' : ''}[ext]`
    },
    devServer: {
      host: '0.0.0.0',
      historyApiFallback: true,
      proxy: { '/api': 'http://localhost:8000' }
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/typescript', '@babel/react', ['@babel/env', { targets: { node: 'current' } }]] }
        }
      }, {
        test: /\.(css|png|svg|json)$/,
        type: 'asset/resource'
      }]
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({ template: './app/assets/index.html' }),
      ...prod ? [
        new CompressionWebpackPlugin()
      ] : []
    ]
  }
}
