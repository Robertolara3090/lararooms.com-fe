import { fetchAPI } from 'lib/fetchAPI'
import React from 'react'

import Room from 'components/pages/Room'
import { Room as IRoom, StrapiAttribute, ApiResponse } from 'types'
import { useRouter } from 'next/router'

const RoomPage = ({ room }: { room: IRoom }) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return null
  }

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

  const paths = roomsRes?.data?.map((room) => ({
    params: {
      slug: room?.attributes?.slug,
    },
  }))

  return {
    paths: paths || [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const roomsRes = await fetchAPI<ApiResponse<StrapiAttribute<IRoom>[]>>('/rooms', {
    filters: {
      slug: params?.slug,
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
    props: { room: roomsRes?.data?.[0]?.attributes || null },
  }
}
