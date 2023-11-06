import React from "react";
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";
import { useSelector } from "react-redux";

const Maincontainer = () => {

  const movies = useSelector((store) => store.movies?.nowplayingmovies);

  if (!movies) return;

  const mainmovie = movies[0];

  //console.log(mainmovie);

  //console.log(mainmovie.original_title);

  //console.log(mainmovie.overview);

  const { original_title, overview, id } = mainmovie;

  return (
    <div>

      <Videotitle title={original_title} overview={overview} />
      
      <Videobackground movieid={id} />

    </div>
  );
};

export default Maincontainer;
