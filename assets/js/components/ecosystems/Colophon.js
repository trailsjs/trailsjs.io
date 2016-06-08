import React, { PropTypes, Component } from 'react'

class Colophon extends Component {

  render() {
    return (
      <section className="trails-colophon">
        <div className="container">
          <p>
            <span>Made with </span>
            <img className="heart" src="/dist/img/heart.svg" alt="love" />
            <span>by you and </span>
            <a href="http://langa.io/">
              <img className="langa-logo" src="/dist/img/langa-logo.svg" alt="langa" />
            </a>
          </p>
        </div>
      </section>
    )
  }

}

Colophon.propTypes = {}

export default Colophon
