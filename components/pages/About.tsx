import React from 'react'
import Image from 'next/image'
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,

    description: `We have more than 5 years of experience helping people from all over the
      world to find a good room in London`,
    icon: GlobeAltIcon,
  },
  {
    id: 2,

    description: `We help all kinds of people, foreign people who come to London to study or
      to look for a new job, also people from the country who are looking for a
      new house to live with new people.`,
    icon: ScaleIcon,
  },
  {
    id: 3,

    description: `Our main idea is to help you save time and headaches to find a good room in
      which we promise that your stay with Lara rooms in London will be remembered
      as a very good stage in your life.`,
    icon: LightningBoltIcon,
  },
]

const About: React.FC = () => {
  return (
    <>
      <div className="block relative h-96 lg:h-[30rem]">
        <Image
          src="/assets/images/london_eye.jpg"
          alt="Picture of London"
          layout="fill"
          objectFit="cover"
          objectPosition="0% 40%"
        />
      </div>
      {/* lararooms_1.png */}
      <div className="pt-6 bg-gray-50 overflow-hidden lg:pt-0 pb-28">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 md:max-w-3xl lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>
          <div className="relative mt-6 md:mt-6 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                About us
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                We are a young and entrepreneurial company where we work hard to make sure
                we find the room that suits all your needs, that is why we will be by your
                side from the beginning to the end of your stage in this great city.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative flex">
                    {item.icon && (
                      <dt className="flex items-center pr-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </dt>
                    )}
                    <dd className="text-base text-gray-600">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="mt-10 -mx-4 relative lg:mt-0 lg:ml-10 rounded-xl overflow-hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>

              <Image
                src="/assets/images/lararooms_2.jpg"
                alt="Logo"
                layout="responsive"
                width={490}
                height={390}
                objectFit="cover"
              />
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          {/* Author */}
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-20 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Roberto Lara Jimenez
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  Here’s Roberto Owner Lara rooms, young guy from Barcelona Spain, I have
                  been in London since 2015.
                </p>
                <p className="mt-3 text-lg text-gray-600">
                  I come from a very small town in Barcelona called Cardona with no more
                  than five thousand inhabitants where my whole family lives and I always
                  dedicated myself to the construction sector until I was 25 years old
                  until the crisis came and I decided to move to London to have new
                  experiences.
                </p>
                <p className="mt-3 text-lg text-gray-600">
                  My first years in London started working in restaurants, I started as a
                  kitchen porter in Oxford circus then I became a bartender in Old Street
                  and I also worked as a waiter in Indian restaurant then I started in the
                  property management sector in my spare time because one day my landlord
                  offered me advertising their rooms, then little by little I was leaving
                  the hospitality until I dedicate myself full time to the property
                  management sector.
                </p>
                <p className="mt-3 text-lg text-gray-600">
                  Then I started working full time for an agency where I started as a
                  maintance supervisor and at the same time also became a letting agent,
                  after 3 years I met many contacts in the property management sector and
                  learned very well to know how to handle an agency thanks to the fact
                  that I had professional and good colleagues with more than 15 years of
                  experience.
                </p>
                <p className="mt-3 text-lg text-gray-600">
                  London is a big city and full of opportunities for young people like me
                  who want to grow business or expand their professional career at the
                  same time it makes you personally strong, so I invite you to have a very
                  good experience in this amazing city full of dreams with Lara rooms.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 rounded-xl overflow-hidden">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <Image
                  src="/assets/images/retrato_2.jpeg"
                  alt="Personal picture of Roberto"
                  layout="responsive"
                  width={520}
                  height={720}
                  objectFit="cover"
                  objectPosition="0% 10%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
