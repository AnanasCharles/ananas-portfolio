import { Link, routes } from '@redwoodjs/router'

import ProjectTagss from 'src/components/ProjectTags/ProjectTagss'

export const QUERY = gql`
  query FindProjectTagss {
    projectTagss {
      id
      projectId
      tagId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No projectTagss yet. '}
      <Link to={routes.newProjectTags()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projectTagss }) => {
  return <ProjectTagss projectTagss={projectTagss} />
}
