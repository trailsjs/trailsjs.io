'use strict'

/**
 * @module TrailmixController
 * @description TODO document Controller.
 */
module.exports = class TrailmixController extends Controller {

  search (request, reply) {
    this.app.services.TrailmixService.listTrailpacks()
      .then(packs => reply(packs))
  }
}

