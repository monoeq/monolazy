<h1 align="center">monolazy</h1>

<div align="center">
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="Stability" />
  </a>
  <a href="https://www.npmjs.com/package/monolazy">
    <img src="https://img.shields.io/npm/v/monolazy.svg?style=flat-square" alt="NPM version" />
  </a>
</div>

<br />

Extended [nanocomponent](https://github.com/choojs/nanocomponent) which provides a single `onEnter` callback using [on-intersect](https://github.com/yoshuawuyts/on-intersect) when component enters the viewport.

## Usage

Extend `monolazy` the same way you extend `nanocomponent`

```js
var html = require('nanohtml')
var MonoLazy = require('monolazy')

class TestComponent extends MonoLazy {
  // implement onEnter, fires when element enters viewport
  onEnter () {
    this.rerender()
  }

  // use the hasEntered property to determine if element has entered viewport
  createElement () {
    return html`<div>${this.hasEntered ? 'here i am' : 'patiently waiting'}</div>`
  }
}
```

## Details

`monolazy` itself only implements `load` and `unload`. It is up to you to implement `onEnter` and `createElement` and any another methods!

If you need to implement your own `load`/`unload`, make sure you call the parent's `load`/`unload`:

```js
class TestComponent extends MonoLazy {
  load (element) {
    super.load(element)
    // custom load here
  }

  unload (element) {
    super.unload(element)
    // custom unload here
  }

  onEnter () {
    this.rerender()
  }

  createElement () {
    return html`<div>${this.hasEntered ? 'here i am' : 'patiently waiting'}</div>`
  }
}

```

## Polyfill

If you need to support browsers without [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), you can use a [polyfill](https://www.npmjs.com/package/intersection-observer):

```js
require('intersection-observer')
var MonoLazy = require('monolazy')
```

## See Also

- [monoeq/monoimage](https://github.com/monoeq/monoimage)
- [choojs/nanocomponent](https://github.com/choojs/nanocomponent)