module.exports = class ViewController extends Controller {

  favicon (request, reply) {
    reply()
  }

  home (request, reply) {
    Promise.all([
      this.app.services.CollectiveService.getAnnualBudget(),
      this.app.services.CollectiveService.getGithubFollowers()
    ])
    .then(([ budget, stargazers ]) => {
      reply.view('components/environments/Home', { budget, stargazers })
    })
  }

  plugins (request, reply) {
    reply.view('components/environments/Plugins')
  }

  support (request, reply) {
    reply.view('components/environments/Support')
  }

  /**
   * Render the start page
   */
  start (request, reply) {
    this.app.services.DocumentationService.proxy([ 'start' ])
      .then(docHtml => {
        reply.view('components/environments/Start', { docHtml })
      })
  }

  /**
   * Render the documentation pages
   */
  doc (request, reply) {
    const docpath = (request.params.docpath || '').split('/')

    this.app.services.DocumentationService.proxy(docpath)
      .then(docHtml => {
        return reply.view('components/environments/Documentation', { docHtml })
      })
      .catch(err => {
        this.log.error(`Documentation 404. Path: ${docpath}`)
        return reply.view('components/environments/NotFound', { })
      })
  }
}
