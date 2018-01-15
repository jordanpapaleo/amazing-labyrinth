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
      <div>{JSON.stringify(piece, null, 2)}</div>
    )
  }
}
