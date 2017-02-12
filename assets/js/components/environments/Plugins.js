import React, { Component } from 'react'

//import Trailmix from 'trailmix/src/components/ecosystems/Takeahike'
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

