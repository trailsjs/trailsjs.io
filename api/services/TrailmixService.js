'use strict'

const request = require('request-promise')
const NPM_URI = 'https://registry.npmjs.org/-/_view/byKeyword?startkey=["trailpack"]&endkey=["trailpack",{}]&group_level=3'

/**
 * @module TrailmixService
 * @description TODO document Service
 */
module.exports = class TrailmixService extends Service {
  listTrailpacks () {
    return request(NPM_URI)
      .then(r => JSON.parse(r))
      .then(({ rows }) => rows)
      .then(rows => rows.map(r => {
        return {
          name: r.key[1],
          description: r.key[2]
        }
      }))
  }
}

