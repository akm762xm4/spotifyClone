import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const URL = import.meta.env.VITE_API_URL
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: () => ({}),
  tagTypes: ["auth", "songs", "artists", "playlists", "search"],
})
