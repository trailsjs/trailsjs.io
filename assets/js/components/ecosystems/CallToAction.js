import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from './../atoms/Button'

class CallToAction extends Component {
  render() {
    return (
      <section className="trails-call-to-action">
        <div className="container">
          <h2>Try Trails</h2>
          <p>Build apps your way</p>
          <Link to="/start"><Button label="Get Started" /></Link>
        </div>
      </section>
    )
  }
}

CallToAction.propTypes = {}

export default CallToAction
