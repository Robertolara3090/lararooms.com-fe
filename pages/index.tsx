import { fetchAPI } from 'lib/fetchAPI'
import Head from 'next/head'
import { ApiResponse, Room, StrapiAttribute } from 'types'

import Home from '../components/pages/Home'

export default function HomePage({ featuredRoom }: { featuredRoom: Room | null }) {
  return (
    <>
      <Head>
        <title>Lararooms.com</title>
        <meta name="Lararooms.com" content="Rooms and flats for rent in London." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home featuredRoom={featuredRoom} />
    </>
  )
}

export async function getStaticProps() {
  const roomsRes = await fetchAPI<ApiResponse<StrapiAttribute<Room>[]>>('/rooms', {
    populate: 'images',
  })

  const featuredRoom = roomsRes?.data?.find((room) => {
    return room?.attributes?.featured
  })

  return {
    props: {
      featuredRoom: featuredRoom?.attributes || null,
    },
  }
}
