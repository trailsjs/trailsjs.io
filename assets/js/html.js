import React, { PropTypes, Component } from 'react'

export default class IndexPage extends Component {

  static get propTypes () {
    return {
      children: PropTypes.any,
      state: PropTypes.obj
    }
  }

  render () {
    return (
      <html>
        <head>
          <title>Trails | Modern Web Framework for Node.js</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <link rel="stylesheet" href="dist/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css" />
        </head>
        <body>
          <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
          <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>
          <script src="dist/client.js"></script>
        </body>
      </html>
    )
  }
}
