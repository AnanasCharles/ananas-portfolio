import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PROJECT_TAGS_MUTATION = gql`
  mutation DeleteProjectTagsMutation($id: Int!) {
    deleteProjectTags(id: $id) {
      id
    }
  }
`

const ProjectTags = ({ projectTags }) => {
  const [deleteProjectTags] = useMutation(DELETE_PROJECT_TAGS_MUTATION, {
    onCompleted: () => {
      toast.success('ProjectTags deleted')
      navigate(routes.projectTagss())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete projectTags ' + id + '?')) {
      deleteProjectTags({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProjectTags {projectTags.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{projectTags.id}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{projectTags.projectId}</td>
            </tr>
            <tr>
              <th>Tag id</th>
              <td>{projectTags.tagId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProjectTags({ id: projectTags.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(projectTags.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProjectTags
