import { compose, createStore } from 'redux'
import rootReducer from '../reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistory } from 'react-router-redux'

export default (state, history) => {
  const routing = syncHistory(history)
  const enhancers = [applyMiddleware(thunk, routing)]

  if (__DEVELOPMENT__) {
    if (__CLIENT__) {
      enhancers.push(applyMiddleware(require('redux-logger')()))
    }
    if (__DEVTOOLS__) {
      enhancers.push(require('../containers/DevTools').instrument())
    }
  }

  const configureStore = compose(...enhancers)(createStore)
  const store = configureStore(rootReducer, state)

  if (__DEVTOOLS__) {
    routing.listenForReplays(store)
  }

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}
