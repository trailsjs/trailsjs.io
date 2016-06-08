import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import DocumentationMenu from './../ecosystems/DocumentationMenu'
import Markdown from 'react-markdown'

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
          <Markdown source={this.props.markdown} />
        </article>
      </Layout>
    )
  }

}

Documentation.propTypes = {
  markdown: PropTypes.string
}

export default Documentation
