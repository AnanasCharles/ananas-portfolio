import { motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BlogPostsCell from 'src/components/BlogPosts/BlogPostsCell/BlogPostsCell'

const BlogPage = () => {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
        <div className="flex flex-wrap gap-8">
          {/* Blog Post */}
          <BlogPostsCell />
        </div>
      </div>
    </>
  )
}

export default BlogPage
