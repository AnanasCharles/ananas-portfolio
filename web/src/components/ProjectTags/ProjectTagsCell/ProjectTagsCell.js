import ProjectTags from 'src/components/ProjectTags/ProjectTags'

export const QUERY = gql`
  query FindProjectTagsById($id: Int!) {
    projectTags: projectTags(id: $id) {
      id
      projectId
      tagId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProjectTags not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projectTags }) => {
  return <ProjectTags projectTags={projectTags} />
}
