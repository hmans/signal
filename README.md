# @hmans/signal

## A super duper simple signal implementation.

### tl;dr

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
