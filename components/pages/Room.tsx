import React from 'react'
import ImageGallery from 'react-image-gallery'
import { roomsData } from '../../config/contants/roomsData'
import ContactUs from '../ContactUs'
import ReactMarkdown from 'react-markdown'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

interface IRoomProps {
  room: any
}
const Room: React.FC<IRoomProps> = ({ room }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <ImageGallery items={images} />;
            </div>
          </div>
          <div className="md:flex-1 shrink-0 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {room.title}
            </h2>

            <div className="inline-flex flex-col sm:flex-row sm:items-center space-x-4 my-4">
              <div className="rounded-lg bg-blue-50 flex py-2 px-3">
                <span className="font-bold text-gray-800 text-3xl">{room.price}</span>
              </div>

              <div className="flex-1">
                {/* <p className="text-green-500 text-xl font-semibold">Save 15%</p> */}
                <p className="text-blue-500 text-lg">
                  {room.allBillsIncluded ? 'All bills included' : ''}
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mb-5">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Rooms</dt>
                <dd className="mt-1 text-lg text-gray-900">{room?.totalRooms}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900 space-y-1">
                  <span className="inline-flex items-center border border-blue-600 rounded-full text-xs font-medium bg-white text-gray-800 mr-0.5">
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/4ND965JnuosegjYe9"
                      className="px-2.5 py-0.5"
                    >
                      Brick Lane
                    </a>
                  </span>
                </dd>
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
                    <span className="px-2.5 py-0.5">3 September 2021</span>
                  </span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Near by</dt>
                <dd className="mt-1 text-sm text-gray-900 space-y-1">
                  <span className="inline-flex items-center border border-blue-600 rounded-full text-xs font-medium bg-white text-gray-800 mr-0.5">
                    <span className="px-2.5 py-0.5">Liverpool station</span>
                    <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-r-full">
                      200m
                    </span>
                  </span>

                  <span className="inline-flex items-center border border-blue-600 rounded-full text-xs font-medium bg-white text-gray-800 mr-0.5">
                    <span className="px-2.5 py-0.5">Tesco</span>
                    <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-r-full">
                      950m
                    </span>
                  </span>

                  <span className="inline-flex items-center border border-blue-600 rounded-full text-xs font-medium bg-white text-gray-800 mr-0.5">
                    <span className="px-2.5 py-0.5">Police</span>
                    <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-r-full">
                      1.2km
                    </span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  )
}

export default Room
