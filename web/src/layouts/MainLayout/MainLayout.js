import { motion } from 'framer-motion'

import NavigationBar from 'src/components/NavigationBar/NavigationBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <motion.div>
        <NavigationBar />
        {children}
      </motion.div>
    </>
  )
}

export default MainLayout
