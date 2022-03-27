export function Signal<Payload>() {
  type Listener = (payload: Payload) => void

  const listeners = new Array<Listener>()

  function add(fn: Listener) {
    listeners.push(fn)
  }

  function remove(fn: Listener) {
    const pos = listeners.indexOf(fn, 0)
    if (pos) listeners.splice(pos, 1)
  }

  function clear() {
    listeners.length = 0
  }

  function emit(payload: Payload) {
    for (const listener of listeners) {
      listener(payload)
    }
  }

  return { add, remove, clear, emit }
}
