// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <BlogPosts {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import BlogPosts from './BlogPosts'

export const generated = () => {
  return <BlogPosts />
}

export default {
  title: 'Components/BlogPosts',
  component: BlogPosts,
}
