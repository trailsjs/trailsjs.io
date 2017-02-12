import React, { Component } from 'react'

import OtherFeature from './../organisms/OtherFeatureImage'

const features = [
  {
    title: 'Live Chat on Gitter',
    image: 'dist/img/gitter-logo-square.png',
    url: 'https://gitter.im/trailsjs/trails'
  },
  {
    title: 'File Issues on Github',
    image: 'dist/img/github-logo-square.png',
    url: 'https://github.com/trailsjs/trails/issues'
  },
  {
    title: 'Follow us on Twitter',
    image: 'dist/img/twitter-logo-square.png',
    url: 'https://twitter.com/trailsjs'
  }
]

export default class CommunitySupportFeatures extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="trails-more-features">
        <div className="container">
          <header className="trails-section-header">
          </header>
          <div className="trails-more-features-content">
            {features.map((feature, i) => (<OtherFeature key={i} {...feature} />))}
          </div>

        </div>
      </section>
    )
  }
}

