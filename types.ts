export interface ApiResponse<T> {
  data: T
}

export interface StrapiAttribute<T> {
  attributes: T
}

export type Format = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  url: string
}

export type Image = ApiResponse<
  StrapiAttribute<{
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      thumbnail: Format
      medium: Format
      small: Format
    }
  }>[]
>

export type NearBy = {
  distance: string
  name: string
}

export type Room = {
  title: string
  price: string
  address: string
  description: string
  availability: string
  allBillsIncluded: boolean
  featured?: boolean
  totalRooms: string
  googleMapsUrl: string
  featuredTitle?: string
  descriptionPreview?: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  images: Image
  nearBy: {
    place: NearBy[]
  }
}
