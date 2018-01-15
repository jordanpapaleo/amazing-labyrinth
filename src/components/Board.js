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
    this.setState((currentState) => {
      const pieces = [...currentState.pieces[i]]
      let nextPiece

      if (pos === 'top') {
        //
      } else if (pos === 'bottom') {
        //
      } else if (pos === 'left') {
        pieces.unshift(currentState.nextPiece)
        nextPiece = pieces.pop()
      } else if (pos === 'right') {
        pieces.push(currentState.nextPiece)
        nextPiece = pieces.shift()
      }

      const nextState = {
        pieces: [
          ...currentState.pieces.slice(0, i),
          pieces,
          ...currentState.pieces.slice(i + 1)
        ],
        nextPiece
      }

      return nextState
    })
  }

  handleRotateNext = () => {
    this.setState((currentState) => {
      let rotation = currentState.nextPiece.rotation + 90

      if (rotation === 360) {
        rotation = 0
      }

      return {
        nextPiece: {
          ...currentState.nextPiece,
          rotation
        }
      }
    })
  }

  render () {
    const {size} = this.props
    const {boardMatrix, pieces, nextPiece} = this.state

    return (
      <div className='board-component' style={styles.board}>
        {boardMatrix.map((zones, i) => (
          <div key={i} style={{display: 'flex'}}>
            {zones.map((zone, j) => (
              <BoardPosition style={styles.pieceLayout} key={j} position={`${i}-${j}`}>
                <Piece piece={pieces[i][j]} />
              </BoardPosition>
            ))}
          </div>
        ))}

        <BoardNavigation size={size} cb={this.handleNavigation} />

        <div style={{position: 'absolute', width: 100, height: 100, bottom: -150}} onClick={this.handleRotateNext}>
          <Piece piece={nextPiece} />
        </div>
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
