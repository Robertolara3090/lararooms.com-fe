import React from 'react'
import { Room } from 'types'
import ExploreRooms from '../ExploreRooms'

import Hero from '../Hero'
import Stats from '../Stats'

const Home = ({ featuredRoom }: { featuredRoom: Room | null }) => {
  return (
    <main>
      <Hero />
      <Stats />
      {featuredRoom?.featured && <ExploreRooms featuredRoom={featuredRoom} />}
    </main>
  )
}

export default Home
