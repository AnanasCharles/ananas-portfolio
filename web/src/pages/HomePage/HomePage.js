import { motion, useScroll } from 'framer-motion'

import { MetaTags } from '@redwoodjs/web'

import AnanasHero from 'src/components/AnanasHero/AnanasHero'
import Projects from 'src/components/Projects/Projects'

const HomePage = () => {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed bottom-0 left-0 right-0 h-[10px] origin-left rounded-r-xl bg-yellow-500"
      />

      <AnanasHero />

      <Projects />

      <div className="mx-auto h-full w-full max-w-7xl space-x-5 px-5 py-10">
        <div className="text-3xl transition duration-300 ease-in-out hover:translate-x-16">
          Recent <span className="text-green-500">Blog Posts</span>
        </div>
        <div className="my-8">
          <div className="flex flex-wrap gap-8">
            {/* Blog Post */}
            <div className="max-h-full max-w-sm rounded-xl bg-gray-800">
              {/* Blog Content */}
              <div className="rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="post cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="post-content flex flex-col p-8">
                <div className="mx-auto text-xl">Lorem Ipsum Post</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Orci dapibus ultrices in iaculis nunc sed. Urna molestie at
                  elementum eu facilisis sed odio morbi quis. Venenatis urna
                </div>
                <div className="mx-auto mt-4 place-items-end content-end justify-end">
                  <button className="read-button">Read</button>
                </div>
              </div>
            </div>

            {/* Blog Post */}
            <div className="max-h-full max-w-sm rounded-xl bg-gray-800">
              {/* Blog Content */}
              <div className="rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="post cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="post-content flex flex-col p-8">
                <div className="mx-auto text-xl">Lorem Ipsum Post</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Orci dapibus ultrices in iaculis nunc sed. Urna molestie at
                  elementum eu facilisis sed odio morbi quis. Venenatis urna
                </div>
                <div className="mx-auto mt-4 place-items-end content-end justify-end">
                  <button className="read-button">Read</button>
                </div>
              </div>
            </div>

            {/* Blog Post */}
            <div className="max-h-full max-w-sm rounded-xl bg-gray-800">
              {/* Blog Content */}
              <div className="rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="post cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="post-content flex flex-col p-8">
                <div className="mx-auto text-xl">Lorem Ipsum Post</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Orci dapibus ultrices in iaculis nunc sed. Urna molestie at
                  elementum eu facilisis sed odio morbi quis. Venenatis urna
                </div>
                <div className="mx-auto mt-4 place-items-end content-end justify-end">
                  <button className="read-button">Read</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>----</div>

      <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
        <div className="text-3xl transition duration-300 ease-in-out hover:translate-x-16">
          Check out my <span className="text-teal-400">Newsletter</span>
        </div>
        <div className="my-8">Newsletter</div>
      </div>
    </>
  )
}

export default HomePage
