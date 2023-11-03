import { createSlice } from "@reduxjs/toolkit";


const configslice=createSlice({
    name:"laguage setup",
    initialState:{
        language:"en"
    },

    reducers:{
        changeLaguage:(state,action)=>{

            state.language=action.payload

        }
    }
})

export const{changeLaguage}=configslice.actions

export default configslice.reducer