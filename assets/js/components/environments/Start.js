import React, { Component } from 'react'

import {
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Start extends Component {

  render() {
    return (
      <div>
        <Header />
        <TextSplash title="Get Started" subtitle="You'll be on your way in no time" />
        <Colophon />
      </div>
    )
  }
}

