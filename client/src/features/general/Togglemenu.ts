import { createSlice } from "@reduxjs/toolkit";


type IToggleMenu = {
    menu: boolean
}

const initialState: IToggleMenu = {
    menu: true
}

const tooglemenu = createSlice({
     name: "Toogle Menu",
     initialState,
     reducers:{
        changeMenuState: (state)=>{
           state.menu = !state.menu
        }
     }
})

export const { changeMenuState } = tooglemenu.actions
export default tooglemenu.reducer