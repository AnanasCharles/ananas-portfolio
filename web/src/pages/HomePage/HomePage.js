import { MetaTags } from '@redwoodjs/web'

import AnanasHero from 'src/components/AnanasHero/AnanasHero'
import Projects from 'src/components/Projects/Projects'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <AnanasHero />

      <Projects />

      <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
        <div className="text-3xl transition duration-300 ease-in-out hover:translate-x-16">
          Recent <span className="text-green-500">Blog Posts</span>
        </div>
        <div className="my-8">
          <div className="flex flex-wrap gap-8">
            <div className="max-w-sm rounded-xl bg-gray-800">
              {/* Blog Content */}
              <div className="post-content flex flex-col p-8">
                <div className="mx-auto text-xl">Lorem Ipsum Post</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Orci dapibus ultrices in iaculis nunc sed. Urna molestie at
                  elementum eu facilisis sed odio morbi quis. Venenatis urna
                  cursus eget nunc scelerisque viverra mauris in aliquam.
                </div>
                <div className="mx-auto mt-4 place-items-end content-end justify-end">
                  <button className="read-button">Read</button>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded-xl bg-gray-800">
              {/* Blog Content */}
              <div className="post-content flex flex-col p-8">
                <div className="mx-auto text-xl">Lorem Ipsum Post</div>
                <div className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Orci dapibus ultrices in iaculis nunc sed. Urna molestie at
                  elementum eu facilisis sed odio morbi quis. Venenatis urna
                  cursus eget nunc scelerisque viverra mauris in aliquam.
                </div>
                <div className="mx-auto mt-4 place-items-end content-end justify-end">
                  <button className="read-button">Read</button>
                </div>
              </div>
            </div>

            <div className="max-h-full max-w-sm rounded-xl bg-gray-800">
              {/* Blog Content */}
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
