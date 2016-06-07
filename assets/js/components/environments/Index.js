import React, { PropTypes, Component } from 'react'

import Layout from './../environments/Layout'
import Splash from './../ecosystems/Splash'
import Console from './../ecosystems/Console'
import Features from './../ecosystems/Features'
import OtherFeatures from './../ecosystems/OtherFeatures'
import CallToAction from './../ecosystems/CallToAction'
import Colophon from './../ecosystems/Colophon'

class Index extends Component {

  render() {
    return (
      <Layout>
        <Splash />
        <Console />
        <Features />
        <OtherFeatures />
        <CallToAction />
        <Colophon />
      </Layout>
    )
  }

}

Index.propTypes = {}

export default Index
