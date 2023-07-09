import { api } from "../../../app/services/server-api"
import { Track, Tracks } from "../types"

const token = localStorage.getItem("token")

const songsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSongs: builder.query<Track[], string>({
      query: (q) => ({
        url: `/search?q=${q}&type=track`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (res: Tracks) => {
        let RES = res?.tracks?.items
        return RES
      },
      providesTags: ["songs"],
    }),
    getSong: builder.query<Track, string | undefined>({
      query: (id) => ({
        url: `/tracks/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    recommendations: builder.query<Track[], string | undefined>({
      query: (id) => ({
        url: `recommendations?seed_tracks=${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (res: any) => {
        return res.tracks
      },
      providesTags: ["songs"],
    }),
  }),
})
export const { useGetSongsQuery, useGetSongQuery, useRecommendationsQuery } =
  songsApi
