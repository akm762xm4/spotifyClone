import { useParams, useNavigate } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"
import { TimeConverter } from "../../../app/utility/timeConverter"
import { Loader } from "../../../components/Loader/Loader"
import { useGetSongQuery } from "../api/songsApi"
const SongInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: song, isLoading, isFetching } = useGetSongQuery(id)
  song && console.log("Song::", song)
  if (!song || isLoading || isFetching) {
    return <Loader />
  }
  return (
    <>
      <div className="flex gap-4 p-5 pt-[60px] bg-gradient-to-tr from-[#ffa86d] to-[#584d2b] z-0 ">
        <img
          className="z-10 shadow-xl shadow-[#00000092]"
          src={song.album.images[1].url}
        />
        <span className="flex flex-col justify-end gap-2 z-10">
          <div className="capitalize">{song.type}</div>
          <div className="text-7xl">{song.name}</div>
          <div className="flex gap-1 pt-2">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate(`/artists/${song.artists[0]?.id}`)}
            >
              {song.artists[0].name}
            </span>
            <span>&bull; {song.name}</span>
            <span>&bull; {song.album.release_date}</span>
            <span>&bull; {TimeConverter(song.duration_ms)}</span>
          </div>
        </span>
      </div>
      {song.preview_url === null || undefined ? (
        <></>
      ) : (
        <ReactAudioPlayer
          className="w-full"
          src={song.preview_url}
          controls={true}
        />
      )}
    </>
  )
}

export default SongInfo
