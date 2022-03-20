import ContactUs from 'components/ContactUs'
import React from 'react'
import FloatingWhatsapp from './FloatingWhatsapp'
import Footer from './Footer'
import Navbar from './Navbar'

const AppShell: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ContactUs />
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default AppShell
