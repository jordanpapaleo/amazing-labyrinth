import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Piece from 'components/Piece'
import BoardNavigation from 'components/BoardNavigation'

export default class Board extends PureComponent {
  static propTypes = {
    size: PropTypes.number
  }

  handleNavigation = (pos, i) => {
    console.log(pos, i)
  }

  render () {
    const {size} = this.props
    const rows = [...Array(size)].map(() => [...Array(size)])

    return (
      <div className='board-component' style={styles.board}>
        <BoardNavigation size={size} cb={this.handleNavigation} />

        {rows.map((pieces, i) => (
          <div key={i} style={{display: 'flex'}}>
            {pieces.map((piece, j) => <Piece style={styles.pieceLayout} key={j} label={`${i}-${j}`} />)}
          </div>
        ))}
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
