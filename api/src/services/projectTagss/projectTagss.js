import { db } from 'src/lib/db'

export const projectTagss = () => {
  return db.projectTags.findMany()
}

export const projectTags = ({ id }) => {
  return db.projectTags.findUnique({
    where: { id },
  })
}

export const createProjectTags = ({ input }) => {
  return db.projectTags.create({
    data: input,
  })
}

export const updateProjectTags = ({ id, input }) => {
  return db.projectTags.update({
    data: input,
    where: { id },
  })
}

export const deleteProjectTags = ({ id }) => {
  return db.projectTags.delete({
    where: { id },
  })
}

export const ProjectTags = {
  project: (_obj, { root }) => {
    return db.projectTags.findUnique({ where: { id: root?.id } }).project()
  },
  tag: (_obj, { root }) => {
    return db.projectTags.findUnique({ where: { id: root?.id } }).tag()
  },
}
