'use strict'

const Controller = require('trails/controller')

/**
 * @module CollectiveController
 * @description OpenCollective API .
 */
module.exports = class CollectiveController extends Controller {

  getAnnualBudget (request, reply) {
    const { project } = request.params.project

    this.services.CollectiveService.getAnnualBudget(project)
      .then(budget => reply((budget / 100).toFixed(2)))
  }

}

