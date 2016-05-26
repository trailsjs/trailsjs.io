import React, { Component, PropTypes } from 'react'
import './../../../styles/components/organisms/OtherFeature.scss'

class OtherFeature extends Component {

  render() {
    return (
      <div className="trails-other-feature">
        <p>{this.props.text}</p>
      </div>
    )
  }

}

OtherFeature.propTypes = {
  text: PropTypes.string
}

export default OtherFeature
