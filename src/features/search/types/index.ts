import { Playlist } from "../../playlists/types"
import { Track } from "../../songs/types"
import { Artist } from "../../artists/types"

export interface SearchRes {
  artists: {
    items: Artist[]
  }
  playlists: {
    items: Playlist[]
  }
  tracks: {
    items: Track[]
  }
}
