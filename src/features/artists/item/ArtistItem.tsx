import { Artist } from "../types"
import { useNavigate } from "react-router-dom"
interface PropTypes {
  artist: Artist
}
export const ArtistItem = ({ artist }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4 items-center py-6">
      <img
        className="rounded-full shadow-gray-700 shadow-lg cursor-pointer "
        style={{
          width: artist.images[2].width,
          height: artist.images[2].height,
        }}
        src={artist.images[0].url}
      />
      <div className="flex flex-col items-center gap-2 ">
        <span
          onClick={() => navigate(`${artist.id}`)}
          className="text-3xl text-gray-300 cursor-pointer hover:underline"
        >
          {artist.name}
        </span>
        <span className="text-sm">
          {artist.followers.total.toLocaleString()}{" "}
          <span className="text-gray-300">Followers</span>
        </span>
      </div>
    </div>
  )
}
