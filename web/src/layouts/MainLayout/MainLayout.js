import { motion } from 'framer-motion'

import NavigationBar from 'src/components/NavigationBar/NavigationBar'
const MainLayout = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <NavigationBar />
      </motion.div>
      {children}
    </>
  )
}

export default MainLayout
