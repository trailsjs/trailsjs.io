import React, { Component } from 'react'
import Feature from './../organisms/Feature'

const features = [
  {
    title: 'Modern, Concise',
    text: `
      Trails represents a new, advanced generation of Node.js framework,
      unencumbered by the tumultuous legacy of Javascript. Designed around the
      microservices pattern, the codebase is entirely in the ES6/ES7 dialect,
      which improves performance, testability, stability, and security.
    `,
    image: 'dist/img/trails-features-modern.svg'
  },
  {
    title: 'Hyper-Modular, Un-Opinionated',
    text: `
      Take the path less traveled. Or don't. With Trails, your team can use
      the design patterns and existing Node modules they already know.
      The capability of the framework itself is up to you, the developer, by
      creating a distro precisely from the modules you need to make your
      application great.
    `,
    image: 'dist/img/trails-features-modular.svg'
  },
  {
    title: 'Community Driven',
    text: `
      Trails presents a concise, coherent design surrounded by a thriving
      and diverse open-source ecosystem. Hundreds of Trails
      addons and integrations, published and maintained by the community
      and corporate sponsors alike, are available for use in your project.
    `,
    image: 'dist/img/trails-features-community.svg'
  }
]

export default class Features extends Component {

  static get propTypes () {
    return { }
  }

  render () {
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
