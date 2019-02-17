import * as React from 'react'
import * as PropTypes from 'prop-types'

export interface SlotProps {
  sections: any,
  name: string,
  component?: any, // eslint-disable-line
  wrapper?: JSX.Element,
  className?: string,
  style?: {}, // eslint-disable-line
  children?: React.ReactNode

}

class Slot extends React.Component<SlotProps, {}> {

  static propTypes = {
    sections: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    component: PropTypes.any, // eslint-disable-line
    wrapper: PropTypes.element,
    className: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line
    children: PropTypes.node
  }

  static defaultProps = {
    component: 'div',
    wrapper: undefined,
    className: undefined,
    style: {},
    children: false
  }

  getSection(sectionName: string) {
    return this.props.sections[sectionName] || false
  }

  render() {
    const { className, style, component, wrapper } = this.props
    const section = this.getSection(this.props.name)
    const children = section ? section.props.children : this.props.children
    const props = { className, style }

    if (!children) {
      return false
    }

    if (wrapper) {
      return React.cloneElement(wrapper, props, children)
    }

    if (component !== '<>' && component !== '') {
      return React.createElement(component, props, children)
    }

    return children
  }

}

export default Slot
