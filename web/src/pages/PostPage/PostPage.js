import { MetaTags } from '@redwoodjs/web'

import BlogPostCell from 'src/components/BlogPost/BlogPostCell/BlogPostCell'

const PostPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Post" description="Post page" />

      <BlogPostCell id={parseInt(id)} />
    </>
  )
}

export default PostPage
