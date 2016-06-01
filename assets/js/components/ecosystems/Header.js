import React, { Component, PropTypes } from 'react'
import Menu from 'react-burger-menu'
import viewportSize from 'viewport-size'
import { Link } from 'react-router'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {}
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
              <Link to="/">About</Link>
              <Link to="/">Features</Link>
              <Link to="/docs">Documentation</Link>
            </Menu.slide>
            :
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/docs">Documentation</Link></li>
            </ul>
          }

        </div>
      </header>
    )
  }

}

Header.propTypes = {}

export default Header
