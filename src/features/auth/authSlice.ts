import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: "",
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload
    },
  },
})
export const { setUser } = authSlice.actions
export default authSlice.reducer
