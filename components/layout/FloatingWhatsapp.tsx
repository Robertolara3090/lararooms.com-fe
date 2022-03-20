import Image from 'next/image'
import React from 'react'

const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      target="_blank"
      rel="noopener"
      className="cursor-pointer hover:scale-105 fixed bottom-0 right-0 z-50 m-10"
      href="https://wa.me/447771253554"
    >
      <Image src="/whatsapp-icon.svg" height={60} width={60} />
    </a>
  )
}

export default FloatingWhatsapp
