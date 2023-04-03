export const schema = gql`
  type ProjectTags {
    id: Int!
    project: Project
    tag: Tag
    projectId: Int
    tagId: Int
  }

  type Query {
    projectTagss: [ProjectTags!]! @requireAuth
    projectTags(id: Int!): ProjectTags @requireAuth
  }

  input CreateProjectTagsInput {
    projectId: Int
    tagId: Int
  }

  input UpdateProjectTagsInput {
    projectId: Int
    tagId: Int
  }

  type Mutation {
    createProjectTags(input: CreateProjectTagsInput!): ProjectTags! @requireAuth
    updateProjectTags(id: Int!, input: UpdateProjectTagsInput!): ProjectTags!
      @requireAuth
    deleteProjectTags(id: Int!): ProjectTags! @requireAuth
  }
`
