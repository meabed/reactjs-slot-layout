import { Page } from '../page'

describe('Page test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Page is instantiable', () => {
    expect(Page).toBeInstanceOf(Function)
  })
})
