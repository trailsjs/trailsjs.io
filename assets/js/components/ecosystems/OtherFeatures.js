import React, { Component, PropTypes } from 'react'

import OtherFeature from './../organisms/OtherFeature'

const features = [
  {
    text: `Wayfarers green juice flexitarian cornhole
          trust fund. Master cleanse photo booth
          wolf vice, blog post- ironic authentic
          locavore.`
  },
  {
    text: `Wayfarers green juice flexitarian cornhole
          trust fund. Master cleanse photo booth
          wolf vice, blog post- ironic authentic
          locavore.`
  },
  {
    text: `Wayfarers green juice flexitarian cornhole
          trust fund. Master cleanse photo booth
          wolf vice, blog post- ironic authentic
          locavore.`
  },
  {
    text: `Wayfarers green juice flexitarian cornhole
          trust fund. Master cleanse photo booth
          wolf vice, blog post- ironic authentic
          locavore.`
  },
  {
    text: `Wayfarers green juice flexitarian cornhole
          trust fund. Master cleanse photo booth
          wolf vice, blog post- ironic authentic
          locavore.`
  },
  {
    text: `Wayfarers green juice flexitarian cornhole
          trust fund. Master cleanse photo booth
          wolf vice, blog post- ironic authentic
          locavore.`
  }
]

class MoreFeatures extends Component {

  render() {
    return (
      <section className="trails-more-features">
        <div className="container">
          <header className="trails-section-header">
            <h2>Features</h2>
          </header>

          <div className="trails-more-features-content">
            {features.map((feature, index) => {
              return (
                <OtherFeature
                  key={index}
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
