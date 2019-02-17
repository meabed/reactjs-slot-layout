import PropTypes from 'prop-types'
import React from 'react'

export interface SectionProps {
  slot: string,
  children?: React.ReactNode,
}

class Section extends React.PureComponent<SectionProps, {}> {

  static displayName = 'Section'

  static propTypes = {
    slot: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  render() {
    return ('You must only use <Section> inside a <Page>')
    // return (this.props.children);
  }

}

export default Section
