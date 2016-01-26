import './env'
import path from 'path'

const ENV = process.env
const DEV = ENV.NODE_ENV === 'development'

export default {
  mode: ENV.NODE_ENV,
  host: ENV.HOST || 'localhost',
  port: ENV.PORT || 3000,

  api: {
    host: ENV.API_HOST || 'localhost',
    port: ENV.API_PORT || 3030,
  },

  locals: {
    // leaving placeholder in case this becomes useful
  },

  globals: {
    ROOT_DIR: path.join(__dirname, '..'),
    DIST_DIR: path.join(__dirname, '../static/dist')
  },

  flags: {
    __CLIENT__      : false,
    __SERVER__      : true,
    __DEVELOPMENT__ : DEV,
    __PRODUCTION__  : !DEV,
    __DEVTOOLS__    : ENV.DEVTOOLS === 'true'
  }
}
