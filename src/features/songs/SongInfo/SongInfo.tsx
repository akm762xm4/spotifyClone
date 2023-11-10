import { useParams, useNavigate } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"
import { TimeConverter } from "../../../app/utility/timeConverter"
import { Loader } from "../../../components/Loader/Loader"
import { useGetSongQuery, useRecommendationsQuery } from "../api/songsApi"
import { SongItem } from "../item/SongItem"
import "./audio.css"
import { yearExtractor } from "../../../app/utility/yearExtractor"
import { useGetArtistQuery } from "../../artists/api/artistApi"
const SongInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: song, isLoading, isFetching } = useGetSongQuery(id)
  const {
    data: recoms,
    isLoading: isRecomsLoading,
    isFetching: isRecomsFetching,
  } = useRecommendationsQuery(id)

  const { data: artist } = useGetArtistQuery(song?.artists[0]?.id)

  if (!song || isLoading || isFetching || isRecomsFetching || isRecomsLoading) {
    return <Loader />
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-5 pt-[60px] bg-gradient-to-tl from-[#000000] via-[#32376e] to-[#0a720f] z-0 tracking-tighter">
        <span className="flex flex-col gap-2 items-center">
          <img
            title={song.name}
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
          <div className="capitalize hidden md:block text-white">
            {song.type}
          </div>
          <div className="text-3xl md:text-7xl tracking-tighter select-none text-white">
            {song.name.includes("(")
              ? song.name.slice(0, song.name.indexOf("("))
              : song.name}
          </div>
          <div className="flex flex-col md:flex-row gap-2 pt-2 md:items-center ">
            <span
              className="flex items-center gap-1 cursor-pointer text-[17px]/[25px]    text-[#F9F6EE]"
              onClick={() => navigate(`/artists/${song.artists[0]?.id}`)}
            >
              <img
                src={artist?.images[0].url}
                className="w-8 h-8 rounded-full"
              />
              {song.artists[0].name}
            </span>
            <p className="md:block hidden text-[#bbbbba]">&bull;</p>
            <div className="flex flex-row gap-1 text-[#bbbbba]">
              <span>
                {song.name.includes('"')
                  ? song.name.slice(
                      song.name.indexOf('"') + 1,
                      song.name.lastIndexOf('"')
                    )
                  : song.name}{" "}
              </span>
              <span>&bull; {yearExtractor(song.album.release_date)}</span>
              <span>&bull; {TimeConverter(song.duration_ms, "full")}</span>
            </div>
          </div>
        </span>
      </div>

      <div className="flex flex-col bg-[#202020] ">
        <div className="text-xl md:text-2xl text-gray-400 px-3 py-2">
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
