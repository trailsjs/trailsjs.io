import React, { Component } from 'react'

import Header from '../ecosystems/Header'
import Colophon from '../ecosystems/Colophon'

export default class Support extends Component {
  static get propTypes () {
    return { }
  }

  render () {
    return (
      <div>
        <Header />
        <Colophon />
      </div>
    )
  }
}


