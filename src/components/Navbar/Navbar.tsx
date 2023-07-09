import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/Spotify_Logo_RGB_Green.png"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid"
import SearchForm from "../../features/search/form/SearchForm"
const Navbar = () => {
  const navigate = useNavigate()

  const navlinkStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "white" : "",
    }
  }
  return (
    <div className="flex bg-gray-700 p-2 items-center gap-3 justify-between">
      <div className="flex items-center gap-5">
        <span>
          <img className="w-40 h-12" src={logo} />
        </span>
        <span className="flex gap-3">
          <NavLink
            className="text-xl hover:underline hover:text-white transition-all duration-150"
            style={navlinkStyle}
            to="/songs"
          >
            Songs
          </NavLink>
          <NavLink
            className="text-xl hover:underline hover:text-white transition-all duration-150 "
            style={navlinkStyle}
            to="/artists"
          >
            Artists
          </NavLink>
          <NavLink
            className="text-xl hover:underline hover:text-white transition-all duration-150 "
            style={navlinkStyle}
            to="/playlists"
          >
            PlayLists
          </NavLink>
        </span>
      </div>

      <div>
        <SearchForm />
      </div>
      <span
        onClick={() => navigate("/login")}
        className="bg-green-400 p-1 rounded-sm mr-4 cursor-pointer "
      >
        <ArrowRightOnRectangleIcon className="w-6 h-6" />
      </span>
    </div>
  )
}

export default Navbar
