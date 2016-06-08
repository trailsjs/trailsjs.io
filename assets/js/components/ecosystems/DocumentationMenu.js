import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

class DocumentationMenu extends Component {

  constructor(props) {
    super(props)
  }

  makeMenu(menu) {

    function innerMakeMenu(link) {

      return _.reduce( menu, function(memo, link, index) {

        const keys = _.toArray(link)

        // This link doesn't have any children
        if (keys.length === 2) {
          memo.push(
            <li key={index}><a href={link.path}>{link.name}</a></li>
          )
        }

        // This link has children (keys other than name and path)
        else if (keys.length > 2) {
          memo.push(
            <li key={index}><a href={link.path}>{link.name}</a>

            </li>
          )
        }

        return memo

      }, [])
    }

    return innerMakeMenu(menu)

  }

  render() {

    return (
      <nav>
        <ul>
          {this.makeMenu(this.props.menu)}
        </ul>
      </nav>
    )
  }

}

DocumentationMenu.propTypes = {
  menu: PropTypes.object
}

export default DocumentationMenu
