import React from 'react'
import ExploreRooms from '../ExploreRooms'

import Hero from '../Hero'
import Stats from '../Stats'
import ContactUs from '../ContactUs'

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <ExploreRooms />
      <ContactUs />
    </main>
  )
}

export default Home
