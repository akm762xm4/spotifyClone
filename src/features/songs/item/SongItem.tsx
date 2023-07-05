import { useNavigate } from "react-router-dom"
import { TimeConverter } from "../../../app/utility/timeConverter"
import { Track } from "../types"

interface PropTypes {
  song: Track
}

export const SongItem = ({ song }: PropTypes) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="Item py-1 flex justify-between items-center text-white hover:bg-[#41414167] transition-all duration-150  ">
        <div className="flex gap-4">
          <img
            onClick={() => navigate(`/songs/${song.id}`)}
            className="m-1"
            src={song.album.images[2].url}
          />
          <span className="flex flex-col ">
            <div
              onClick={() => navigate(`/songs/${song.id}`)}
              className="text-xl hover:underline hover:text-white transition-all duration-150 cursor-pointer"
            >
              {song.name}
            </div>
            <div className="flex gap-1">
              {song.artists.map((artist: any, i: number) => (
                <div key={artist.id} className="font-normal mt-2">
                  {artist.name}
                  {song.artists.length !== i + 1 ? "," : ""}
                </div>
              ))}
            </div>
          </span>
        </div>
        <span className="mr-6">{TimeConverter(song.duration_ms)}</span>
      </div>
    </>
  )
}
