import { useGetArtistQuery, useGetArtistTracksQuery } from "../api/artistApi"
import { useParams } from "react-router-dom"
import { Loader } from "../../../components/Loader/Loader"
import { HeartIcon } from "@heroicons/react/20/solid"
import { ArtistSongList } from "../songsList/ArtistSongList"
export const ArtistInfo = () => {
  const { id } = useParams()
  const {
    data: artist,
    isLoading: isArtistLoading,
    isFetching: isArtistFetching,
  } = useGetArtistQuery(id)

  // artist && console.log("Artist::", artist)

  const {
    data: tracks,
    isLoading: isTrackLoading,
    isFetching: isTrackFetching,
  } = useGetArtistTracksQuery(id)

  // tracks && console.log("Track::", tracks)

  if (
    isArtistLoading ||
    isArtistFetching ||
    isTrackLoading ||
    isTrackFetching
  ) {
    return <Loader />
  }

  return (
    <>
      <div className="flex gap-4 p-5 pt-[60px] bg-gradient-to-tr from-[#f8ff6d] to-[#4a3c15] z-0">
        <img
          className="z-10 shadow-xl shadow-[#00000092]"
          src={artist?.images[1].url}
        />
        <span className="flex flex-col justify-end gap-2 z-10">
          <div className="capitalize">{artist?.type}</div>
          <div className="text-7xl">{artist?.name}</div>
          <div className="flex">
            <span>
              {artist?.followers.total.toLocaleString("en-US")} Followers
            </span>
            <span className="flex items-center">
              {" "}
              &bull;{artist?.popularity}
              <HeartIcon className="h-5 w-5 text-red-500" />
            </span>
          </div>
        </span>
      </div>
      <div className="h-20 px-2 text-[#a5a5a5] text-3xl bg-gradient-to-b from-[#4a3c15] to-[#202020] flex items-center">
        Popular Songs from {artist?.name}
      </div>

      <div className="flex flex-col bg-[#202020]">
        {tracks?.map((track) => {
          return <ArtistSongList key={track.id} song={track} />
        })}
      </div>
    </>
  )
}
