import { Playlist } from "../types"
import { useNavigate } from "react-router-dom"

interface PropTypes {
  playlist: Playlist
}
const PlayListItem = ({ playlist }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/playlists/${playlist.id}`)}
      className="flex flex-col justify-center gap-2 items-center p-1 cursor-pointer"
    >
      <img src={playlist.images[0].url} />
      <span className="text-white text-sm md:text-xl py-2">
        {playlist.name}
      </span>
    </div>
  )
}

export default PlayListItem
