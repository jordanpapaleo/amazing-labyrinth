export class PieceModel {
  constructor (props) {
    this.bottom = props.bottom || 1
    this.left = props.left || 1
    this.locked = props.locked || false
    this.right = props.right || 1
    this.rotation = props.rotation || 0
    this.top = props.top || 1
  }
}
