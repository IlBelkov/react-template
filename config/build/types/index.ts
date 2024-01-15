export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  output: string
  html: string
  entry: string
  src: string
}

export interface BuildOption {
  mode: BuildMode
  paths: BuildPaths
  port: number
  isBundleAnalyzer: boolean
}
