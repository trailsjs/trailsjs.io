import React, { Component } from 'react'

import OtherFeature from './../organisms/OtherFeature'

const features = [
  {
    title: '5,000',
    text: 'Monthly Downloads',
    url: 'http://bit.ly/2lzFhmF'
  },
  {
    title: '1,400',
    text: 'Github Followers',
    url: 'https://github.com/trailsjs/trails/stargazers'
  },
  {
    title: '100+',
    text: 'Contributors'
  },
  {
    title: '100+',
    text: 'Plugins',
    url: '/plugins',
  },
  {
    title: '$750+',
    text: 'Paid Bounties',
    url: 'https://www.bountysource.com/teams/trailsjs'
  },
  {
    title: '2.0.2',
    text: 'Current Version',
    url: 'https://github.com/trailsjs/trails/releases/latest'
  }
]

export default class MoreFeatures extends Component {

  static get propTypes () {
    return { }
  }

  render() {
    return (
      <section className="trails-more-features">
        <div className="container">
          <header className="trails-section-header">
            <h2>Quick Look</h2>
          </header>
          <div className="trails-more-features-content">
            {features.map((feature, i) => (<OtherFeature key={i} {...feature} />))}
          </div>

        </div>
      </section>
    )
  }
}
