import { configureStore } from "@reduxjs/toolkit"
import { api } from "./server-api"
import authReducer from "../../features/auth/authSlice"
import navReducer from "../../components/Navbar/navSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    navbar:navReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
