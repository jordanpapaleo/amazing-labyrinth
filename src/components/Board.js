import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import BoardPosition from 'components/BoardPosition'
import BoardNavigation from 'components/BoardNavigation'

export default class Board extends PureComponent {
  static propTypes = {
    size: PropTypes.number
  }

  state = {
    boardMatrix: [...Array(this.props.size)].map(() => [...Array(this.props.size)]),
    pieces: [...Array(this.props.size * this.props.size).map((piece, i) => ({label: i}))],
    nextPiece: {label: 'next'}
  }

  handleNavigation = (pos, i) => {
    console.log(pos, i)
  }

  render () {
    const {size} = this.props
    const {boardMatrix} = this.state

    return (
      <div className='board-component' style={styles.board}>
        <BoardNavigation size={size} cb={this.handleNavigation} />

        {boardMatrix.map((pieces, i) => (
          <div key={i} style={{display: 'flex'}}>
            {pieces.map((piece, j) => <BoardPosition style={styles.pieceLayout} key={j} position={`${i}-${j}`} />)}
          </div>
        ))}

        {/* <Piece label='other' style={{width: 100, position: 'absolute', bottom: -100, left: 100}} /> */}
      </div>
    )
  }
}

const styles = {
  board: {
    padding: 100,
    backgroundColor: 'lightgray',
    position: 'relative'
  },
  pieceLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
