import {PieceModel} from 'models'
import {corners, edges, middle} from 'constants/pieces'
import {shuffle} from 'services/arrayUtils'
import {sortByObjKey} from 'services/sortUtils'
import clonedeep from 'lodash.clonedeep'

const SET_PIECES = 'SET_PIECES'

export function initPieces () {
  return (dispatch, getState) => {
    const state = getState()
    const {treasures} = state
    const treasuresClone = shuffle(clonedeep(treasures))
    const tempPieces = [
      ...corners,
      ...[
        ...edges,
        ...middle
      ].map((piece) => {
        const treasure = treasuresClone.pop()
        return {
          ...piece,
          treasureId: treasure.id
        }
      })
    ]

    const pieces = []

    // YOU are here
    tempPieces
      .sort(sortByObjKey('order'))
      .forEach((piece, i) => {
        if (piece.order === pieces.length) {
          pieces.push({...piece})
        } else {
          let diff = piece.order - pieces.length

          while (diff >= 0) {
            if (diff === 0) {
              pieces.push({...piece})
            } else {
              pieces.push({
                order: pieces.length
              })
            }
            diff--
          }
        }
      })

    // Want to keep these as reference vars
    const untreasured = shuffle(pieces.filter(piece => !piece.treasureId))

    treasuresClone.forEach((treasure, i) => {
      untreasured[i].treasureId = treasure.id
    })

    dispatch({
      type: SET_PIECES,
      payload: pieces
    })
  }
}

export function shufflePieces () {
  return (dispatch, getState) => {
    const state = getState()
    const {pieces} = state

    dispatch({
      type: SET_PIECES,
      payload: shuffle(pieces)
    })
  }
}

const initialState = []
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PIECES:
      return action.payload
        .map(piece => new PieceModel(piece))
    default:
      return state
  }
}
