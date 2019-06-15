import { Section } from './../'

describe('Page test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Section is instantiable', () => {
    expect(Section).toBeInstanceOf(Function)
  })
})
