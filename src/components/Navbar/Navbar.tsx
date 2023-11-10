import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/Spotify_Logo_RGB_Green.png"
import { Bars3Icon } from "@heroicons/react/20/solid"
import SearchForm from "../../features/search/form/SearchForm"
import { useDispatch, useSelector } from "react-redux"
import { toggleModal } from "./navSlice"
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state: any) => state.navbar.isModalOpen)
  const navlinkStyle = ({ isActive }: any) => {
    return {
      color: isActive ? "white" : "",
    }
  }
  return (
    <div className="flex flex-col border-b border-gray-500">
      <div className="flex bg-gray-700 p-2 items-center gap-1 md:gap-3 justify-between ">
        <div className="flex items-center gap-3 ">
          <span
            onClick={() => navigate("/songs")}
            className="shrink-0 cursor-pointer"
          >
            <img className="w-11" src={logo} />
          </span>
          <span className="flex gap-2 modNav:hidden transition-all duration-150">
            <NavLink
              className="text-md md:text-xl text-[#858585] hover:text-white transition-all duration-150"
              style={navlinkStyle}
              to="/songs"
            >
              Songs
            </NavLink>
            <NavLink
              className="text-md md:text-xl text-[#858585] hover:text-white transition-all duration-150 "
              style={navlinkStyle}
              to="/artists"
            >
              Artists
            </NavLink>
            <NavLink
              className="text-md md:text-xl text-[#858585] hover:text-white transition-all duration-150 "
              style={navlinkStyle}
              to="/playlists"
            >
              PlayLists
            </NavLink>
          </span>
          <button
            onClick={() => dispatch(toggleModal())}
            className="flex notModNav:hidden transition-all duration-150"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        <div className="">
          <SearchForm />
        </div>
      </div>
      <div className="notModNav:hidden">
        {isModalOpen ? (
          <div className="bg-[#202020] flex flex-col gap-2 p-4 items-start">
            <NavLink
              className="text-xl text-[#858585] hover:text-white transition-all duration-150"
              style={navlinkStyle}
              to="/songs"
            >
              Songs
            </NavLink>
            <NavLink
              className="text-xl text-[#858585] hover:text-white transition-all duration-150 "
              style={navlinkStyle}
              to="/artists"
            >
              Artists
            </NavLink>
            <NavLink
              className="text-xl text-[#858585] hover:text-white transition-all duration-150 "
              style={navlinkStyle}
              to="/playlists"
            >
              PlayLists
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Navbar
