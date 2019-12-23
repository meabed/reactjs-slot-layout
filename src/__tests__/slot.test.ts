import { Slot } from '../slot'

describe('Page test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Slot is instantiable', () => {
    expect(Slot).toBeInstanceOf(Function)
  })
})
