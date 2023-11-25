import React from "react";
import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constant";

const Gptmoviesuggestions = () => {
  const { movienames, tmtbresults } = useSelector((store) => store.gpt);

  //console.log("tets", tmtbresults);

  if (!movienames && !tmtbresults) return null;

  return (
    <>
      <div className="bg-black p-4 mt-10 mx-4 text-white flex flex-wrap justify-center  bg-opacity-80">
        {movienames?.map((data, index) => (
          <>
            <div>
              <div>
                <h1 className="md:text-center text-lg font-bold text-center ">
                  {data}
                </h1>
                <img
                  className="w-36 md:w-52 m-6  rounded-lg "
                  src={IMG_URL + tmtbresults[index]?.results[0]?.poster_path}
                  alt="poster"
                />
              </div>
            </div>
          </>
        ))}

        {/* {movienames.map((movie, index) => (
          <Movielist key={movie} title={movie} movies={tmtbresults[index]} />
        ))} */}
      </div>
    </>
  );
};

export default Gptmoviesuggestions;
