import * as React from 'react'
import * as PropTypes from 'prop-types'
import Context from './Context'

export interface ProviderProps {
  layouts: any,
  children: JSX.Element,
}

class Provider extends React.PureComponent<ProviderProps, {}> {
  static propTypes = {
    layouts: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.element.isRequired
  }

  state = {
    layouts: this.props.layouts,
    layout: '',
    sections: null
  }

  setData = ({ layout, sections }: any) => {
    if (!this.state.sections) {
      this.setState({ layout, sections })
    }
  }

  render() {
    return (
      <Context.Provider value={ {
        ...this.state,
        setData: this.setData
      } }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export default Provider
