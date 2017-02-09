'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  index (request, reply) {
    reply.view('components/environments/Home')
  }

  documentation (request, reply) {
    reply.view('components/environments/Documentation')
  }

  start (request, reply) {
    reply.view('components/environments/Start')
  }

  plugins (request, reply) {
    reply.view('components/environments/Plugins')
  }

  support (request, reply) {
    reply.view('components/environments/Support')
  }

}
