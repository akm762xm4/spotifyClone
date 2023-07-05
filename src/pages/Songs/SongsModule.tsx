import { Outlet, useRoutes } from "react-router-dom"
import SongsList from "../../features/songs/list/SongList"
import SongInfo from "../../features/songs/SongInfo/SongInfo"
export const SongsModule = () => {
  let elements = useRoutes([
    { index: true, path: "", element: <SongsList /> },
    { path: "search/:q", element: <SongsList /> },
    { path: ":id", element: <SongInfo /> },
  ])
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  )
}
