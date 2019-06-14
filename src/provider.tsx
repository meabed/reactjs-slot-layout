import PropTypes from 'prop-types'
import React from 'react'
import Context from './context'

export interface ProviderProps {
  value: {}
  children: JSX.Element
}

export class Provider extends React.PureComponent<ProviderProps, {}> {
  static propTypes = {
    value: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.element.isRequired,
  }

  state = {
    layouts: this.props.value,
    layout: '',
    sections: null,
  }

  setData = ({ layout, sections }: any) => {
    if (!this.state.sections) {
      this.setState({ layout, sections })
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          setData: this.setData,
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
