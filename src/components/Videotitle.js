import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] md:pt-[13%] px-6 md:px-24  text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-2 text-lg w-2/4 ">{overview}</p>
      <div className="my-2">
        <button className=" text-white  md:px-3 py-2 md:py-3 m-1 md:m-2 rounded-xl font-bold ">
          <FaPlay size={32} />
        </button>
        <button className=" text-white px-3 py-3 rounded-xl font-bold">
          <GoInfo size={32} />
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
