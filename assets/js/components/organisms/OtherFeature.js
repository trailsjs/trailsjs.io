import React, { Component, PropTypes } from 'react'

class OtherFeature extends Component {

  render() {
    return (
      <div className="trails-other-feature">
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }

}

OtherFeature.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
}

export default OtherFeature
