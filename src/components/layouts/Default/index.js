import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

export default class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <nav className={`${styles.nav} clearfix`}>
          <Link to="/">Home</Link>
          <Link to="/count">Count</Link>
        </nav>
        <div className={styles.body}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
