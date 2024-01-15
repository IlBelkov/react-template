import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOption } from './types'
import ReactRefreshTypeScript from 'react-refresh-typescript'


export function buildLoaders({mode}: BuildOption): ModuleOptions['rules'] {
  const isDev = mode === 'development'

  const assetLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
  }

  const svgLoader = {
    test: /\.svg$/i,
    use: [{
      loader: '@svgr/webpack',
      options: {
        typescript: true,
        icon: true,
      },
    }],
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[name]__[hash:base64:5]',
      }
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader',
    ],
  }

  const tsLoader = {
    test: /\.[jt]sx?$/,
      exclude: [/node_modules/, /dist/],

      use: [
    {
      loader: require.resolve('ts-loader'),
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
        transpileOnly: isDev,
      },
    },
  ],
  }

  return [
    svgLoader,
    assetLoader,
    scssLoader,
    tsLoader
  ]
}
