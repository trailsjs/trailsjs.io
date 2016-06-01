'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, browserHistory } = require('react-router')

const Index = require('./components/environments/Index').default
const Docs = require('./components/environments/Documentation').default

const mountNode = document.getElementById('app-mount')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Index} />
    <Route path="/docs" component={Docs} />
  </Router>,
  mountNode
)
