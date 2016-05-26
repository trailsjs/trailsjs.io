import React, { PropTypes, Component } from 'react'
import './../../../styles/components/ecosystems/Colophon.scss'

import heart from './../../../img/heart.svg'
import langaLogo from './../../../img/langa-logo.svg'

class Colophon extends Component {

  render() {
    return (
      <section className="trails-colophon">
        <div className="container">
          <p>
            <span>Made with </span>
            <img className="heart" src={heart} alt="love" />
            <span>by you and </span>
            <a href="http://langa.io/">
              <img className="langa-logo" src={langaLogo} alt="langa" />
            </a>
          </p>
        </div>
      </section>
    )
  }

}

Colophon.propTypes = {}

export default Colophon
