import webpack from 'webpack';
import { BuildMode, BuildOption } from './config/build/types'
import { buildWebpack } from './config/build/buildWebpack'
import path from 'path'

interface Env {
  mode: BuildMode
  port: number
}

export default (env: Env): webpack.Configuration => {

  const paths: BuildOption['paths'] = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const options: BuildOption = {
    paths,
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    isBundleAnalyzer: false
  }

  return buildWebpack(options)
}
