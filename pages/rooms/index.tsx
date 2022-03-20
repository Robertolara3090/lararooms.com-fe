import React from 'react'
import { Room } from 'types'
import { fetchAPI } from 'lib/fetchAPI'
import Rooms from 'components/pages/Rooms'
import { ApiResponse, StrapiAttribute } from 'types'

const RoomsPage = ({ rooms }: { rooms: StrapiAttribute<Room>[] }) => {
  return <Rooms rooms={rooms} />
}

export default RoomsPage

export async function getStaticProps() {
  const roomsRes = await fetchAPI<ApiResponse<StrapiAttribute<Room>[]>>('/rooms', {
    populate: '*',
  })
  return {
    props: {
      rooms: roomsRes?.data || null,
    },
  }
}
