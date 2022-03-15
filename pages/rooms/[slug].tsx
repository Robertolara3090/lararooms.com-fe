import { fetchAPI } from 'lib/fetchAPI'
import React from 'react'

import Room from 'components/pages/Room'

const RoomPage = ({ room }: { room: any }) => {
  return (
    <>
      <Room room={room} />
    </>
  )
}

export default RoomPage

export async function getStaticPaths() {
  try {
    const roomsRes = await fetchAPI('/rooms', { fields: ['slug'] })
    return {
      paths: roomsRes.data.map((room) => ({
        params: {
          slug: room.attributes.slug,
        },
      })),
      fallback: false,
    }
  } catch (e) {
    console.log(e)
    return { paths: [], fallback: false }
  }
}

export async function getStaticProps({ params }) {
  try {
    const roomsRes = await fetchAPI('/rooms', {
      filters: {
        slug: params.slug,
      },
    })

    return {
      props: { room: roomsRes.data[0].attributes },
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
  }
}
