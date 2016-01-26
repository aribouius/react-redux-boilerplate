// compile ES6/7 in runtime
require('babel-core/register')

// load app configuration
const config = require('../config/application')

// assign globals
Object.assign(GLOBAL, config.globals, config.flags)

// compile css modules in runtime
require('css-modules-require-hook')({
  generateScopedName: __PRODUCTION__ ? '[hash:base64:5]' : '[path][name]-[local]'
})

// compile asset paths in runtime
require('asset-require-hook')({
  name: '/dist/[hash].[ext]',
  extensions: ['jpg', 'png', 'gif', 'svg']
})

// get application server
const server = require('../src/server')

// inject application config
Object.assign(server.locals, config.locals)

// boot application
server.listen(config.port, config.host, function (err) {
  if (err) {
    console.error('==> Error: Unable to start server.')
    console.error(err)
  } else {
    console.info("* Node Version %s", process.version)
    console.info("* Environment: %s", config.mode)
    console.info("* Listening on %s:%s\n", config.host, config.port)
  }
})
