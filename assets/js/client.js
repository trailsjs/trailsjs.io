'use strict'

const React = require('react')
const { render } = require('react-dom')
const { Router, Route, browserHistory, match } = require('react-router')

import {
  Home, Start, Documentation, Plugins, Support
} from './components/environments'

const mountNode = document.getElementById('app-mount')

match({ history }, (err, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps} history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/start" component={Start} />
      <Route path="/doc" component={Documentation} />
      <Route path="/plugins" component={Plugins} />
      <Route path="/support" component={Support} />
    </Router>,
    mountNode)
})
