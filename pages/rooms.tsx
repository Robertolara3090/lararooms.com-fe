import { fetchAPI } from 'lib/fetchAPI'
import React, { FC } from 'react'

import Rooms from '../components/pages/Rooms'

const RoomsPage: FC<any> = ({ rooms }: { rooms: any }) => {
  return (
    <>
      <Rooms rooms={rooms} />
    </>
  )
}

export default RoomsPage

export async function getStaticProps() {
  try {
    // Run API calls in parallel
    const [roomsRes] = await Promise.all([fetchAPI('/rooms')])

    return {
      props: {
        rooms: roomsRes.data,
      },
      notFound: true,
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
  }
}
