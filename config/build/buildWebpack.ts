import webpack from 'webpack'
import { BuildOption } from './types'
import { buildDevServer } from './buildDevServer'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolve } from './buildResolve'

export function buildWebpack(options: BuildOption): webpack.Configuration {

  return {
    mode: options.mode,
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].js',
      clean: true
    },
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
    plugins: buildPlugins(options),
  }
}
