require('purecss/build/pure-min.css')
require('./../styles/style.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/environments/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
