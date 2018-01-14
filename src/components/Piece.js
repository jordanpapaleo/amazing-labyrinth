import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class Piece extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    const {style, label} = this.props

    return (
      <div className='piece-component' style={{...style, ...styles.piece}}>{label}</div>
    )
  }
}

const styles = {
  piece: {
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
