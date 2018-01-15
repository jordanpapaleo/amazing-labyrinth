import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class BoardPosition extends PureComponent {
  static propTypes = {
    position: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    const {style, position} = this.props

    return (
      <div className='boardPosition-component' style={{...style, ...styles.position}}>{position}</div>
    )
  }
}

const styles = {
  position: {
    border: '1px solid gray',
    backgroundColor: 'white',
    height: 100,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  }
}
