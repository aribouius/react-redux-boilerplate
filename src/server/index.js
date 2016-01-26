import express from 'express'
import renderer from './middleware/renderer'

const app = express()

if (__DEVELOPMENT__) {
  app.use(require('./middleware/webpack')())
}

app.use(express.static('static'))
app.use(renderer)

export default app
