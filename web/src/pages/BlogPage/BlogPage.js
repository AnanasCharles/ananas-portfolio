import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogPostsCell from 'src/components/BlogPosts/BlogPostsCell/BlogPostsCell'

const BlogPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
          <div className="text-3xl">
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: 50 }}
              transition={{ duration: 1 }}
            >
              {'>'} <span className="text-green-500"> Blog Posts</span>
            </motion.div>
          </div>
          <div className="my-8 flex flex-wrap gap-8">
            {/* Blog Post */}
            <BlogPostsCell />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default BlogPage
