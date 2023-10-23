import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({

    name:"movies",
    initialState:{
        nowplayingmovies:null,
        newtrailer:null,
        popularmovies:null,
        upcomingmovies:null,
        topratedmovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
          
            state.nowplayingmovies=action.payload;

        },
        addNewTrailer:(state,action)=>{
            state.newtrailer=action.payload
        },
        addPopularMovies:(state,action)=>{

            state.popularmovies=action.payload

        },
        addUpcomingMovies:(state,action)=>{

            state.upcomingmovies=action.payload

        },
        addTopRatedMovies:(state,action)=>{
            
            state.topratedmovies=action.payload

        }

    }
})

export const{addNowPlayingMovies,addNewTrailer,addPopularMovies,addUpcomingMovies,addTopRatedMovies}=movieslice.actions;

export default movieslice.reducer;
