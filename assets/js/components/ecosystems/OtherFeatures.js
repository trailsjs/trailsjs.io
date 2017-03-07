import React, { Component } from 'react'

import OtherFeature from './../organisms/OtherFeature'

const features = {
  downloads: {
    title: '5,000+',
    text: 'Monthly Downloads',
    url: 'http://bit.ly/2lzFhmF'
  },
  followers: {
    text: 'Github Followers',
    url: 'https://github.com/trailsjs/trails/stargazers'
  },
  contributors: {
    title: '200+',
    text: 'Active Contributors',
    url: 'https://gitter.im/trailsjs/trails'
  },
  plugins: {
    title: '100+',
    text: 'Plugins',
    url: '/plugins',
  },
  collective: {
    text: 'Open Collective Budget',
    url: 'https://opencollective.com/trails',
  },
  version: {
    title: '2.0.2',
    text: 'Current Version',
    url: 'https://github.com/trailsjs/trails/releases/latest'
  }
}

export default class MoreFeatures extends Component {

  static get propTypes () {
    return {
      budget: React.PropTypes.number,
      stargazers: React.PropTypes.number
    }
  }

  renderCollectiveBudget () {
    const usd = Math.round(this.props.budget / 100).toLocaleString()

    return '$' + usd
  }

  renderGithubFollowers () {
    return this.props.stargazers.toLocaleString()
  }

  render() {

    return (
      <section className="trails-more-features">
        <div className="container">
          <header className="trails-section-header">
            <h2>Quick Look</h2>
          </header>
          <div className="trails-more-features-content">

            <OtherFeature {...features.downloads} />
            <OtherFeature {...features.followers} title={this.renderGithubFollowers()} />
            <OtherFeature {...features.contributors} />

            <OtherFeature {...features.plugins} />
            <OtherFeature {...features.collective} title={this.renderCollectiveBudget()} />
            <OtherFeature {...features.version} />

          </div>

        </div>
      </section>
    )
  }
}
