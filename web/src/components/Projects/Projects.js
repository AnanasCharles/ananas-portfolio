import { SiRedwoodjs } from 'react-icons/si'

import Project from './Project/Project'
import ProjectsCell from './ProjectsCell/ProjectsCell'

const Projects = () => {
  return (
    <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
      <div className="text-3xl transition duration-300 ease-in-out hover:translate-x-16">
        Recent <span className="text-blue-500">Projects</span>
      </div>
      <div className="my-8">
        <ProjectsCell />
      </div>
    </div>
  )
}

export default Projects
