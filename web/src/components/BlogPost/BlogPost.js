import { motion } from 'framer-motion'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

const BlogPost = ({ post }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="my-8 mx-auto w-2/3">
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
              <div className="prose-lg mt-8 text-gray-300 ">
                <ReactMarkdown
                  remarkPlugins={remarkGfm}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                  {post.markdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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
