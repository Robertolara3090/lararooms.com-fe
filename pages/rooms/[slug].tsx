import { fetchAPI } from 'lib/fetchAPI'
import React from 'react'

import Room from 'components/pages/Room'
import { Room as IRoom, StrapiAttribute, ApiResponse } from 'types'

const RoomPage = ({ room }: { room: IRoom }) => {
  return (
    <>
      <Room room={room} />
    </>
  )
}

export default RoomPage

export async function getStaticPaths() {
  const roomsRes = await fetchAPI<ApiResponse<StrapiAttribute<IRoom>[]>>('/rooms', {
    fields: ['slug'],
  })
  return {
    paths: roomsRes.data.map((room) => ({
      params: {
        slug: room.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const roomsRes = await fetchAPI<ApiResponse<StrapiAttribute<IRoom>[]>>('/rooms', {
    filters: {
      slug: params.slug,
    },
    populate: {
      images: {
        populate: '*',
      },
      nearBy: {
        populate: '*',
      },
    },
  })

  return {
    props: { room: roomsRes.data[0].attributes },
    revalidate: 60,
  }
}
