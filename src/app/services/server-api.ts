import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const URL = "https://api.spotify.com/v1"
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: () => ({}),
  tagTypes: ["auth", "songs", "artists", "playlists", "search"],
})
