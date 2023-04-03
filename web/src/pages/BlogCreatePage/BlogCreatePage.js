import {
  FieldError,
  Form,
  Submit,
  TextAreaField,
  TextField,
  UrlField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_BLOG_POST_MUTATION = gql`
  mutation CreateBlogPostMutation($input: CreateBlogPostInput!) {
    createBlogPost(input: $input) {
      id
    }
  }
`

const BlogCreatePage = () => {
  const [createBlogPost, { loading, error }] = useMutation(
    CREATE_BLOG_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('Blog post created')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )
  const onSubmit = (data) => {
    createBlogPost({ variables: { input: data } })
  }

  return (
    <>
      <Toaster />
      <div className="container mx-auto my-8 max-w-lg">
        <h1 className="my-8 text-2xl">
          {'> '} Create <span className="text-green-500">Blog Post</span>
        </h1>
        <Form onSubmit={onSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="cover">Cover Image</label>
            <UrlField name="cover" className="form" />
            <FieldError name="cover" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <TextField name="title" required className="form" />
            <FieldError name="title" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="markdown">Content</label>
            <TextAreaField
              name="markdown"
              required
              className="form h-[250px]"
            />
            <FieldError name="markdown" />
          </div>

          <Submit className="read-button" disabled={loading}>
            Save
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default BlogCreatePage
