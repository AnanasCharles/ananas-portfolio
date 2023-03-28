import NavigationBar from 'src/components/NavigationBar/NavigationBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}

export default MainLayout
