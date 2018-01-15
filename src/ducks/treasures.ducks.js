import treasures from 'constants/treasures'
import {TreasureModel} from 'models'

const SET_TREASURE = 'SET_TREASURE'

export function initTreasure () {
  return {
    type: SET_TREASURE,
    payload: treasures
  }
}

const initialState = []
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TREASURE:
      return action.payload.map((treasureName) => new TreasureModel(treasureName))
    default:
      return state
  }
}
