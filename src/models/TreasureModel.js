export default class TreasureModel {
  constructor (name) {
    this.name = name || '--'
    this.id = `${this.name}-${Date.now()}`
  }
}
