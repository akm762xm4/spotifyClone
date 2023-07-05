import { api } from "../../../app/services/server-api"

const CLIENT_ID: string = "4be3a1e5ac164c51b5a6dc1b064a7063"
const CLIENT_SECRET: string = "22d732ac5327497280729d3fce8e8531"

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getToken: builder.mutation<any, void>({
      query: () => ({
        url: "https://accounts.spotify.com/api/token",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      }),
    }),
  }),
})

export const { useGetTokenMutation } = authApi
