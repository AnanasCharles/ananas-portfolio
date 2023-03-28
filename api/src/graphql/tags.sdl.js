export const schema = gql`
  type Tag {
    id: Int!
    name: String!
    color: String!
    projects: [ProjectTags]!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: Int!): Tag @requireAuth
  }

  input CreateTagInput {
    name: String!
    color: String!
  }

  input UpdateTagInput {
    name: String
    color: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: Int!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: Int!): Tag! @requireAuth
  }
`
