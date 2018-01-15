import {combineReducers} from 'redux'
import treasures from './treasures.ducks'
import pieces from './pieces.ducks'
import deck from './deck.ducks'
import users from './users.ducks'

export default combineReducers({
  deck,
  pieces,
  treasures,
  users
})
