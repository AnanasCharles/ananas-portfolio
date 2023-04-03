export const schema = gql`
  type Project {
    id: Int!
    name: String!
    description: String!
    link: String!
    tags: [ProjectTags]!
  }

  type Query {
    projects: [Project!]! @skipAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    name: String!
    description: String!
    link: String!
  }

  input UpdateProjectInput {
    name: String
    description: String
    link: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
