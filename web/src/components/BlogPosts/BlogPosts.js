import { motion } from 'framer-motion'

import BlogPostsCell from './BlogPostsCell/BlogPostsCell'

const BlogPosts = () => {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-7xl space-x-5 px-5 py-10">
        <div className="text-3xl">
          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: 50 }}
            transition={{ duration: 1 }}
          >
            Recent <span className="text-green-500">Blog Posts</span>
          </motion.div>
        </div>
        <div className="my-8">
          <div className="flex flex-wrap gap-8">
            {/* Blog Post */}
            <BlogPostsCell take={3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPosts
