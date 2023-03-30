export const schema = gql`
  type BlogPost {
    id: Int!
    cover: String
    title: String!
    markdown: String!
    published: DateTime!
  }

  type Query {
    blogPosts(take: Int, skip: Int): [BlogPost!]! @skipAuth
    blogPost(id: Int!): BlogPost @skipAuth
  }

  input CreateBlogPostInput {
    cover: String
    title: String!
    markdown: String!
    published: DateTime!
  }

  input UpdateBlogPostInput {
    cover: String
    title: String
    markdown: String
    published: DateTime
  }

  type Mutation {
    createBlogPost(input: CreateBlogPostInput!): BlogPost! @requireAuth
    updateBlogPost(id: Int!, input: UpdateBlogPostInput!): BlogPost!
      @requireAuth
    deleteBlogPost(id: Int!): BlogPost! @requireAuth
  }
`
