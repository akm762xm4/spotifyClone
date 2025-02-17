import { Artist } from "../types"
import { useNavigate } from "react-router-dom"
interface PropTypes {
  artist: Artist
}
export const ArtistItem = ({ artist }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/artists/${artist.id}`)}
      className="flex flex-col gap-4 items-center py-6 cursor-pointer"
    >
      <img
        className="rounded-full shadow-gray-700 shadow-lg"
        style={{
          width: 160,
          height: 160,
        }}
        src={artist?.images[1]?.url}
      />
      <div className="flex flex-col items-center gap-2 ">
        <span className="text-xl md:text-3xl text-gray-300">{artist.name}</span>
        <span className="text-sm">
          {artist.followers.total.toLocaleString()}{" "}
          <span className="text-sm md:text-md text-gray-300">Followers</span>
        </span>
      </div>
    </div>
  )
}
