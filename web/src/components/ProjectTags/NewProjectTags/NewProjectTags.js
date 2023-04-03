import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProjectTagsForm from 'src/components/ProjectTags/ProjectTagsForm'

const CREATE_PROJECT_TAGS_MUTATION = gql`
  mutation CreateProjectTagsMutation($input: CreateProjectTagsInput!) {
    createProjectTags(input: $input) {
      id
    }
  }
`

const NewProjectTags = () => {
  const [createProjectTags, { loading, error }] = useMutation(
    CREATE_PROJECT_TAGS_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProjectTags created')
        navigate(routes.projectTagss())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProjectTags({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProjectTags</h2>
      </header>
      <div className="rw-segment-main">
        <ProjectTagsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProjectTags
