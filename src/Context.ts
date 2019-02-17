import React from 'react'

type ContextProps = {}

/* First we will make a new context */
const Context: React.Context<any> = React.createContext<Partial<ContextProps>>({})

export default Context
