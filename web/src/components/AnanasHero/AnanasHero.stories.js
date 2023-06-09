// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AnanasHero {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AnanasHero from './AnanasHero'

export const generated = () => {
  return <AnanasHero />
}

export default {
  title: 'Components/AnanasHero',
  component: AnanasHero,
}
