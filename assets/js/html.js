const React = require('react')

const Component = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    state: React.PropTypes.obj
  },

  render: function () {
    return (
      <html>
        <head>
          <title>TrailsJS</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <link rel="stylesheet" href="dist/style.css" />
          <link rel="stylesheet" href="//yui.yahooapis.com/pure/0.6.0/pure-min.css" />
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
})

module.exports = Component
