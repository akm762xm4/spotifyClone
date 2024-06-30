import { useGetSongsQuery } from "../api/songsApi"
import { SongItem } from "../item/SongItem"
import { Loader } from "../../../components/Loader/Loader"
import { useEffect } from "react"
import { useAuth } from "../../auth/hooks/useAuth"
import { useGetTokenMutation } from "../../auth/api/authApi"
const SongsList = () => {
  const { isAuthenticated } = useAuth()
  const [getToken] = useGetTokenMutation()

  const {
    data: songs,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetSongsQuery("arijit")

  useEffect(() => {
    isSuccess && localStorage.setItem("songs", JSON.stringify(songs))
  }, [isSuccess])

  useEffect(() => {
    if (!isAuthenticated) {
      getToken()
    }
  }, [getToken, isAuthenticated])

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
