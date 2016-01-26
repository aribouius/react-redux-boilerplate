import webpack from 'webpack'
import config from '../../../config/webpack/development'
import devMiddleware from './webpack-dev'
import hotMiddleware from 'webpack-hot-middleware'

export default () => {
  const compiler = webpack(config)
  return [
    devMiddleware(compiler, config.output.publicPath),
    hotMiddleware(compiler)
  ]
}
