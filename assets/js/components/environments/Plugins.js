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
      <div className="plugins">
        <Header />
        <TextSplash title="Plugins" subtitle="We call them Trailpacks :)" />
        <article className="container">
          <header className="trails-section-header">
            <p>
              We're working hard on an excellent search interface for community Trailpacks! If you want to help out, check out the project here:
              <a href="https://github.com/trailsjs/trailmix">https://github.com/trailsjs/trailmix</a>
            </p>
            <p>
              In the meantime, you can find many of the trailpacks on npm:
              <a href="https://npms.io/search?q=trailpack">https://npms.io/search?q=trailpack</a>
            </p>
          </header>
        </article>
        <Colophon />
      </div>
    )
  }
}

