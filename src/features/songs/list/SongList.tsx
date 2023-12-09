import { useGetSongsQuery } from "../api/songsApi"
import { SongItem } from "../item/SongItem"
import { Loader } from "../../../components/Loader/Loader"
import { useEffect } from "react"
import { useGetTokenMutation } from "../../auth/api/authApi"
const SongsList = () => {
  const [getToken] = useGetTokenMutation()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) {
      getToken()
    }
  }, [getToken, token])

  const {
    data: songs,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetSongsQuery("arijit")

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
