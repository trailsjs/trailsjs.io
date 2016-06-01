'use strict'
const React = require('react')
const ReactDOM = require('react-dom')
const AppComponent = require('./components/environments/App.js')

const App = React.createFactory(AppComponent.default)
const mountNode = document.getElementById('app-mount')
const serverState = window.state

ReactDOM.render(App(serverState), mountNode)
