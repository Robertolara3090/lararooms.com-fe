import Image from 'next/image'

export default function LocationImage() {
  return (
    <Image
      src="/assets/images/london_map.jpg"
      alt=""
      title=""
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="cover"
    />
  )
}
