import React from "react";
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";
import { useSelector } from "react-redux";

const Maincontainer = () => {

  const movies = useSelector((store) => store.movies?.topratedmovies);

  if (!movies) return;

  const mainmovie = movies[6];

  //console.log(mainmovie);

  //console.log(mainmovie.original_title);

  //console.log(mainmovie.overview);

  const { original_title, overview, id } = mainmovie;

  return (
    <div className="pt-[40%] md:pt-0 bg-black">

      <Videotitle title={original_title} overview={overview} />
      
      <Videobackground movieid={id} />

    </div>
  );
};

export default Maincontainer;
