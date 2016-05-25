import React, { Component, PropTypes } from 'react'
import logo from './../../../img/trails-logo-small.svg'
import './../../../styles/components/ecosystems/Header.scss'

class Header extends Component {

  render() {
    return (
      <header className="trails-header pure-menu pure-menu-horizontal pure-menu-fixed">
        <div className="container">
          <a href="#">
            <img className="trails-logo"  src={logo} alt="Trails logo" />
          </a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a href="#" classNAme="pure-menu-item">About</a>
            </li>
            <li className="pure-menu-item">
              <a href="#" classNAme="pure-menu-item">Features</a>
            </li>
            <li className="pure-menu-item">
              <a href="#" classNAme="pure-menu-item">Documentation</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }

}

Header.propTypes = {}

export default Header
