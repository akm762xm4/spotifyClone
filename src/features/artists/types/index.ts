export interface Artist {
  external_urls: {
    spotify: string
  }
  followers: {
    total: number
  }
  images: {
    url: string
    height: number
    width: number
  }[]
  id: string | undefined
  name: string
  popularity: number
  type: string
}
export interface Artists {
  artists: Artist[]
}
