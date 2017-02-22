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

    reply.view(`components/environments/${ViewController.pageMapping[page] || 'Home'}`)
  }

  /**
   * Render the documentation pages
   */
  doc (request, reply) {
    const docpath = (request.params.docpath || '').split('/')

    this.app.services.DocumentationService.proxy(docpath)
      .then(docHtml => {
        reply.view('components/environments/Documentation', { docHtml })
      })
  }
}
