import { useParams } from "react-router-dom"
import {
  useGetPlaylistByIdQuery,
  useGetPlaylistTracksQuery,
} from "../api/playlistApi"
import { Loader } from "../../../components/Loader/Loader"
import PLTrackItem from "../playListTracks/PLTrackItem"
export const PlayListInfo = () => {
  const { id } = useParams()
  const { data: playlist, isLoading, isFetching } = useGetPlaylistByIdQuery(id)
  const {
    data: tracks,
    isLoading: isTracksLoading,
    isFetching: isTracksFetching,
  } = useGetPlaylistTracksQuery(id)

  if (
    !playlist ||
    isLoading ||
    isFetching ||
    isTracksFetching ||
    isTracksLoading
  ) {
    return <Loader />
  }

  return (
    <>
      <div
        style={{
          background: `url(${playlist.images[0].url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <span
          className="flex flex-col justify-end gap-2 pt-36 p-5 pb-4  text-[#ffffff]"
          style={{ backdropFilter: "brightness(35%)" }}
        >
          <div className="capitalize">{playlist.type}</div>
          <div className="text-3xl md:text-7xl font-bold">{playlist.name}</div>
          <div className="py-2 text-sm md:text-md">{playlist.description}</div>
          <span className="flex gap-1">
            <div>{playlist.followers.total.toLocaleString()} likes</div>
            <div>&bull;</div>
            <div>{playlist.tracks.total} Songs</div>
          </span>
        </span>
      </div>

      <div className="flex flex-col bg-[#202020]">
        {tracks?.items.map((track) => {
          return <PLTrackItem key={track.track.id} song={track.track} />
        })}
      </div>
    </>
  )
}
