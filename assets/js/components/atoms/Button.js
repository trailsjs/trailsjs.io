import React, { PropTypes, Component } from 'react'
import './../../../styles/components/atoms/Button.scss'

class Button extends Component {

  render() {
    return (
      <button
        onClick={this.props.onClick}
        name={this.props.label} className="pure-button trails-transparent-button">
        {this.props.label}
      </button>
    )
  }

}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired
}

export default Button
