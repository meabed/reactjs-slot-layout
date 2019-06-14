import { Slot } from './../'

describe('Page test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Slot is instantiable', () => {
    expect(Slot).toBeInstanceOf(Function)
  })
})
