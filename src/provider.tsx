import PropTypes from 'prop-types'
import React from 'react'
import Context from './context'

export interface ProviderProps {
  layouts: {}
  children: JSX.Element
}

export class Provider extends React.PureComponent<ProviderProps, {}> {
  static propTypes = {
    layouts: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.element.isRequired,
  }

  state = {
    layouts: this.props.layouts,
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
