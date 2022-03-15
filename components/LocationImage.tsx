import Image from 'next/image'

export default function LocationImage() {
  return (
    <div className="relative bg-gray-100 inline-block">
      <img
        src="/assets/images/london_map.jpg"
        alt="Picture of London underground"

        // objectPosition="0% 20%"
      />
    </div>
  )
}
