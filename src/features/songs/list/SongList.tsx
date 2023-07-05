import { useGetSongsQuery } from "../api/songsApi"
import { SongItem } from "../item/SongItem"
import { Loader } from "../../../components/Loader/Loader"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
const SongsList = () => {
  let { q } = useParams()
  if (!q) {
    q = "alone"
  }
  const {
    data: songs,
    isFetching,
    isLoading,
    error,
    isSuccess,
  } = useGetSongsQuery(q)

  error && console.log("Error::", error)

  useEffect(() => {
    isSuccess && localStorage.setItem("songs", JSON.stringify(songs))
  }, [isSuccess])

  if (isFetching || isLoading) {
    return <Loader />
  }

  return (
    <div className="flex flex-col bg-[#202020]">
      {songs?.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  )
}

export default SongsList
