import isPlainObject from 'lodash.isplainobject'
import React from 'react'
import Consumer from './consumer'

export interface PageProps {
  layout: string
  children: React.ReactNode
}

export function Page(props: PageProps) {
  function getSections(parent: any) {
    if (isPlainObject(parent)) {
      // Check if the element is a Section
      if (parent.type && parent.type.displayName === 'Section') {
        return { [parent.props.slot]: parent }
      }

      return {}
    } else if (Array.isArray(parent)) {
      let sections = {}
      const c = parent.length
      for (let i = 0; i < c; i += 1) {
        sections = Object.assign({}, sections, getSections(parent[i]))
      }

      return sections
    }

    return {}
  }

  function getLayout(name: string, layouts: any[string], sections: any) {
    const layout = layouts[name]
    const { children } = props
    const newProps = { ...props }
    delete newProps.layout
    delete newProps.children
    // @ts-ignore
    newProps.sections = sections

    return React.createElement(layout, newProps, children)
  }

  return (
    <Consumer>
      {({ layouts }) => {
        const sections = getSections(props.children)
        const layout = getLayout(props.layout, layouts, sections)

        if (!layout) {
          throw new Error(`No layout found named: '${props.layout}'`)
        }

        return layout
      }}
    </Consumer>
  )
}

export default Page
