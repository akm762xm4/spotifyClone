import { Routes as Routing, Route, useLocation } from "react-router-dom"
import { SongsModule } from "../pages/Songs/SongsModule"
import { Protected } from "./Protected"
import { Login } from "../components/Login/Login"
import { ArtistsModule } from "../pages/Artists/ArtistsModule"
import { PlaylistModule } from "../pages/Playlists/PlaylistModule"
const Routes = () => {
  const location = useLocation()
  return (
    <Routing location={location} key={location.pathname}>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Protected />}>
        <Route path="songs/*" element={<SongsModule />} />
        <Route path="artists/*" element={<ArtistsModule />} />
        <Route path="playlists/*" element={<PlaylistModule />} />
      </Route>
    </Routing>
  )
}

export default Routes
