[![Tests](https://github.com/hmans/signal/actions/workflows/tests.yml/badge.svg)](https://github.com/hmans/signal/actions/workflows/tests.yml)
[![Version](https://img.shields.io/npm/v/@hmans/signal)](https://www.npmjs.com/package/@hmans/signal)
[![Downloads](https://img.shields.io/npm/dt/@hmans/signal.svg)](https://www.npmjs.com/package/@hmans/signal)
[![Bundle Size](https://img.shields.io/bundlephobia/min/@hmans/signal?label=bundle%20size)](https://bundlephobia.com/result?p=@hmans/signal)

# @hmans/signal

A super duper simple signal implementation that I use in many of my other projects. It doesn't do anything terribly exciting, but provides some API niceties for added convenience.

Signals represent distinct signals -- or events -- that allow interested parties to add callbacks to them that will be evoked whenever the signal is emitted. Unlike `eventemitter` and friends, distinct signals are expressed as separate instances -- there is no key-based routing (in fact, there aren't even any keys to begin with!)

## Projects using @hmans/signal

- [miniplex](https://github.com/hmans/miniplex)
- [controlfreak](https://github.com/hmans/controlfreak)
- [Trinity](https://github.com/hmans/trinity)

## Usage

```tsx
import { Signal } from "@hmans/signal"

const signal = new Signal<number>()
signal.add((n) => console.log(n))
signal.emit()
```

Callbacks are added through `add` and removed through `remove`.

```tsx
const callback = (n) => console.log(n)
signal.add(callback)
signal.remove(callback)
```

`clear` discards all registered listeners:

```tsx
signal.clear()
```

Signals optionally accept a listener through their constructor (just a bit of syntactical sugar for convenience):

```tsx
const signal = new Signal(() => console.log("I've been signalled!"))
signal.emit()
```

Interactions with `Signal` instances can be chained:

```tsx
new Signal<string>()
  .add((name) => console.log(`Hello ${name}!`))
  .add((name) => console.log(`Hi again ${name}!`))
  .emit()
```
