// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <NavigationBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import NavigationBar from './NavigationBar'

export const generated = () => {
  return <NavigationBar />
}

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
}
