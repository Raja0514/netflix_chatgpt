import React from "react";
import { useSelector } from "react-redux";

import useMoviestrailer from "../hooks/usemovietrailer";

const Videobackground = ({ movieid }) => {

  const trailervideo = useSelector((store) => store.movies?.newtrailer);

  useMoviestrailer({movieid});

  return (
    <div className="w-screen">
      <iframe
        className=" w-full aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailervideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
