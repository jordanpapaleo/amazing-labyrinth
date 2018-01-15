import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import BoardPosition from 'components/BoardPosition'
import BoardNavigation from 'components/BoardNavigation'
import Piece from 'components/Piece'
import clonedeep from 'lodash.clonedeep'

export default class Board extends PureComponent {
  static propTypes = {
    size: PropTypes.number,
    pieces: PropTypes.array
  }

  constructor (props) {
    super(props)

    const {size, pieces} = this.props
    const tempPieces = clonedeep(pieces)
    const statePieces = []

    const arrayCount = Math.round(tempPieces.length / size)
    let i = 0

    do {
      statePieces.push(tempPieces.splice(0, size))
      i++
    } while (i < arrayCount)

    this.state = {
      boardMatrix: [...Array(size)].map(() => [...Array(size)]),
      pieces: statePieces,
      nextPiece: tempPieces.pop()
    }
  }

  handleNavigation = (pos, i) => {
    console.log(pos, i)
  }

  render () {
    const {size} = this.props
    const {boardMatrix, pieces} = this.state

    return (
      <div className='board-component' style={styles.board}>
        <BoardNavigation size={size} cb={this.handleNavigation} />

        {boardMatrix.map((zones, i) => (
          <div key={i} style={{display: 'flex'}}>
            {zones.map((zone, j) => (
              <BoardPosition style={styles.pieceLayout} key={j} position={`${i}-${j}`}>
                <Piece piece={pieces[i][j]} />
              </BoardPosition>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

const styles = {
  board: {
    width: 900,
    height: 900,
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
