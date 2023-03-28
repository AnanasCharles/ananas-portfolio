import { SiRedwoodjs } from 'react-icons/si'

import { Link } from '@redwoodjs/router'

const Project = ({ data }) => {
  console.log(data)
  return (
    <>
      <Link to={data.link}>
        <div className="my-8 w-full rounded-xl bg-gray-800 p-8">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col">
              <SiRedwoodjs
                size={128}
                className="inline-block text-orange-400"
              />
            </div>
            <div className="">
              <div className="mx-8 inline-block text-2xl tracking-wide">
                {data?.name}
              </div>

              {data?.tags.map((tag, index) => (
                <div
                  key={index}
                  className={`pill ${tag?.tag.color} ml-4 inline-block`}
                >
                  {tag.tag.name}
                </div>
              ))}

              {/* <div className="pill redwoodjs ml-4 inline-block">RedwoodJS</div>
            <div className="pill react ml-4 inline-block">React</div>
          <div className={`pill graphql ml-4 inline-block`}>GraphQL</div> */}

              <div className="ml-8 mt-4"> {data?.description}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Project
