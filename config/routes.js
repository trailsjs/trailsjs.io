/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the index view
   */
  {
    method: 'GET',
    path: '/{page?}',
    handler: 'ViewController.page'
  },

  {
    method: 'GET',
    path: '/start',
    handler: 'ViewController.start'
  },

  {
    method: 'GET',
    path: '/doc/{docpath*}',
    handler: 'ViewController.doc'
  },

  {
    method: 'GET',
    path: '/search',
    handler: 'TrailmixController.search'
  }
]
