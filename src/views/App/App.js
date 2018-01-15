import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Board from 'components/Board'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {initTreasure} from 'ducks/treasures.ducks'
import {initPieces} from 'ducks/pieces.ducks'
import {initDeck} from 'ducks/deck.ducks'

const mapStateToProps = state => ({
  treasures: state.treasures,
  pieces: state.pieces
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  initTreasure,
  initPieces,
  initDeck
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    pieces: PropTypes.array,
    treasures: PropTypes.array,
    initTreasure: PropTypes.func,
    initDeck: PropTypes.func,
    initPieces: PropTypes.func
  }

  componentWillMount () {
    this.props.initTreasure()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.treasures && nextProps.treasures !== this.props.treasures) {
      this.props.initPieces()
      this.props.initDeck()
    }
  }

  render () {
    const {pieces} = this.props

    return (
      <div className='app-component'>
        {!!pieces.length && <Board size={7} pieces={pieces} />}
      </div>
    )
  }
}
