import { Signal } from "../src/Signal"

describe("Signal", () => {
  it("provides a signal that listeners can be added to which are then called back once the signal is invoked", () => {
    let proof = ""

    const signal = new Signal<string>()
    signal.add((payload) => (proof = payload))
    signal.emit("it works")

    expect(proof).toEqual("it works")
  })

  describe("remove", () => {
    it("removes a listener", () => {
      let proof = ""
      const listener = (payload: string) => (proof = payload)

      const signal = new Signal<string>()
      signal.add(listener)
      signal.emit("it works")
      expect(proof).toEqual("it works")

      signal.remove(listener)
      signal.emit("it still works")
      expect(proof).toEqual("it works")
    })
  })

  describe("clear", () => {
    it("removes all listeners", () => {
      let proof = ""
      const listener = (payload: string) => (proof = payload)

      const signal = new Signal<string>()
      signal.add(listener)
      signal.emit("it works")
      expect(proof).toEqual("it works")

      signal.clear()
      signal.emit("it still works")
      expect(proof).toEqual("it works")
    })
  })

  it("supports signals without payloads", () => {
    let count = 0
    const signal = new Signal()
    signal.add(() => count++)
    signal.emit()
    expect(count).toEqual(1)
  })
})
