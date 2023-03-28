// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Projects {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Projects from './Projects'

export const generated = () => {
  return <Projects />
}

export default {
  title: 'Components/Projects',
  component: Projects,
}
