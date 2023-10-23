import React from "react";
import Movircard from "./Movircard";

const Movielist = ({ title, movies }) => {
  console.log(title);
  console.log(movies.map((mov) => mov.id));

  return (
    <div className="">
      <div>
        <h1 className="text-3xl p-2  text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies?.map((movied) => (
            <Movircard key={movied.id} poster={movied.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
