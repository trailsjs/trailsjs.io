'use strict'

const request = require('request-promise')

/**
 * @module CollectiveService
 * @description TODO document Service
 */
module.exports = class CollectiveService extends Service {
  /**
   * Get the annual budget for the trails open collective
   */
  getAnnualBudget (project = 'trails') {
    const uri = `https://opencollective.com/api/groups/${project}`

    return request(uri)
      .then(body => JSON.parse(body))
      .then(group => group.yearlyIncome)
  }

  getGithubFollowers (project = 'trails') {
    const options = {
      url: 'https://api.github.com/repos/trailsjs/trails',
      auth: {
        user: 'tjwebb',
        pass: this.app.config.github.token
      },
      headers: {
        'User-Agent': 'Trails'
      }
    }

    return request(options)
      .then(body => JSON.parse(body))
      .then(repo => repo.watchers_count)
  }
}

