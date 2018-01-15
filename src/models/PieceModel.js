export default class PieceModel {
  constructor (props) {
    let positions = null
    let reducedVal = 0

    do {
      positions = setLayout(props)
      reducedVal = positions.reduce((accumulator, currentValue) => accumulator + currentValue)
    } while (reducedVal !== 2 && reducedVal !== 3)

    const [bottom, left, right, top] = positions

    this.bottom = bottom
    this.left = left
    this.right = right
    this.top = top
    this.rotation = props.rotation || Math.floor(Math.random() * 4) * 90
    this.order = props.order || null
    this.treasureId = props.treasureId || null
  }
}

function setLayout (props) {
  return [
    props.bottom || Math.round(Math.random()),
    props.left || Math.round(Math.random()),
    props.right || Math.round(Math.random()),
    props.top || Math.round(Math.random())
  ]
}
