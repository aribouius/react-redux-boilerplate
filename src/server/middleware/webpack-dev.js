import webpackDevMiddleware from 'webpack-dev-middleware'

export default (compiler, publicPath) => {
  return webpackDevMiddleware(compiler, {
    // use same public path as webpack
    publicPath: publicPath,
    // set to true to only show warnings and errors
    noInfo: true,
    // formatting options
    stats: {
      colors: true
    }
  })
}
