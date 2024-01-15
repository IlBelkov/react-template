import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOption } from './types'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins({ mode, paths: { html }, isBundleAnalyzer }: BuildOption): Configuration['plugins'] {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: html
    }),
  ]

  if (isBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  switch (mode) {
    case 'development': {
      plugins.push(new webpack.ProgressPlugin())
      plugins.push(new ForkTsCheckerWebpackPlugin())
      plugins.push(new ReactRefreshWebpackPlugin())
      break
    }
    case 'production':
    default: {
      plugins.push(new MiniCssExtractPlugin())
    }
  }


  return plugins
}
