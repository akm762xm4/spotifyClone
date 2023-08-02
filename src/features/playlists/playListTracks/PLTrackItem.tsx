import { useNavigate } from "react-router-dom"
import { TimeConverter } from "../../../app/utility/timeConverter"
import { Track } from "../../songs/types"
interface PropTypes {
  song: Track
}
export default function PLTrackItem({ song }: PropTypes) {
  const navigate = useNavigate()
  return (
    <div
      key={song.id}
      className="Item py-1 flex justify-between items-center text-white hover:bg-[#41414167] transition-all duration-150  "
    >
      <div className="flex gap-4 items-center">
        <img
          onClick={() => navigate(`/songs/${song.id}`)}
          className="m-1"
          src={song.album.images[2].url}
        />
        <span className="flex flex-col ">
          <div
            onClick={() => navigate(`/songs/${song.id}`)}
            className="text-md md:text-xl hover:underline hover:text-white transition-all duration-150 cursor-pointer"
          >
            {song.name.includes("(")
              ? song.name.slice(0, song.name.indexOf("("))
              : song.name}
          </div>
          <div className="flex gap-1">
            {song.artists.slice(0, 2).map((artist, i: number) => (
              <div key={artist.id} className="font-light text-xs md:sm mt-2">
                {artist.name.length >= 13
                  ? artist.name.slice(0, artist.name.indexOf(" "))
                  : artist.name}
                {song.artists.slice(0, 2).length !== i + 1 ? "," : ""}
              </div>
            ))}
          </div>
        </span>
      </div>
      <span className="mr-6">{TimeConverter(song.duration_ms)}</span>
    </div>
  )
}
