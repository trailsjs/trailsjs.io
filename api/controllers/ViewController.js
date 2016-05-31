'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  index (request, reply) {
    reply.view('index')
  }

  assets (request, reply) {
    this.log.info(request)
    reply('tryna get a file?')
  }

}
