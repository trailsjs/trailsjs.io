import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import Splash from './../ecosystems/Splash'
import Console from './../ecosystems/Console'
import Features from './../ecosystems/Features'
import OtherFeatures from './../ecosystems/OtherFeatures'
import CallToAction from './../ecosystems/CallToAction'
import Colophon from './../ecosystems/Colophon'

import viewportSize from 'viewport-size'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      smallScreen: viewportSize.getWidth() < 768
    })
  }

  render() {
    return (
      <div>
        <Header smallScreen={this.state.smallScreen} />
        <Splash />
        <Console />
        <Features />
        <OtherFeatures />
        <CallToAction />
        <Colophon />
      </div>
    )
  }

}

App.propTypes = {}

export default App
