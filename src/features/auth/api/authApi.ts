import { api } from "../../../app/services/server-api"
import { setToken } from "../authSlice"

const CLIENT_ID: string = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET: string = import.meta.env.VITE_CLIENT_SECRET
const TOKEN_URL: string = import.meta.env.VITE_TOKEN_URL

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation<any, void>({
      query: () => ({
        url: TOKEN_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      }),
      invalidatesTags: ["auth"],
      onQueryStarted: async (_api, { dispatch, queryFulfilled }) => {
        const response = await queryFulfilled
        dispatch(setToken(response.data?.access_token))
      },
    }),
  }),
})

export const { useGetTokenMutation } = authApi
