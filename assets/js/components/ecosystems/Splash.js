import React, { Component } from 'react'

import Button from './../atoms/Button'

export default class Splash extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="trails-splash">
        <div className="container">
        <img className="trails-logo" src="dist/img/trails-logo.svg" alt="trails-logo" />
          <h2 className="trails-splash-description">A Modern Web Application Framework for Node.js</h2>
          <div className="trails-splash-button-tray">
            <Button label="View Docs" />
            <Button label="Get Started" />
          </div>
        </div>
      </section>
    )
  }

}
