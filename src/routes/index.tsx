import {
  Routes as Routing,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom"
import { SongsModule } from "../pages/Songs/SongsModule"
import { ArtistsModule } from "../pages/Artists/ArtistsModule"
import { PlaylistModule } from "../pages/Playlists/PlaylistModule"
import { Result } from "../features/search/result/Result"

const Routes = () => {
  const location = useLocation()
  return (
    <Routing location={location} key={location.pathname}>
      <Route path="songs/*" element={<SongsModule />} />
      <Route path="artists/*" element={<ArtistsModule />} />
      <Route path="playlists/*" element={<PlaylistModule />} />
      <Route path="search/:q" element={<Result />} />
      <Route path="*" element={<Navigate to={"/songs"} />} />
    </Routing>
  )
}

export default Routes
