import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="w-20">
        <div className="relative aspect-square">
          <Image
            src="/assets/images/lararooms_1.png"
            alt="Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
    </Link>
  )
}

export default Logo
