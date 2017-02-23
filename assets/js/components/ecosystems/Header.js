import React, { Component } from 'react'
import viewportSize from 'viewport-size'

export default class Header extends Component {

  static get propTypes () {
    return { }
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkForSmallScreen.bind(this))
    this.checkForSmallScreen()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkForSmallScreen.bind(this))
  }

  checkForSmallScreen() {
    this.setState({
      smallScreen: viewportSize.getWidth() < 768
    })
  }

  render() {

    return (
      <header className="trails-header">
        <div className="container">
          <a href="/">
            <img className="trails-logo"  src="/dist/img/trails-logo-small.svg" alt="Trails logo" />
          </a>

          <ul>
            <li><a href="/start">Start</a></li>
            <li><a href="/doc">Docs</a></li>
            <li><a href="/plugins">Plugins</a></li>
            <li><a href="/support">Support</a></li>
          </ul>

        </div>
      </header>
    )
  }

  constructor (props) {
    super(props)
    this.state = { }
  }
}
