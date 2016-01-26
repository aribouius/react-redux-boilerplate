import React from 'react'
import { match, Router, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configure'
import routes from './routes'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`
const store = configureStore(window.App, browserHistory)

match({ routes, location }, () => {
  render(
    <Root store={store} >
      <Router routes={routes} history={browserHistory} />
    </Root>,
    document.getElementById('root')
  )
})
