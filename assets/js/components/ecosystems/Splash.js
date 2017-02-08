import React, { PropTypes, Component } from 'react'

import Button from './../atoms/Button'

class Splash extends Component {

  render() {
    return (
      <section className="trails-splash">
        <div className="container">
        <img className="trails-logo" src="dist/img/trails-logo.svg" alt="trails-logo" />
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
