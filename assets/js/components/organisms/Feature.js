import React, { Component, PropTypes } from 'react'

class Feature extends Component {

  render() {
    return (
      <section data-reverse={this.props.reverse} className="trails-feature">
        <div className="trails-feature-text">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
        <div className="trails-feature-image">
          <img src={this.props.image} alt={this.props.title} />
        </div>
      </section>
    )
  }

}

Feature.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}

export default Feature
