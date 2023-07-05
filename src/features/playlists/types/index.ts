import { Track } from "../../songs/types"

export interface Playlist {
  description: string
  external_urls: {
    spotify: string
  }
  followers: {
    total: number
  }
  id: string
  images: {
    url: string
  }[]
  name: string
  tracks: {
    href: string
    total: number
  }
  type: string
}
export interface Category {
  icons: {
    height: number
    width: number
    url: string
  }[]
  id: string
  name: string
}

export interface PlaylistTracks {
  items: {
    track: Track
  }[]
}
