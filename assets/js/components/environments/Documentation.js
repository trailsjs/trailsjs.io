import React, { PropTypes, Component } from 'react'
import Header from './../ecosystems/Header'

class Documentation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <article className="container">
          <h1>Documentation page!</h1>
        </article>
      </div>
    )
  }

}

Documentation.propTypes = {}

export default Documentation
