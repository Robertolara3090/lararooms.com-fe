import React from 'react'

import { Room } from 'types'
import Link from 'next/link'
import Image from 'next/image'

const ExploreRooms = ({ featuredRoom }: { featuredRoom: Room | null }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 sm:pt-20 md:pt-40 pb-3 bg-gradient-to-t from-black/70 sm:bg-none">
          <p className="text-sm font-medium text-white sm:mb-1 sm:text-blue-500">
            Featured
          </p>
          <h2 className="font-semibold text-white text-2xl sm:leading-7 sm:text-black md:text-6xl lg:text-8xl">
            {featuredRoom?.featuredTitle || featuredRoom?.title}
          </h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
          <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <p className="text-base">{featuredRoom?.address}</p>
          </div>
          <hr className="w-16 border-gray-300 hidden sm:block" />
        </div>
        <div className="mb-10 sm:mb-0 col-start-1 row-start-3 space-y-3 px-4">
          <Link href={`/rooms/${featuredRoom?.slug}`}>
            <a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-10">
              Check the details
            </a>
          </Link>
        </div>
        {/* images */}
        {featuredRoom?.images?.data?.[0]?.attributes?.formats?.small?.url && (
          <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-2">
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
              <div className="relative col-span-3 row-span-2 xl:col-span-2">
                <Image
                  className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                  layout="fill"
                  src={featuredRoom?.images?.data?.[0]?.attributes?.formats?.medium?.url}
                  alt={featuredRoom?.images?.data?.[0]?.attributes?.caption}
                />
              </div>
              {featuredRoom?.images?.data?.[1]?.attributes?.formats?.medium?.url && (
                <div className="relative hidden xl:block">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                    layout="fill"
                    alt={featuredRoom?.images?.data?.[1]?.attributes?.caption}
                    src={
                      featuredRoom?.images?.data?.[1]?.attributes?.formats?.medium?.url
                    }
                  />
                </div>
              )}
              {featuredRoom?.images?.data?.[2]?.attributes?.formats?.medium?.url && (
                <div className="relative hidden xl:block">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                    layout="fill"
                    alt={featuredRoom?.images?.data?.[2]?.attributes?.caption}
                    src={
                      featuredRoom?.images?.data?.[2]?.attributes?.formats?.medium?.url
                    }
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExploreRooms
