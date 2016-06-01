import React, { PropTypes, Component } from 'react'

import Feature from './../organisms/Feature'

const features = [
  {
    title: 'Modern',
    text: `Wayfarers green juice flexitarian cornhole
           trust fund. Master cleanse photo booth
           wolf vice, blog post- ironic authentic
           locavore. Brooklyn chambray mixtape
           vegan hashtag chia.`,
    image: 'dist/img/trails-features-modern.svg'
  },
  {
    title: 'Modular, Unopinionated',
    text: `Wayfarers green juice flexitarian cornhole
           trust fund. Master cleanse photo booth
           wolf vice, blog post- ironic authentic
           locavore. Brooklyn chambray mixtape
           vegan hashtag chia.`,
    image: 'dist/img/trails-features-modular.svg'
  },
  {
    title: 'Community-Driven',
    text: `Wayfarers green juice flexitarian cornhole
           trust fund. Master cleanse photo booth
           wolf vice, blog post- ironic authentic
           locavore. Brooklyn chambray mixtape
           vegan hashtag chia.`,
    image: 'dist/img/trails-features-community.svg'
  },
  {
    title: 'Trailsmix',
    text: `Wayfarers green juice flexitarian cornhole
           trust fund. Master cleanse photo booth
           wolf vice, blog post- ironic authentic
           locavore. Brooklyn chambray mixtape
           vegan hashtag chia.`,
    image: 'dist/img/trails-features-trailsmix.svg'
  }
]

class Features extends Component {

  render() {
    return (
      <section className="trails-features">
        <div className="container">
          <header className="trails-section-header">
            <h1>Blaze your own trails</h1>
          </header>
          {
            features.map((feature, index) => {
              return (
                <Feature
                  reverse={index % 2 !== 0}
                  key={index}
                  title={feature.title}
                  text={feature.text}
                  image={feature.image} />
              )
            })
          }
        </div>
      </section>
    )
  }

}

Features.propTypes = {}

export default Features
