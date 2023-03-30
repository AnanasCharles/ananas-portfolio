import { motion, useScroll, useSpring } from 'framer-motion'

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
            <div className="post-content flex flex-col p-8">
              <div className="mx-auto text-xl font-semibold tracking-wider">
                {blogPost.title}
              </div>
              <div className="mt-4">{truncate(blogPost.markdown)}</div>
              <div>{blogPost.published}</div>
              <div className="mx-auto mt-4 place-items-end content-end justify-end">
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
