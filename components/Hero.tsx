/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhoneIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden p-4">
      <div className="max-w-7xl mx-auto">
        <Image
          src="/assets/images/tower_bridge_1.jpg"
          alt="Picture of London"
          layout="fill"
          objectFit="cover"
          // objectPosition="0% 50%"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 sm:bg-none" />
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-5xl lg:w-full lg:pb-28 xl:pb-52">
          <main className="flex flex-col sm:flex-row mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:pr-8 lg:pl-10 xl:mt-16">
            <div className="w-52 sm:w-72 block -mt-14">
              <div className="relative aspect-square">
                <Image
                  src="/assets/images/lararooms_1.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold text-black sm:text-5xl ">
                <span className="block ">Rooms and flats for rent</span>
                <span className="block text-blue-600 ">in London.</span>
              </h1>
              {/* btns */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/rooms">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-10">
                      Check the rooms
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
