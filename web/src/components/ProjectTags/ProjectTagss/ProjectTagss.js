import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProjectTags/ProjectTagssCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PROJECT_TAGS_MUTATION = gql`
  mutation DeleteProjectTagsMutation($id: Int!) {
    deleteProjectTags(id: $id) {
      id
    }
  }
`

const ProjectTagssList = ({ projectTagss }) => {
  const [deleteProjectTags] = useMutation(DELETE_PROJECT_TAGS_MUTATION, {
    onCompleted: () => {
      toast.success('ProjectTags deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete projectTags ' + id + '?')) {
      deleteProjectTags({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Project id</th>
            <th>Tag id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {projectTagss.map((projectTags) => (
            <tr key={projectTags.id}>
              <td>{truncate(projectTags.id)}</td>
              <td>{truncate(projectTags.projectId)}</td>
              <td>{truncate(projectTags.tagId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.projectTags({ id: projectTags.id })}
                    title={'Show projectTags ' + projectTags.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProjectTags({ id: projectTags.id })}
                    title={'Edit projectTags ' + projectTags.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete projectTags ' + projectTags.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(projectTags.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTagssList
