import { motion, useScroll, useSpring } from 'framer-motion'

import { MetaTags } from '@redwoodjs/web'

import AnanasHero from 'src/components/AnanasHero/AnanasHero'
import BlogPosts from 'src/components/BlogPosts/BlogPosts'
import Projects from 'src/components/Projects/Projects'

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
    restDelta: 0.001,
  })

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <motion.div style={{ scaleY: scaleX }} className="scrollProgress" />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <AnanasHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <BlogPosts />
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto h-full w-full max-w-7xl items-center justify-center space-x-5 px-5 py-10">
          <div className="text-3xl">
            <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: 50 }}
              transition={{ duration: 1 }}
            >
              Check out my <span className="text-teal-400">Newsletter</span>
            </motion.div>
          </div>
          <div className="my-8">Newsletter</div>
        </div>
      </motion.div> */}
    </>
  )
}

export default HomePage
