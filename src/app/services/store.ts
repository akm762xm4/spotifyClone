import { configureStore } from "@reduxjs/toolkit"
import { api } from "./server-api"
import navReducer from "../../components/Navbar/navSlice"
export const store = configureStore({
  reducer: {
    navbar: navReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
