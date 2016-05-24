/**
 * Server Configuration
 * (app.config.web)
 *
 * Configure the Web Server
 *
 * @see {@link http://trailsjs.io/doc/config/web}
 */

const path = require('path')

module.exports = {

  /**
   * The port to bind the web server to
   */
  port: process.env.PORT || 3000,

  plugins: [
    {
      register: require('vision'),
      options: { }
    },
    {
      register: require('inert'),
      options: { }
    }
  ],

  views: {
    engines: {
      jsx: require('hapi-react-views')
    },
    relativeTo: __dirname,
    path: 'views',
    compileOptions: {
      renderMethod: 'renderToString',
      layoutPath: path.join(__dirname, 'views'),
      layout: 'html'
    }
  }

}
