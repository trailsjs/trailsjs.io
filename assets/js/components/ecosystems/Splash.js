import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from './../atoms/Button'

export default class Splash extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="trails-splash">
        <a className="ribbon github-fork-ribbon left-top"
            href="https://github.com/trailsjs/trails"
            title="Fork me on Github"
            target="_blank">
          Fork me on Github
        </a>
        <div className="container">
        <img className="trails-logo" src="dist/img/trails-logo.svg" alt="trails-logo" />
          <h2 className="trails-splash-description">A Modern Web Application Framework for Node.js</h2>
          <div className="trails-splash-button-tray">
            <Link to="/doc"><Button label="View Docs" /></Link>
            <Link to="/start"><Button label="Get Started" /></Link>
          </div>
        </div>
      </section>
    )
  }

}
