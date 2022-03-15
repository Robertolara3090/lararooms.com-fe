import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const AppShell: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default AppShell
