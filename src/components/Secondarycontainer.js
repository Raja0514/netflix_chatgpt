import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const moviesdata = useSelector((store) => store.movies);

  console.log(moviesdata);

  return (
    moviesdata.nowplayingmovies && (
      <div className="bg-black">
        <Movielist
          title="now playing movies"
          movies={moviesdata.nowplayingmovies}
        />
        <Movielist
          title="upcoming movies"
          movies={moviesdata.nowplayingmovies}
        />
        <Movielist
          title="popular movies"
          movies={moviesdata.nowplayingmovies}
        />
        <Movielist
          title="comedy movies"
          movies={moviesdata.nowplayingmovies}
        />
         
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
