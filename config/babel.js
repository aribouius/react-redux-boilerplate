import fs from 'fs'

let config = fs.readFileSync('./.babelrc')

try {
  config = JSON.parse(config)
} catch (error) {
  console.error('==> ERROR: Unable to parse .babelrc file.')
  console.error(error)
}

export default config
