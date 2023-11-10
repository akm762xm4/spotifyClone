import { useParams } from "react-router-dom"
import { useSearchQuery } from "../api/searchApi"
import { SongItem } from "../../songs/item/SongItem"
import PlayListItem from "../../playlists/item/PlayListItem"
import { ArtistItem } from "../../artists/item/ArtistItem"
import { Loader } from "../../../components/Loader/Loader"
import { NoResults } from "../../../components/ErrorPage/NoResults"
export const Result = () => {
  const { q } = useParams()
  const { data: results, isLoading, isFetching } = useSearchQuery(q)
  if (
    !results?.tracks.items.length &&
    !results?.artists.items.length &&
    !results?.playlists.items.length
  ) {
    return <NoResults />
  }
  if (isLoading || isFetching) {
    return <Loader />
  }

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col bg-[#202020]">
          <div className="text-xl md:text-3xl text-gray-400 px-3 py-2">
            '{q}' in tracks
          </div>
          {results?.tracks.items?.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
        <div className=" bg-[#202020]">
          <div className="text-xl md:text-3xl text-gray-400 px-3 py-2">
            '{q}' in playlists
          </div>
          <div className="grid grid-cols-3  gap-2 pt-5">
            {results?.playlists.items?.map((playlist) => (
              <PlayListItem key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#202020]">
        <div className="text-xl md:text-3xl text-gray-400 px-3 py-2">
          '{q}' in artists
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  pt-3">
          {results?.artists.items?.map((artist) => {
            return <ArtistItem key={artist.id} artist={artist} />
          })}
        </div>
      </div>
    </>
  )
}
