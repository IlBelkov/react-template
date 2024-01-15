import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import 'webpack-dev-server'
import { BuildOption } from './types'
export function buildDevServer({ port }: BuildOption): DevServerConfiguration {
  return {
    port: port,
    open: true,
    hot: true,
    historyApiFallback: true
  }
}
