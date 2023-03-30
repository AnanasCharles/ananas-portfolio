import { motion } from 'framer-motion'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import { SiCodeberg } from 'react-icons/si'

const AnanasHero = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 pb-10 pt-20 transition duration-500 ease-in">
      <div className="flex h-2/6 w-[256px] flex-col ">
        <div className="rounded-full ">
          <motion.img
            src="/images/ananas-avatar.jpg"
            className="w-[256px] rounded-full"
            alt="Avatar"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
        <motion.div
          className="mx-auto my-4 text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          Backflip!
        </motion.div>
      </div>
      <div className="flex h-full w-full rounded-md p-8 text-lg">
        <div>
          <motion.div
            className="mb-8 text-3xl font-bold tracking-wide"
            initial={{ x: 0 }}
            whileHover={{ x: 50 }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
          >
            Hi, I'm{' '}
            <motion.span
              className="text-4xl text-yellow-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Ananas Charles
            </motion.span>
          </motion.div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <div className="my-8 flex items-center gap-4">
            <FaTwitterSquare
              size={64}
              className="inline-block text-blue-500 transition duration-500 ease-in-out hover:origin-center hover:-translate-y-5 hover:-translate-x-4 hover:-rotate-12 hover:scale-125 hover:text-blue-600"
            />
            <FaGithubSquare
              size={64}
              className="inline-block text-purple-500 transition duration-500 ease-in-out hover:origin-center hover:-translate-y-6 hover:scale-125 hover:text-purple-600"
            />

            <SiCodeberg
              size={64}
              className="inline-block scale-88 rounded-lg bg-blue-300 p-2 text-black transition duration-500 ease-in-out hover:origin-center hover:-translate-y-5 hover:translate-x-4 hover:rotate-12 hover:scale-112 hover:bg-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnanasHero
