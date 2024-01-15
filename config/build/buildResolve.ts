import { Configuration } from 'webpack'
import { BuildOption } from './types'

export function buildResolve({ paths }: BuildOption): Configuration['resolve'] {
  return {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': paths.src,
    }
  }
}
