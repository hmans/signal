export class Signal<Payload = void, Listener extends Function = (payload: Payload) => void> {
  private listeners = new Array<Listener>()

  add(fn: Listener) {
    this.listeners.push(fn)
  }

  remove(fn: Listener) {
    const pos = this.listeners.indexOf(fn, 0)
    if (pos > -1) this.listeners.splice(pos, 1)
  }

  clear() {
    this.listeners.length = 0
  }

  emit(payload: Payload) {
    for (const listener of this.listeners) {
      listener(payload)
    }
  }
}
