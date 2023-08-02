import { useParams, useNavigate } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"
import { TimeConverter } from "../../../app/utility/timeConverter"
import { Loader } from "../../../components/Loader/Loader"
import { useGetSongQuery, useRecommendationsQuery } from "../api/songsApi"
import { SongItem } from "../item/SongItem"
import "./audio.css"
const SongInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: song, isLoading, isFetching } = useGetSongQuery(id)
  // song && console.log("Song::", song)
  const {
    data: recoms,
    isLoading: isRecomsLoading,
    isFetching: isRecomsFetching,
  } = useRecommendationsQuery(id)
  // recoms && console.log("Recoms::", recoms)

  if (!song || isLoading || isFetching || isRecomsFetching || isRecomsLoading) {
    return <Loader />
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-5 pt-[60px] bg-gradient-to-tr from-[#ffa86d] to-[#584d2b] z-0 ">
        <span className="flex flex-col gap-2 items-center">
          <img
            className="z-10 shadow-xl shadow-[#00000092]"
            src={song.album.images[1].url}
          />
          <div>
            {song.preview_url === null || undefined ? (
              <></>
            ) : (
              <ReactAudioPlayer
                className="audio px-2 py-[4px]"
                src={song.preview_url}
                controls={true}
              />
            )}
          </div>
        </span>
        <span className="flex flex-col justify-end gap-2 md:gap-4 z-10 pb-8">
          <div className="capitalize">{song.type}</div>
          <div className="text-3xl md:text-7xl">
            {song.name.includes("(")
              ? song.name.slice(0, song.name.indexOf("("))
              : song.name}
          </div>
          <div className="flex flex-col md:flex-row gap-1 pt-2">
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

      <div className="flex flex-col bg-[#202020] ">
        <div className="textxl md:text-3xl text-gray-400 px-3 py-2">
          Recommended Songs
        </div>
        {recoms?.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </>
  )
}

export default SongInfo
