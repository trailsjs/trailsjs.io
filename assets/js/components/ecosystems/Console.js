import React, { Component, PropTypes } from 'react'

class Console extends Component {

  render() {
    return (
      <section className="trails-console">
        <div className="container">
          <pre>$ npm install -g yo generator-trails</pre>
          <pre>$ yo trails</pre>
          <pre>$ node server.js</pre>
        </div>
      </section>
    )
  }

}

Console.propTypes = {}

export default Console
