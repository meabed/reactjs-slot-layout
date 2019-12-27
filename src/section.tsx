import React from 'react'

export interface SectionProps {
  slot: string
  children?: React.ReactNode
}

export function Section(props: SectionProps) {
  return <>You must only use Section inside a Page </>
  // return (this.props.children);
}

Section.displayName = 'Section'

export default Section
