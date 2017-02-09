import React, { Component } from 'react'
import Menu from 'react-burger-menu'
import viewportSize from 'viewport-size'
import { Link } from 'react-router'

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
            <img className="trails-logo"  src="dist/img/trails-logo-small.svg" alt="Trails logo" />
          </a>

          {
            this.state.smallScreen ?
            <Menu.slide
              width={240}
              right
              noOverlay>
              <Link to="/start">Start</Link>
              <Link to="/docs">Docs</Link>
              <Link to="/plugins">Plugins</Link>
              <Link to="/support">Support</Link>
            </Menu.slide>
            :
            <ul>
              <Link to="/start">Start</Link>
              <li><Link to="/docs">Docs</Link></li>
              <li><Link to="/plugins">Plugins</Link></li>
              <Link to="/support">Support</Link>
            </ul>
          }

        </div>
      </header>
    )
  }

  constructor (props) {
    super(props)
    this.state = { }
  }
}
