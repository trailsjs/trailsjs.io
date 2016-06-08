import React, { PropTypes, Component } from 'react'
import Header from './../ecosystems/Header'

class Layout extends Component {

  render() {
    return (
      <html>
        <head>
          <title>TrailsJS</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <link rel="stylesheet" href="/dist/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css" />
        </head>
        <body>
          <Header />
          { this.props.children }
        </body>
      </html>
    )
  }

}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
