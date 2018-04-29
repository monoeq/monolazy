var Nanocomponent = require('nanocomponent')
var onIntersect = require('on-intersect')

module.exports = class MonoLazy extends Nanocomponent {
  constructor () {
    super()
    this.hasEntered = null
  }

  load (element) {
    if (this.hasEntered) return
    this.stopObserving = onIntersect(element, function () {
      this.hasEntered = true
      if (this.onEnter) this.onEnter()
      this.stopObserving()
    }.bind(this))
  }

  unload () {
    if (this.stopObserving) this.stopObserving()
  }
}