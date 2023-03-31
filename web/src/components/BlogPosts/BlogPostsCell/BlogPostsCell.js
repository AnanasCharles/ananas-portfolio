import { motion, useScroll, useSpring } from 'framer-motion'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

import { Link, routes } from '@redwoodjs/router'

import { truncate } from 'src/lib/formatters'
export const QUERY = gql`
  query BlogPostsQuery($take: Int, $skip: Int) {
    blogPosts(take: $take, skip: $skip) {
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

export const Success = ({ blogPosts }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div style={{ scaleY: scaleX }} className="scrollProgress" />

      {blogPosts.map((blogPost) => (
        <motion.div whileHover={{ scale: 1.1 }} key={blogPost.id}>
          <div className=" max-w-sm rounded-xl bg-gray-800">
            {/* Blog Content */}
            {blogPost?.cover ? (
              <img
                src={blogPost.cover}
                alt="post cover"
                className="rounded-t-xl"
              />
            ) : (
              ''
            )}
            <div className="post-content max-h-lg min-h-lg relative flex h-[275px] flex-col p-8">
              <div className="mx-auto text-xl font-semibold tracking-wider">
                {blogPost.title}
              </div>
              <div className="mt-4">
                <ReactMarkdown
                  remarkPlugins={remarkGfm}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                  {truncate(blogPost.markdown)}
                </ReactMarkdown>
              </div>
              <div className="my-4">Posted: {blogPost.published}</div>
              <div className="absolute bottom-5 right-5 mx-auto mt-4">
                <Link
                  className="read-button"
                  to={routes.post({ id: blogPost.id })}
                >
                  Read
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  )
}
