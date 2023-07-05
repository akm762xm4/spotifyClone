import { Playlist } from "../types"
import { useNavigate } from "react-router-dom"

interface PropTypes {
  playlist: Playlist
}
const PlayListItem = ({ playlist }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center gap-2 items-center p-1 border-2 border-white">
      <img src={playlist.images[0].url} />
      <span
        onClick={() => navigate(`/playlists/${playlist.id}`)}
        className="text-white text-xl py-2 cursor-pointer hover:underline"
      >
        {playlist.name}
      </span>
    </div>
  )
}

export default PlayListItem
