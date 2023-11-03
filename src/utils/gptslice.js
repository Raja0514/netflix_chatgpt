import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({

    name:"gpt",
    initialState:{
        showgptsearch:false
    },
    reducers:{

        togglegptsearch:(state)=>{
            state.showgptsearch=!state.showgptsearch //toggle mechanism
        }
    }

})

export const {togglegptsearch}=gptslice.actions;

export default gptslice.reducer;