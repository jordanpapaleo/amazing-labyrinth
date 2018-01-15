import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {PieceModel} from 'models'

export default class Piece extends PureComponent {
  static propTypes = {
    piece: PropTypes.instanceOf(PieceModel)
  }

  state = {}

  render () {
    const {piece} = this.props

    return (
      <div style={{...styles.piece, transform: `rotate(${piece.rotation}deg)`}} className='piece-component'>
        {[...Array(9)].map((e, i) => {
          const style = {...styles.grid}

          if (
            (i === 4) ||
            (i === 1 && piece.top) ||
            (i === 3 && piece.left) ||
            (i === 5 && piece.right) ||
            (i === 7 && piece.bottom)
          ) {
            style.backgroundColor = 'white'
          }

          return <div key={i} style={style} />
        })}
      </div>
    )
  }
}

const styles = {
  piece: {
    border: '1px solid black',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%'
  },
  grid: {
    width: `${(1 / 3) * 100}%`,
    height: `${(1 / 3) * 100}%`,
    backgroundColor: 'orange'
  }
}
