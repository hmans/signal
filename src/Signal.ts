export class Signal<Payload = void, Listener extends Function = (payload: Payload) => void> {
  private listeners = new Array<Listener>()

  constructor(fn?: Listener) {
    fn && this.add(fn)
  }

  add(fn: Listener) {
    this.listeners.push(fn)
    return this
  }

  remove(fn: Listener) {
    const pos = this.listeners.indexOf(fn, 0)
    if (pos > -1) this.listeners.splice(pos, 1)
    return this
  }

  clear() {
    this.listeners.length = 0
    return this
  }

  emit(payload: Payload) {
    for (const listener of this.listeners) {
      listener(payload)
    }
    return this
  }
}
