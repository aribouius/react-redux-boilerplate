import React, { Component } from 'react'

export default class TextInput extends Component {
  render() {
    return (
      <input {...this.props} type="text" />
    )
  }
}
