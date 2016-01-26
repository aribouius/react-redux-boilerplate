import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../../routes'
import configureStore from '../../store/configure'
import Html from '../../components/Html'
import Root from '../../containers/Root'
import { resolve } from '../helpers/asset'
import createHistory from 'react-router/lib/createMemoryHistory'

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error) {
      return res.status(500).send(error.message)
    } else if (redirect) {
      return res.status(302).redirect(redirect.pathname + redirect.search)
    } else if (!props) {
      return res.status(404).send('Not found')
    }

    const store  = configureStore(undefined, createHistory())
    const state  = store.getState()

    // move this someplace more appropriate?
    const assets = {
      styles: __PRODUCTION__ ? [resolve('main.css')] : [],
      javascripts: [resolve('main.js')]
    }

    // check for custom status codes (e.g. 404's)
    props.routes.forEach((route) => {
      if (route.status) {
        res.status(route.status)
      }
    })

    res.end('<!DOCTYPE html>' + ReactDOM.renderToStaticMarkup(
      <Html state={state} assets={assets} >
        <Root store={store} >
          <RouterContext {...props} />
        </Root>
      </Html>
    ))
  })
}
