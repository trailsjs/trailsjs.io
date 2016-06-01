import React, { PropTypes, Component } from 'react'
import Button from './../atoms/Button'

class CallToAction extends Component {
  render() {
    return (
      <section className="trails-call-to-action">
        <div className="container">
          <h2>Try Trails</h2>
          <p>Build more apps, your way</p>
          <Button label="Get Started" />
        </div>
      </section>
    )
  }
}

CallToAction.propTypes = {}

export default CallToAction
