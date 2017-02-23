import React, { Component } from 'react'

import {
  CommunitySupportFeatures,
  ProfessionalSupportFeatures,
  Header,
  Colophon,
  TextSplash
} from '../ecosystems'

export default class Support extends Component {
  static get propTypes () {
    return { }
  }

  render () {
    return (
      <div className="support">
        <Header />
        <TextSplash title="Support" subtitle="We'll walk with you on your Journey" />
        <article className="container">
          <header className="trails-section-header">
            <h1>Community Support</h1>
            <h2><b>Free support</b> is always available from the Trails community</h2>
          </header>
          <CommunitySupportFeatures />

          <header className="trails-section-header">
            <h1>Professional Support</h1>
            <h2>Commercial support is available from these experts</h2>
          </header>
          <ProfessionalSupportFeatures />
        </article>
        <Colophon />
      </div>
    )
  }
}


