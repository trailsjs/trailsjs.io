import React, { Component } from 'react'

import OtherFeature from './../organisms/OtherFeature'

const features = [
  {
    title: '5,000',
    text: 'Monthly Downloads'
  },
  {
    title: '1,400',
    text: 'Github Followers'
  },
  {
    title: '100+',
    text: 'Contributors'
  },
  {
    title: '100+',
    text: 'Plugins'
  },
  {
    title: '$750',
    text: 'Paid Issue Bounties'
  },
  {
    title: '2.0.2',
    text: 'Current Version'
  }
]

class MoreFeatures extends Component {

  render() {
    return (
      <section className="trails-more-features">
        <div className="container">
          <header className="trails-section-header">
            <h2>Quick Look</h2>
          </header>
          <div className="trails-more-features-content">
            {features.map((feature, index) => {
              return (
                <OtherFeature
                  key={index}
                  title={feature.title}
                  text={feature.text} />
              )
            })}
          </div>

        </div>
      </section>
    )
  }

}

MoreFeatures.propTypes = {}

export default MoreFeatures
