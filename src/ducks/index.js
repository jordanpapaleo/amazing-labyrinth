import {combineReducers} from 'redux'
import deck from './deck.ducks'
import pieces from './pieces.ducks'
import treasures from './treasures.ducks'
import users from './users.ducks'

export default combineReducers({
  deck,
  pieces,
  treasures,
  users
})
