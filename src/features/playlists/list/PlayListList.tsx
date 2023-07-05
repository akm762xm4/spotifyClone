import { useParams } from "react-router-dom"
import { Loader } from "../../../components/Loader/Loader"
import { useGetPlaylistByCategoryQuery } from "../api/playlistApi"
import PlayListItem from "../item/PlayListItem"
export const PlayListList = () => {
  const { catId } = useParams()
  const {
    data: playlists,
    isLoading,
    isFetching,
  } = useGetPlaylistByCategoryQuery(catId)
  // playlists && console.log("PlayLists::", playlists)
  if (isLoading || isFetching) {
    return <Loader />
  }
  return (
    <div className="grid grid-cols-3 bg-[#202020] gap-2 pt-5">
      {playlists?.map((playlist) => (
        <PlayListItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  )
}
