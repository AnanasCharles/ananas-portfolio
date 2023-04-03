import { motion, useScroll, useSpring } from 'framer-motion'

import BlogPost from '../BlogPost'

export const QUERY = gql`
  query FindBlogPostQuery($id: Int!) {
    blogPost: blogPost(id: $id) {
      id
      cover
      title
      markdown
      published
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ blogPost }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
    restDelta: 0.001,
  })
  return (
    <>
      <motion.div style={{ scaleY: scaleX }} className="scrollProgress" />

      <BlogPost post={blogPost} />
    </>
  )
}
