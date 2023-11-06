import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({

    name:"gpt",
    initialState:{
        showgptsearch:false,
        movienames:null,
        tmtbresults:null
    },
    reducers:{

        togglegptsearch:(state)=>{
            state.showgptsearch=!state.showgptsearch //toggle mechanism
        },

        moviesgptapi:(state,action)=>{

            const{movienames,Tmdbresults}=action.payload // extracting data 

            state.movienames=movienames;
            state.tmtbresults=Tmdbresults;


        }
    }

})

export const {togglegptsearch,moviesgptapi}=gptslice.actions;

export default gptslice.reducer;