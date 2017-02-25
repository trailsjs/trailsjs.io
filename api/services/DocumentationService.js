const request = require('request-promise')
const lang = require('iso-639-1')

/**
 * @module DocumentationService
 * @description Proxy documentation pages
 */
module.exports = class DocumentationService extends Service {

  get config () {
    return {
      protocol: 'https',
      host: 'trailsjs.github.io',
      base: 'doc',
      defaultLanguage: 'en',
      defaultExtension: 'html',
      supportedLanguages: [
        'en'
      ],
      allLanguages: lang.getAllCodes()
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
      supportedLanguages,
      allLanguages
    } = this.config

    const specifiedLang = allLanguages.includes(reqPath[0]) && reqPath.shift() || defaultLanguage
    const actualLang = supportedLanguages.includes(specifiedLang) && specifiedLang || defaultLanguage

    const docPath = [ actualLang, ...reqPath ].join('/')
    const uri = `${protocol}://${host}/${base}/${docPath}`

    this.log.info('DocumentationService: proxying uri', uri)

    return request(uri)
  }
}

