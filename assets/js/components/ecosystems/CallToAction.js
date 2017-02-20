import React, { Component } from 'react'
import Button from './../atoms/Button'

class CallToAction extends Component {
  render() {
    return (
      <section className="trails-call-to-action">
        <div className="container">
          <h2>Try Trails</h2>
          <p>Build apps your way</p>
          <a href="/start"><Button label="Get Started" /></a>
        </div>
      </section>
    )
  }
}

CallToAction.propTypes = {}

export default CallToAction
