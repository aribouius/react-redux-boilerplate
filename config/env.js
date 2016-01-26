var argv = require('yargs').argv

require('dotenv').load({ silent: true })

process.env.NODE_ENV = argv.dev ? 'development' : (process.env.NODE_ENV || 'production')
process.env.DEVTOOLS = !!(argv.devtools || process.env.DEVTOOLS)
