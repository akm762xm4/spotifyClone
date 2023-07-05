import { Outlet, useRoutes } from "react-router-dom"
import { Categories } from "../../features/playlists/categories/CategoryList"
import { PlayListInfo } from "../../features/playlists/info/PlayListInfo"
import { PlayListList } from "../../features/playlists/list/PlayListList"

export const PlaylistModule = () => {
  const elements = useRoutes([
    { index: true, path: "", element: <Categories /> },
    { path: "category/:catId", element: <PlayListList /> },
    { path: ":id", element: <PlayListInfo /> },
  ])
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  )
}
