import { render } from '@redwoodjs/testing/web'

import AnanasHero from './AnanasHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnanasHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnanasHero />)
    }).not.toThrow()
  })
})
