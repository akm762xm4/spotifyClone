import { Outlet, useRoutes } from "react-router-dom"
import { ArtistsList } from "../../features/artists/list/ArtistsList"
import { ArtistInfo } from "../../features/artists/info/ArtistInfo"
// import { ArtistSongList } from "../../features/artists/songsList/ArtistSongList"

export const ArtistsModule = () => {
  let elements = useRoutes([
    { index: true, path: "", element: <ArtistsList /> },
    { path: ":id", element: <ArtistInfo /> },
    // { path: ":id/songs", element: <ArtistSongList /> },
  ])
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  )
}
