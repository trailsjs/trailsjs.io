'use strict'

module.exports = class ViewController extends Controller {

  static get pageMapping () {
    return {
      doc: 'Documentation',
      start: 'Start',
      plugins: 'Plugins',
      support: 'Support'
    }
  }

  page (request, reply) {
    const page = request.params.page

    reply.view(`components/environments/${ViewController[page] || 'Home'}`)
  }

}
