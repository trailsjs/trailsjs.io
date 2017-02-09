import React, { Component } from 'react'

export default class Colophon extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="trails-colophon">
        <div className="container">
          <p>
            <span>Made with </span>
            <img className="heart" src="dist/img/heart.svg" alt="love" />
            <span>by you and </span>
            <a href="http://langa.io/">
              <img className="langa-logo" src="dist/img/langa-logo.svg" alt="langa" />
            </a>
          </p>
        </div>
      </section>
    )
  }
}
