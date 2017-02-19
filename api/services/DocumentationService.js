const request = require('request-promise')

/**
 * @module DocumentationService
 * @description Proxy documentation pages
 */
module.exports = class DocumentationService extends Service {

  get config () {
    return {
      protocol: 'http',
      host: 'trailsjs.github.io',
      base: 'doc',
      defaultLanguage: 'en',
      defaultExtension: 'html',
      supportedLanguages: [
        'en',
        'fr'
      ]
    }
  }

  /**
   * Proxies simple doc path requests to the documentation server (gh pages)
   * @return html string
   */
  proxy (reqPath) {
    const {
      protocol,
      host,
      base,
      defaultLanguage,
      //defaultExtension,
      supportedLanguages
    } = this.config

    const lang = supportedLanguages.includes(reqPath[0]) ? reqPath.shift() : defaultLanguage
    const docPath = [ lang, ...reqPath ].join('/')
    const uri = `${protocol}://${host}/${base}/${docPath}`

    this.log.info('proxying', uri)

    return request(uri)
  }
}

