import { motion } from 'framer-motion'

const BlogPost = ({ post }) => {
  return (
    <>
      <div className="my-8 mx-auto">
        <div className="rounded-xl bg-gray-800">
          {/* Blog Content */}
          {post?.cover ? (
            <img src={post.cover} alt="post cover" className="rounded-t-xl" />
          ) : (
            ''
          )}
          <div className="post-content flex flex-col p-8">
            <div className="mx-auto text-4xl font-semibold tracking-wider">
              {post.title}
            </div>
            <div className="prose-lg mt-4 text-gray-300 ">{post.markdown}</div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <h2>{'BlogPost'}</h2>
    //   <p>ID: {post.id}</p>
    //   <p>Cover: {post.cover}</p>
    //   <img src={post.cover} alt="post cover" />
    //   <p>Title: {post.title}</p>
    //   <p>Markdown: {post.markdown}</p>
    //   <p>published: {post.published}</p>
    // </div>
  )
}

export default BlogPost
