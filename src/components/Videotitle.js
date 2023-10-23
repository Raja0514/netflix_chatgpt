import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className=" absolute w-screen aspect-video pt-[13%] px-24  text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-2 text-lg w-2/4 ">{overview}</p>
      <div>
        <button className="bg-white text-black px-3 py-3 m-2 rounded-xl font-bold ">Play</button>
        <button className="bg-white text-black px-3 py-3 rounded-xl font-bold">More info</button>
      </div>
    </div>
  );
};

export default Videotitle;
