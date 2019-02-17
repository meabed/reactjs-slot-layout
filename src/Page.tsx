import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import isPlainObject from 'lodash.isplainobject'
import Consumer  from './Consumer'
import { PageProps } from './Page'

export interface PageProps {
  layout: String,
  children: React.ReactNode,
}
class Page extends  React.Component<PageProps, {}> {

  static propTypes = {
    layout: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  getSections(parent) {
    if (isPlainObject(parent)) {
      // Check if the element is a Section
      if (parent.type && parent.type.displayName === 'Section') {
        return { [parent.props.slot]: parent }
      }
      return {}
    } else if (Array.isArray(parent)) {
      let sections = []
      for (let i = 0, c = parent.length; i < c; i += 1) {
        sections = Object.assign({}, sections, this.getSections(parent[i]))
      }
      return sections
    }
    return {}
  }

  getLayout(name, layouts, sections) {
    const layout = layouts[name]
    const children = this.props.children
    const props = { ...this.props }
    delete props.layout
    delete props.children
    props.sections = sections
    return React.createElement(layout, props, children)
  }

  render() {
    return (
      <Consumer>
        {({ layouts }) => {
          const sections = this.getSections(this.props.children)
          const layout = this.getLayout(this.props.layout, layouts, sections)

          if (!layout) {
            throw new Error(`No layout found named: '${this.props.layout}'`)
          }

          return layout
        }}
      </Consumer>
    )
  }

}

export default Page
