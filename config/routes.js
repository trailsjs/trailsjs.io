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

  {
    method: 'GET',
    path: '/favicon.png',
    handler: {
      file: 'assets/img/favicon.png'
    }
  },

  {
    method: 'GET',
    path: '/sitemap.xml',
    handler: {
      file: 'assets/sitemap.xml'
    }
  },

  {
    method: 'GET',
    path: '/robots.txt',
    handler: {
      file: 'assets/robots.txt'
    }
  },

  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.home'
  },

  {
    method: 'GET',
    path: '/plugins',
    handler: 'ViewController.plugins'
  },

  {
    method: 'GET',
    path: '/support',
    handler: 'ViewController.support'
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
  },

  {
    method: 'GET',
    path: '/collective/budget/{project}',
    handler: 'CollectiveController.getAnnualBudget'
  }
]
