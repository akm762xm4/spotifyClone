import { api } from "../../../app/services/server-api"

const CLIENT_ID: string = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET: string = import.meta.env.VITE_CLIENT_SECRET
const TOKEN_URL: string = import.meta.env.VITE_TOKEN_URL

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
