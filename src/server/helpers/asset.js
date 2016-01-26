import fs from 'fs'
import path from 'path'

const manifest = __PRODUCTION__ ? require(path.join(DIST_DIR, 'manifest.json')) : {}

export function resolve(file) {
  file = '/dist/' + file
  return manifest[file] || file
}
