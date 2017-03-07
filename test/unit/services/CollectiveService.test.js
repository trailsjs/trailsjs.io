'use strict'

const assert = require('assert')

describe('CollectiveService', () => {
  it('should exist', () => {
    assert(global.app.services.CollectiveService)
  })

  describe('#getAnnualBudget', () => {
    it('should return cents in annual budget for trails', () => {
      return global.app.services.CollectiveService.getAnnualBudget('trails')
        .then(budget => {
          console.log(budget)
          assert(budget > 100000)
        })
    })
  })
})
