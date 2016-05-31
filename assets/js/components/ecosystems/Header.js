import React, { Component, PropTypes } from 'react'
import Menu from 'react-burger-menu'

class Header extends Component {

  render() {
    return (
      <header className="trails-header pure-menu pure-menu-horizontal pure-menu-fixed">
        <div className="container">
          <a href="#">
            <img className="trails-logo"  src="dist/img/trails-logo-small.svg" alt="Trails logo" />
          </a>

          {
            this.props.smallScreen ?
            <Menu.slide
              width={240}
              right
              noOverlay>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Documentation</a>
            </Menu.slide>
            :
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-item">About</a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-item">Features</a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-item">Documentation</a>
              </li>
            </ul>
          }

        </div>
      </header>
    )
  }

}

Header.propTypes = {
  smallScreen: PropTypes.bool
}

export default Header
