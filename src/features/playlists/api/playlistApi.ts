import { api } from "../../../app/services/server-api"
import { Playlist, Category, PlaylistTracks } from "../types"

const token = localStorage.getItem("token")

const playlistsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylistByCategory: builder.query<Playlist[], string | undefined>({
      query: (category) => ({
        url: `browse/categories/${category}/playlists`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (res: any) => {
        return res.playlists.items
      },
      providesTags: ["playlists"],
    }),
    getPlaylistById: builder.query<Playlist, string | undefined>({
      query: (id) => ({
        url: `playlists/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["playlists"],
    }),
    getPlaylistTracks: builder.query<PlaylistTracks, string | undefined>({
      query: (id) => ({
        url: `playlists/${id}/tracks?offset=0`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["playlists"],
      transformResponse: (res: any) => {
        return res
      },
    }),
    getCategories: builder.query<Category[], void | undefined>({
      query: () => ({
        url: `browse/categories`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["artists"],
      transformResponse: (res: any) => {
        return res.categories.items
      },
    }),
  }),
})

export const {
  useGetPlaylistByCategoryQuery,
  useGetPlaylistTracksQuery,
  useGetCategoriesQuery,
  useGetPlaylistByIdQuery,
} = playlistsApi
