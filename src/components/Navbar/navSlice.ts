import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isModalOpen:false
}
const navSlice = createSlice({
    name:"navbar",
    initialState,
    reducers:{
        openModal:(state)=>{
            state.isModalOpen = true
        },
        closeModal:(state)=>{
            state.isModalOpen = false
        },
        toggleModal:(state)=>{
            state.isModalOpen = !state.isModalOpen
        }
    }
})
export default navSlice.reducer
export const { openModal,closeModal,toggleModal } = navSlice.actions