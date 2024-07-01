import { api } from "../../../app/services/server-api"

const CLIENT_ID = "4be3a1e5ac164c51b5a6dc1b064a7063"
const CLIENT_SECRET = "22d732ac5327497280729d3fce8e8531"
const TOKEN_URL = "https://accounts.spotify.com/api/token"

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation<Response, void>({
      query: () => ({
        url: TOKEN_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      }),
      invalidatesTags: ["auth"],
      onQueryStarted: async (_api, { queryFulfilled }) => {
        const response = await queryFulfilled
        localStorage.setItem("token", response.data?.access_token)
      },
    }),
  }),
})

export const { useGetTokenMutation } = authApi

interface Response {
  access_token: string
}
