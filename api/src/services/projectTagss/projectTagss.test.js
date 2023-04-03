import { projectTagss, projectTags, deleteProjectTags } from './projectTagss'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('projectTagss', () => {
  scenario('returns all projectTagss', async (scenario) => {
    const result = await projectTagss()

    expect(result.length).toEqual(Object.keys(scenario.projectTags).length)
  })

  scenario('returns a single projectTags', async (scenario) => {
    const result = await projectTags({ id: scenario.projectTags.one.id })

    expect(result).toEqual(scenario.projectTags.one)
  })

  scenario('deletes a projectTags', async (scenario) => {
    const original = await deleteProjectTags({
      id: scenario.projectTags.one.id,
    })
    const result = await projectTags({ id: original.id })

    expect(result).toEqual(null)
  })
})
