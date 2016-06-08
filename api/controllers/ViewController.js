'use strict'

const Controller = require('trails-controller')

const { bundler, routesMaker, menuMaker } = require('markdown-doc-bundler')
const path = require('path')
const _ = require('lodash')

const docs = bundler(
  path.resolve(__dirname, '..', '..', 'node_modules', 'trails-docs')
)

const routes = routesMaker(docs, 'docs')

module.exports = class ViewController extends Controller {

  index (request, reply) {
    reply.view('components/environments/Index')
  }

  documentation (request, reply) {

    function findDocs(routes) {
      return routes.find(route => {
        return route[0] === request.path
      })
    }

    const content = _.get(findDocs(routes), '1')

    if (content && _.isString(content)) {
      reply.view(
        'components/environments/Documentation',
        {
          markdown: content
        }
      )
    }
    else if (content && Buffer.isBuffer(content)) {
      reply(content)
    }
    else {
      reply('404!')
    }

  }

}
