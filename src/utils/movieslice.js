import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({

    name:"movies",
    initialState:{
        nowplayingmovies:null,
        newtrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          
            state.nowplayingmovies=action.payload;

        },
        addNewTrailer:(state,action)=>{
            state.newtrailer=action.payload
        }
    }
})

export const{addNowPlayingMovies,addNewTrailer}=movieslice.actions;

export default movieslice.reducer;
