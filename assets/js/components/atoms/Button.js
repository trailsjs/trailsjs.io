import React, { PropTypes, Component } from 'react'

class Button extends Component {

  render() {
    return (
      <a
        href={this.props.href || '#'}
        className="trails-button trails-transparent-button">
        {this.props.label}
      </a>
    )
  }

}

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default Button
