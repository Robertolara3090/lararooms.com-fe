import Image from 'next/image'
import React from 'react'
import ImageGallery from 'react-image-gallery'

import ReactMarkdown from 'react-markdown'
import { Room } from 'types'

const Room = ({ room }: { room: Room }) => {
  const images = room?.images?.data?.map(({ attributes: image }) => {
    return {
      original: image?.formats?.medium?.url,
      thumbnail: image?.formats?.thumbnail?.url,
    }
  })

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 mb-10">
            {images && <ImageGallery items={images} />}
          </div>
          <div className="md:flex-1 shrink-0 px-4">
            <p className="text-blue-800 text-lg">
              {room?.allBillsIncluded ? 'All bills included' : ''}
            </p>
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-3xl md:text-4xl">
              {room?.title}
            </h2>

            <div className="flex flex-col space-y-4 my-4">
              <div className="inline-flex max-w-fit rounded-lg bg-green-300 py-2 px-3">
                <span className="font-bold text-green-800 text-3xl">{room?.price}</span>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 mb-5">
              <div className="sm:col-span-2 hover:cursor-map">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900 space-y-1">
                  <span className="inline-flex items-center font-medium text-lg text-gray-900 mr-0.5 hover:underline">
                    <a
                      target="_blank"
                      rel="noopener"
                      href={room?.googleMapsUrl}
                      className="pr-2.5 py-0.5 inline-flex items-start"
                    >
                      <span className="mr-2.5 flex flex-col">
                        <Image src="/map.svg" height="56" width="56" />
                        <span className="inline-flex whitespace-nowrap text-[10px] ">
                          Open map
                        </span>
                      </span>
                      {room?.address}
                    </a>
                  </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Rooms</dt>
                <dd className="mt-1 text-lg text-gray-900">{room?.totalRooms}</dd>
              </div>
            </dl>

            <div className="prose">
              <ReactMarkdown>{room?.description}</ReactMarkdown>
            </div>

            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mb-10 mt-10">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Availability</dt>
                <dd className="mt-1">
                  <span className="inline-flex items-center border bg-blue-600 rounded-full text-xs font-medium text-white mr-0.5">
                    <span className="px-2.5 py-0.5">{room?.availability}</span>
                  </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Near by</dt>
                <dd className="mt-1 text-sm text-gray-900 space-y-1">
                  {room?.nearBy?.place?.map(({ name, distance }) => {
                    return (
                      <span
                        key={name}
                        className="inline-flex items-center border border-blue-600 rounded-full text-xs font-medium bg-white text-gray-800 mr-0.5"
                      >
                        <span className="px-2.5 py-0.5">{name}</span>
                        <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-r-full">
                          {distance}
                        </span>
                      </span>
                    )
                  })}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Room
