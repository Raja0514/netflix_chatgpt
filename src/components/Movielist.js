import React from "react";
import Movircard from "./Movircard";

const Movielist = ({ title, movies }) => {
  //console.log(title);
  //console.log(movies);
  

  return (
    <div className="">
      <div>
        <h1 className="text-3xl  text-white">{title}</h1>
      </div>
      <div className="flex ">
        <div className="flex flex-wrap mx-4">
          {movies?.map((mov) => (
            <Movircard key={mov} poster={mov.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
