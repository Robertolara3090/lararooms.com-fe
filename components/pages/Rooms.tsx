import React from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Room } from 'types'
import RoomsHeader from '../RoomsHeader'
import { StrapiAttribute } from 'types'
import Image from 'next/image'

const Rooms = ({ rooms }: { rooms: StrapiAttribute<Room>[] }) => {
  return (
    <>
      <main className="max-w-6xl mx-auto">
        <div className="mb-10"></div>
        <div className="mb-10">
          <RoomsHeader />
        </div>
        <div
          className="pb-20 mx-6 sm:mx-0"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1em',
            justifyItems: 'start',
          }}
        >
          {rooms?.map(({ attributes: room }, i) => {
            const imageUrl =
              room?.images?.data?.[0]?.attributes?.formats?.thumbnail?.url || ''

            return (
              <Link key={room?.slug} href={`rooms/${room?.slug}`} passHref>
                <article
                  key={room?.slug ? room.slug : `room-${i}`}
                  className="cursor-pointer border transform transition duration-200 hover:-translate-y-1 mb-10 flex flex-col p-3 rounded-2xl bg-white shadow-post hover:shadow-2xl sm:max-w-[346.5px]"
                >
                  <div className="rounded-2xl overflow-hidden flex justify-center cursor-pointer">
                    <div className="relative w-full object-cover z-10 aspect-video">
                      {imageUrl ? (
                        <Image src={imageUrl} layout="fill" />
                      ) : (
                        <div className="bg-gray-300 h-full w-full" />
                      )}
                    </div>
                  </div>
                  <div className="p-3 flex-1">
                    <span>
                      <h2 className="font-semibold text-lg mb-2 leading-tight fade">
                        {room?.title}
                      </h2>
                    </span>
                    <p className="text-sm fade text-gray-500">
                      {room?.descriptionPreview || room?.description}
                    </p>
                  </div>
                  <div className="mt-2 pb-2">
                    <div className="mx-3 ">
                      <span className="inline-flex mb-4 font-bold text-sm px-1">
                        <LocationMarkerIcon height={18} />

                        <span className="ml-1">{room?.address}</span>
                      </span>
                      <div className="flex items-center justify-between text-sm text-gray-800">
                        <div>
                          <span className="inline-flex font-bold px-1">
                            <p className="inline-flex flex-col py-1 rounded-md px-2 mb-2 text-sm font-semibold text-gray-500">
                              <span className="text-black">Availability</span>
                              <span>{room?.availability}</span>
                            </p>
                          </span>
                          <span aria-hidden="true">&middot;</span>
                        </div>

                        <span className="font-bold text-xl content-end bg-green-300 text-green-800 py-2 px-3 rounded-lg">
                          {room.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Rooms
