import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import { IMG_URL } from "../utils/constant";

const Gptmoviesuggestions = () => {
  const { movienames, tmtbresults } = useSelector((store) => store.gpt);

  console.log("tets", tmtbresults);

  if (!movienames && !tmtbresults) return null;

  return (
    <>
      <div className="bg-black p-4 mt-10 mx-4 text-white flex flex-wrap  bg-opacity-80">
        {/* {movienames?.map((data, index) => (
          <>
          <div>
          <h1 className="text-center text-lg font-bold">{data}</h1>
          <img
            className="w-52 m-6"
            src={IMG_URL+tmtbresults[index]?.results[0]?.poster_path}
            alt="poster"
          />

          </div>
          
          </>
          
        ))} */}

        {movienames.map((movie, index) => (
          <Movielist key={movie} title={movie} movies={tmtbresults[index]} />
        ))}
      </div>
    </>
  );
};

export default Gptmoviesuggestions;
