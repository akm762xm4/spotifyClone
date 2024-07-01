import { useParams } from "react-router-dom"
import { Loader } from "../../../components/Loader/Loader"
import { useGetPlaylistByCategoryQuery } from "../api/playlistApi"
import PlayListItem from "../item/PlayListItem"
import { useGetTokenMutation } from "../../auth/api/authApi"
import { useEffect } from "react"
export const PlayListList = () => {
  const { catId } = useParams()
  const [getToken] = useGetTokenMutation()
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (!token) {
      getToken()
    }
  }, [getToken, token])

  const {
    data: playlists,
    isLoading,
    isFetching,
  } = useGetPlaylistByCategoryQuery(catId)

  if (isLoading || isFetching) {
    return <Loader />
  }
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 bg-[#202020] gap-2 pt-5">
      {playlists?.map((playlist) => (
        <PlayListItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  )
}
