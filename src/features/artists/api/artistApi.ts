import { api } from "../../../app/services/server-api"
import { Track } from "../../songs/types"
import { Artist } from "../types"
import { artistIds } from "./artistsIds"

const token = localStorage.getItem("token")
const artistsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getArtist: builder.query<Artist, string | undefined>({
      query: (id) => ({
        url: `/artists/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["artists"],
    }),

    getArtists: builder.query<Artist[], void>({
      query: () => ({
        url: `/artists?ids=${artistIds}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (res: any) => {
        return res?.artists
      },
      providesTags: ["artists"],
    }),

    getArtistTracks: builder.query<Track[], string | undefined>({
      query: (id) => ({
        url: `/artists/${id}/top-tracks?country=IN`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (res: any) => {
        return res?.tracks
      },
      providesTags: ["artists"],
    }),

    getRelatedArtists: builder.query<Artist[], string | undefined>({
      query: (id) => ({
        url: `artists/${id}/related-artists`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (res: any) => {
        return res.artists
      },
      providesTags: ["artists"],
    }),
  }),
})

export const {
  useGetArtistQuery,
  useGetArtistTracksQuery,
  useGetArtistsQuery,
  useGetRelatedArtistsQuery,
} = artistsApi
