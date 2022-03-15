import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import LocationImage from './LocationImage'

export default function ContactUs() {
  return (
    <>
      <div className="relative bg-gray-100">
        <Image
          src="/assets/images/phone_cabins.jpg"
          alt="Picture of London"
          layout="fill"
          objectFit="cover"
          objectPosition="0% 20%"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative shadow-xl">
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12">
                <h3 className="text-lg md:text-xl font-bold lg:text-3xl text-white">
                  Contact <br /> information
                </h3>

                <dl className="mt-8 space-y-10">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-2xl text-white">
                    <PhoneIcon
                      className="flex-shrink-0 w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+44 77 7125 3554</span>
                  </dd>
                  {/* email */}
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-2xl text-white">
                    <MailIcon
                      className="flex-shrink-0 w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                    <span className="ml-3">roberto@lararooms.com</span>
                  </dd>
                  {/* location */}
                  {/* <dt>
                  <span className="sr-only">Location</span>
                </dt>
                <dd className="flex text-2xl text-white">
                  <LocationMarkerIcon
                    className="flex-shrink-0 w-8 h-8 text-white"
                    aria-hidden="true"
                  />
                  <span className="ml-3">53B Hanburu street whatever 20</span>
                </dd> */}
                  {/* location */}
                  <dt>
                    {/* <img
                      src="/assets/images/lararooms_1.png"
                      className="mix-blend-overlay"
                    /> */}

                    <Image
                      src="/assets/images/white-logo-3d.png"
                      alt="Logo"
                      layout="responsive"
                      width={30}
                      height={20}
                      objectFit="cover"
                    />
                  </dt>
                </dl>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 ">
                <h3 className="text-lg md:text-xl font-bold lg:text-3xl text-white">
                  Send us a message
                </h3>
                <form
                  action="#"
                  method="POST"
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-white"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white"
                      >
                        Phone
                      </label>
                      <span id="phone-optional" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                      >
                        Message
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm text-white focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                        aria-describedby="message-max"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocationImage />
    </>
  )
}
