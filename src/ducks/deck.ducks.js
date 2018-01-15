import {shuffle} from 'services/arrayUtils'

const SET_DECK = 'SET_DECK'

export function initDeck () {
  return (dispatch, getState) => {
    const state = getState()
    const {treasures} = state

    dispatch({
      type: SET_DECK,
      payload: shuffle(treasures)
    })
  }
}

export function shuffleDeck () {
  return (dispatch, getState) => {
    const state = getState()
    const {deck} = state

    dispatch({
      type: SET_DECK,
      payload: shuffle(deck)
    })
  }
}

const initialState = []
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DECK:
      return [...action.payload]
    default:
      return state
  }
}
