import { render } from '@redwoodjs/testing/web'

import BlogPosts from './BlogPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BlogPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPosts />)
    }).not.toThrow()
  })
})
