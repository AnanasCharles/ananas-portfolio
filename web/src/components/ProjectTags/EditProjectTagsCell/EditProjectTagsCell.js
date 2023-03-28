import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProjectTagsForm from 'src/components/ProjectTags/ProjectTagsForm'

export const QUERY = gql`
  query EditProjectTagsById($id: Int!) {
    projectTags: projectTags(id: $id) {
      id
      projectId
      tagId
    }
  }
`
const UPDATE_PROJECT_TAGS_MUTATION = gql`
  mutation UpdateProjectTagsMutation(
    $id: Int!
    $input: UpdateProjectTagsInput!
  ) {
    updateProjectTags(id: $id, input: $input) {
      id
      projectId
      tagId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projectTags }) => {
  const [updateProjectTags, { loading, error }] = useMutation(
    UPDATE_PROJECT_TAGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProjectTags updated')
        navigate(routes.projectTagss())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProjectTags({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProjectTags {projectTags?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProjectTagsForm
          projectTags={projectTags}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
