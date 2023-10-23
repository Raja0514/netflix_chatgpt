import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const moviesdata = useSelector((store) => store.movies);

  console.log(moviesdata);

  return (
    moviesdata.nowplayingmovies && moviesdata.popularmovies &&
    moviesdata.upcomingmovies&&moviesdata.topratedmovies&&(
      <div className="bg-black">

        <div className="-mt-36 pl-12 relative z-20 ">
        <Movielist
          title="Now Playing Movies"
          movies={moviesdata.nowplayingmovies}
        />
        <Movielist
          title="Upcoming Movies"
          movies={moviesdata.upcomingmovies}
        />
        <Movielist
          title="Popular Movies"
          movies={moviesdata.popularmovies}
        />
        <Movielist
          title="Top Rated Movies"
          movies={moviesdata.topratedmovies}
        />

        </div>
        
         
        {/*

        Movielist--popular
        moviecards*n
        movielist-now playing
        movielist- trending
        movielist-horror


        */}
      </div>
    )
  );
};

export default Secondarycontainer;
