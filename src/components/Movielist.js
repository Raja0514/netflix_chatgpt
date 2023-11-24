import React from "react";
import Movircard from "./Movircard";

const Movielist = ({ title, movies }) => {
  //console.log(title);
  //console.log(movies);
  

  return (
    <div className="">
      <div>
        <h1 className=" text-xl p-2 md:text-3xl md:ml-5 md:mb-2   text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-hidden hover:overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((mov) => (
            <Movircard key={mov} poster={mov.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
