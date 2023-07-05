export interface Track {
  album: Album
  artists: Artist[]
  duration_ms: number
  external_urls: {
    spotify: string
  }
  id: string
  name: string
  popularity: number
  preview_url: string
  type: string
}

export interface Tracks {
  tracks: {
    items: Track[]
  }
}

export interface Album {
  id: string
  images: {
    url: string
  }[]
  external_urls: {
    spotify: string
  }
  name: string
  release_date: string
  type: string
}

export interface Artist {
  external_urls: {
    spotify: string
  }
  id: string
  name: string
  type: string
}
