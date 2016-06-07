import React, { PropTypes, Component } from 'react'
import Header from './../ecosystems/Header'
import Layout from './../environments/Layout'

class Documentation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Header />
        <article className="container">
          <h1>Documentation page!</h1>
        </article>
      </Layout>
    )
  }

}

Documentation.propTypes = {}

export default Documentation
