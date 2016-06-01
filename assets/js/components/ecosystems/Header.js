import React, { Component, PropTypes } from 'react'
import Menu from 'react-burger-menu'

class Header extends Component {

  render() {

    return (
      <header className="trails-header">
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
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Documentation</a>
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
