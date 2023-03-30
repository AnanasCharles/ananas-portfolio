import { db } from 'src/lib/db'

export const blogPosts = ({ take, skip }) => {
  return db.blogPost.findMany({
    orderBy: {
      id: 'desc',
    },
    take: take,
    skip: skip,
  })
}

export const blogPost = ({ id }) => {
  return db.blogPost.findUnique({
    where: { id },
  })
}

export const createBlogPost = ({ input }) => {
  return db.blogPost.create({
    data: input,
  })
}

export const updateBlogPost = ({ id, input }) => {
  return db.blogPost.update({
    data: input,
    where: { id },
  })
}

export const deleteBlogPost = ({ id }) => {
  return db.blogPost.delete({
    where: { id },
  })
}
