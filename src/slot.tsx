import React from 'react'

export interface SlotProps {
  sections: any
  name: string
  component?: any // eslint-disable-line
  wrapper?: JSX.Element
  className?: string
  style?: {} // eslint-disable-line
  children?: React.ReactNode
}

export function Slot(props: SlotProps) {
  function getSection(sectionName: string): any | false {
    return props.sections[sectionName] || false
  }

  const { className, style = {}, component = 'div', wrapper } = props
  const section = getSection(props.name)
  const children = section ? section.props.children : props.children || false
  const newProps = { className, style }

  if (!children) {
    return false
  }

  if (wrapper) {
    return React.cloneElement(wrapper, newProps, children)
  }

  if (component !== '<>' && component !== '') {
    return React.createElement(component, newProps, children)
  }

  return children
}

export default Slot
