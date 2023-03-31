import { render } from '@redwoodjs/testing/web'

import BlogCreatePage from './BlogCreatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BlogCreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogCreatePage />)
    }).not.toThrow()
  })
})
