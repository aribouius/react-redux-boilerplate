import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../../actions/counter'
import Layout from '../../components/layouts/Default'

@connect(state => ({
  count: state.count
}))

export default class Home extends Component {
  onButtonClick() {
    this.props.dispatch(incrementCounter(1))
  }

  render() {
    return (
      <Layout>
        Count: {this.props.count}
        <br /><br />
        <button onClick={this.onButtonClick.bind(this)}>Increment</button>
      </Layout>
    )
  }
}
