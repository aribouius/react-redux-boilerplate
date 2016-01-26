import React, { Component, PropTypes } from 'react'
import DocumentMeta from 'react-document-meta'

import './styles/normalize.css'
import styles from './styles/app.css'

export default class App extends Component {
  render() {
    const meta = {
      title: 'React Redux Boilerplate'
    }
    return (
      <div>
        {this.props.children}
        <DocumentMeta {...meta} />
      </div>
    )
  }
}
