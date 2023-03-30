import { motion } from 'framer-motion'
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
                <Link to={tag.tag.link} key={index}>
                  <motion.div
                    className={`pill ${tag?.tag.color} animated-project-pill ml-4 inline-block`}
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {tag.tag.name}
                  </motion.div>
                </Link>
              ))}

              <div className="ml-8 mt-4"> {data?.description}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Project
