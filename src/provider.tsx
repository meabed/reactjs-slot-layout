import React, { useState } from 'react'
import Context from './context'

export interface ProviderProps {
  value: {}
  children: JSX.Element
}

export function Provider(props: ProviderProps) {
  const [layouts, setLayouts] = useState(props.value)
  const [layout, setLayout] = useState()
  const [sections, setSections] = useState(null)

  return (
    <Context.Provider
      value={{
        layouts,
        layout,
        sections,
        setLayout,
        setSections,
        setLayouts,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
