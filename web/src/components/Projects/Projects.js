import { SiRedwoodjs } from 'react-icons/si'

import Project from './Project/Project'
import ProjectsCell from './ProjectsCell/ProjectsCell'

const Projects = () => {
  return (
    <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
      <div className="text-3xl">
        Recent <span className="text-blue-500">Projects</span>
      </div>
      <div className="my-8">
        {/* <div className="w-full rounded-xl bg-gray-800 p-8">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col">
              <SiRedwoodjs
                size={128}
                className="inline-block text-orange-400"
              />
            </div>
            <div className="">
              <div className="mx-8 inline-block text-2xl tracking-wide">
                Lorem Ipsum Project
              </div>
              <div className="pill redwoodjs ml-4 inline-block">RedwoodJS</div>
              <div className="pill react ml-4 inline-block">React</div>
              <div className={`pill graphql ml-4 inline-block`}>GraphQL</div>
              <div className="ml-8 mt-4">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div> */}
        <ProjectsCell />
      </div>
    </div>
  )
}

export default Projects
