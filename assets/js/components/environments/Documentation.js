import React, { Component } from 'react'
import {
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Documentation extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <div>
        <Header />
        <TextSplash title="Documentation" subtitle="Everything you need to know" />
        <article className="container">
        </article>
        <Colophon />
      </div>
    )
  }

}
