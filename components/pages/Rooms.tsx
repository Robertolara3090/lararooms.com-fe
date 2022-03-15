import React from 'react'
import RoomsHeader from '../RoomsHeader'
import ContactUs from '../ContactUs'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Rooms = ({ rooms }: { rooms: any }) => {
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1em',
            justifyItems: 'center',
          }}
        >
          {rooms.map(({ attributes: room }, i) => (
            <Link href={`rooms/${room?.slug}`} passHref>
              <article
                key={room?.slug ? room.slug : `room-${i}`}
                className="cursor-pointer border transform transition duration-200 hover:-translate-y-1 mb-10 flex flex-col p-3 rounded-2xl bg-white shadow-post hover:shadow-2xl sm:max-w-[346.5px]"
              >
                <div className="rounded-2xl overflow-hidden flex justify-center cursor-pointer">
                  <img
                    className="w-full object-cover z-10 aspect-video"
                    src={room?.images?.[0]}
                  />
                </div>
                <div className="p-3 flex-1">
                  <span>
                    <h2 className="font-semibold text-lg mb-2 leading-tight fade">
                      {room?.title}
                    </h2>
                  </span>
                  <p className="text-sm fade text-gray-500">{room?.description}</p>
                </div>
                <div className="mt-2 pb-2">
                  <div className="mx-3 ">
                    <span className="inline-flex mb-2 font-bold text-sm px-1">
                      <LocationMarkerIcon height={18} />

                      <span className="ml-1">{room?.address}</span>
                    </span>
                    <div className="flex items-center justify-between text-sm text-gray-800">
                      <div>
                        <span className="inline-flex font-bold px-1">
                          <p className="inline-flex py-1 rounded-md px-2 mb-2 text-sm font-semibold bg-green-200 text-gray-900">
                            <span>{room?.availability}</span>
                          </p>
                        </span>
                        <span aria-hidden="true">&middot;</span>
                      </div>

                      <span className="font-bold text-xl content-end">{room.price}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <ContactUs />
    </>
  )
}

export default Rooms
