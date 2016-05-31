import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import Splash from './../ecosystems/Splash'
import Console from './../ecosystems/Console'
import Features from './../ecosystems/Features'
import OtherFeatures from './../ecosystems/OtherFeatures'
import CallToAction from './../ecosystems/CallToAction'
import Colophon from './../ecosystems/Colophon'

// import viewportSize from 'viewport-size'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    // if (window) {
    //   this.checkForSmallScreen()
    // }
  }

  componentDidMount() {
    // if (window) {
    //   window.addEventListener('resize', this.checkForSmallScreen.bind(this))
    // }
  }

  componentWillUnmount() {
    // if (window) {
    //   window.removeEventListener('resize', this.checkForSmallScreen.bind(this))
    // }
  }

  checkForSmallScreen() {
    this.setState({
      smallScreen: viewportSize.getWidth() < 768
    })
  }

  render() {
    return (

      <html>
        <head>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <link rel="stylesheet" href="dist/style.css" />
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css" />
          <title>TrailsJS</title>
        </head>

        <body>
          <div>
            <Header smallScreen={this.state.smallScreen} />
            <Splash />
            <Console />
            <Features />
            <OtherFeatures />
            <CallToAction />
            <Colophon />
          </div>
        </body>
      </html>
    )
  }

}

App.propTypes = {}

export default App
