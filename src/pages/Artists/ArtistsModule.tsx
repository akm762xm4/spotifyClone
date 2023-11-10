import { Outlet, useRoutes } from "react-router-dom"
import { ArtistsList } from "../../features/artists/list/ArtistsList"
import { ArtistInfo } from "../../features/artists/info/ArtistInfo"

export const ArtistsModule = () => {
  let elements = useRoutes([
    { index: true, path: "", element: <ArtistsList /> },
    { path: ":id", element: <ArtistInfo /> },
  ])
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  )
}
