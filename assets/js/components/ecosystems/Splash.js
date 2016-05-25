import React, { PropTypes, Component } from 'react'
import styles from './../../../styles/components/ecosystems/Splash.scss'

import Button from './../atoms/Button'
import logo from './../../../img/trails-logo.svg'
import treesAndRivers from './../../../img/trees-and-rivers.svg'

class Splash extends Component {

  render() {
    return (
      <section className="trails-splash">
        <div className="container">
          <img className="trails-logo" src={logo} alt="trails-logo" />
          <h2 className="trails-splash-description">A Modular Web Application Framework for Node.js</h2>
          <div className="trails-splash-button-tray">
            <Button label="View Docs" />
            <Button label="Get Started" />
          </div>
        </div>
      </section>
    )
  }

}

Splash.propTypes = {}

export default Splash
