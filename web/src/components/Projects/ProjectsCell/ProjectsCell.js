import Project from '../Project/Project'

export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      name
      description
      link
      tags {
        tag {
          name
          color
          link
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <Project data={project} key={project.id} />
      })}
    </>
  )
}
