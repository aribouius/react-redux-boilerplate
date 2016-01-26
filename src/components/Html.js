import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom/server'
import DocumentMeta from 'react-document-meta'

export default class Html extends React.Component {
  render() {
    const {
      assets,
      state,
      children
    } = this.props

    return (
      <html>
        <head>
          {DocumentMeta.renderAsReact()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {assets.styles.map((style, key) =>
            <link href={style} key={key} rel="stylesheet" type="text/css" />
          )}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html:ReactDOM.renderToString(children)}}></div>
          <script dangerouslySetInnerHTML={{__html:'window.App = '+JSON.stringify(state)}}></script>
          {assets.javascripts.map((script, key) =>
            <script src={script} key={key} />
          )}
        </body>
      </html>
    )
  }
}
