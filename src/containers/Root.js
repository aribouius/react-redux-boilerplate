import React, { Component } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          {this.props.children}
          {__DEVTOOLS__ ? <DevTools /> : null }
        </div>
      </Provider>
    )
  }
}
