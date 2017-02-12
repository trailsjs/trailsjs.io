import React, { Component } from 'react'

import OtherFeature from './../organisms/OtherFeatureVertical'

const features = [
  {
    title: 'Cali Style',
    image: 'dist/img/calistyle-logo-square.jpg',
    url: 'http://cali-style.com/',
    text: `
      We design and build stellar Node.js Apps that fit any type of environment, and
      we provide consulting on anything in-between!
    `,
    location: 'San Diego, CA'
  },
  {
    title: 'Jimmy Aumard',
    image: 'dist/img/jaumard-logo-square.jpg',
    url: 'http://jaumard.com',
    text: `
      Jimmy is a Senior Software Engineer specialized in mobile development, and is a core
      contributor to Trails and several ecosystem modules.
    `,
    location: 'France'
  },
  {
    title: 'Langa',
    image: 'dist/img/langa-logo.svg',
    url: 'https://langa.io',
    text: `
      The team at Langa designed and authored much of the original Trails code back in 2015,
      and continues to sponsor and maintain the project. Langa can assist with support, consulting,
      and software development.
    `,
    location: 'Norfolk, VA / Chicago, IL / Austin, TX'
  },
]

export default class CommunitySupportFeatures extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="trails-more-features">
        <div className="container">
          <div className="trails-more-features-content vertical">
            {features.map((feature, i) => (<OtherFeature key={i} {...feature} />))}
          </div>

        </div>
      </section>
    )
  }
}
