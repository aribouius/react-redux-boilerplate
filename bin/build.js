require('babel-core/register')

const compiler = require('webpack')(require('../config/webpack/production'))
const config   = require('../config/application')

console.info("\n==> Webpack build starting in %s mode.", config.mode)

compiler.run(function (err, stats) {
  const jsonStats = stats.toJson()

  if (err) {
    console.error('==> Error: Webpack compiler encountered a fatal error.', err)
    process.exit(1)
  } else if (jsonStats.errors.length > 0) {
    console.error('==> Error: Webpack compiler encountered errors.')
    console.error(jsonStats.errors)
    process.exit(1)
  } else if (jsonStats.warnings.length > 0) {
    console.warn('==> Warning: Webpack compiler encountered warnings.')
    console.warn(jsonStats.warnings)
  }

  console.info("==> Webpack build completed.\n\n")
  console.info(stats.toString({
    colors : true,
    chunks : false,
    chunkModules : false
  }))

})
