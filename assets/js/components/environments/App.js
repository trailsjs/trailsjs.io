import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import Splash from './../ecosystems/Splash'
import Console from './../ecosystems/Console'
import Features from './../ecosystems/Features'
import OtherFeatures from './../ecosystems/OtherFeatures'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Splash />
        <Console />
        <Features />
        <OtherFeatures />
      </div>
    )
  }

}

App.propTypes = {}

export default App
