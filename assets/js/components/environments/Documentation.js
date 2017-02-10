import React, { Component } from 'react'

import Header from '../ecosystems/Header'
import Colophon from '../ecosystems/Colophon'

export default class Documentation extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <div>
        <Header />
        <article className="container">
          <h1>Documentation page!</h1>
        </article>
        <Colophon />
      </div>
    )
  }

}
