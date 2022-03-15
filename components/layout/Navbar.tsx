import React, { createRef, useState, useEffect, Fragment } from 'react'
import Link from 'next/link'

import { NAVBAR_MENU_DATA } from '../../config/contants/menuData'

import styles from './Navbar.module.css'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../Logo'

type MainNavProps = {
  sticky?: boolean
  className?: string
}

const Navbar: React.FC<MainNavProps> = ({ sticky = false, className, ...rest }) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = createRef() as any

  // mount
  useEffect(() => {
    const cachedRef: any = ref.current,
      observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), {
        threshold: 1,
      })

    observer.observe(cachedRef)

    // unmount
    return function () {
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <header
      className={`bg-white px-5 z-30 sticky ${styles.mainNav} ${
        isSticky ? styles.sticky : ' '
      }`}
      // className={
      //   styles.mainNav + (isSticky ? ` ${styles.sticky} ` : ' ') + 'py-3 px-5 z-30'
      // }
      ref={ref}
      {...rest}
    >
      {/* <div className="relative"> */}
      <Popover>
        {({ open }) => (
          <>
            <div
              className={`${styles.mainNavContainer} flex items-center justify-between`}
            >
              <Logo />
              <nav>
                <ul className="hidden md:flex list-none space-x-9 font-semibold">
                  {NAVBAR_MENU_DATA.map(({ name, url }) => (
                    <li key={name} className={styles.link}>
                      <Link href={url}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="-mr-2 flex items-center md:hidden">
                  {open ? (
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden={!open} />
                    </Popover.Button>
                  ) : (
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden={open} />
                    </Popover.Button>
                  )}
                </div>
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* Mobile */}
              <Popover.Panel
                static
                className="bg-white absolute inset-x-0 p-2 transition transform origin-top-right md:hidden z-50 h-screen"
              >
                <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="bg-white absolute w-full top-[50%] transform -translate-y-1/2 px-2 pt-2 pb-3 space-y-1 text-center">
                    {NAVBAR_MENU_DATA.map((item) => (
                      <Link key={item.name} href={item.url}>
                        <a className="block pl-3 pr-4 py-10 rounded-md text-3xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {/* </div> */}
    </header>
  )
}

export default Navbar
