var choo = require('choo')
var html = require('choo/html')
var MonoLazy = require('.')

class TestComponent extends MonoLazy {
  load (element) {
    super.load(element)
  }

  onEnter () {
    this.rerender()
  }

  createElement () {
    return html`<div>${this.hasEntered ? 'here i am' : 'patiently waiting'}</div>`
  }
}

var element = new TestComponent()

var app = choo()
app.route('/', function (state, emit) {
  return html`<body style="padding-top:150vh">${element.render()}</body>`
})
app.mount('body')
