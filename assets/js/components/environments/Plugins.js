import React, { Component } from 'react'

import {
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Plugins extends Component {

  render() {
    return (
      <div>
        <Header />
        <TextSplash title="Plugins" subtitle="We call them Trailpacks :)" />
        <Colophon />
      </div>
    )
  }
}

