import { api } from "../../../app/services/server-api"
import { SearchRes } from "../types/index"
const token = localStorage.getItem("token")

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchRes, string | undefined>({
      query: (q) => ({
        url: `search?q=${q}%2520track%3A${q}%2520artist%3A${q}%2520${q}&type=playlist%2Cartist%2Ctrack&limit=6`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["search"],
    }),
  }),
})

export const { useSearchQuery, useLazySearchQuery } = searchApi
