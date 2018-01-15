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
  treasures: state.treasures
})
const mapDispatchToProps = dispatch => (bindActionCreators({
  initTreasure,
  initPieces,
  initDeck
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
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
    return (
      <div className='app-component'>
        <Board size={7} />
      </div>
    )
  }
}
