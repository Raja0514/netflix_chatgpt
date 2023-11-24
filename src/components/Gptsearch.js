import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptmoviesuggestions from "./Gptmoviesuggestions";
import { BACKGROUND_IMG_URL } from "../utils/constant";

const Gptsearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover w-screen"  src={BACKGROUND_IMG_URL} alt="log" />
      </div> 
      <div>
        <Gptsearchbar />
        <Gptmoviesuggestions />
      </div>
    </>
  );
};

export default Gptsearch;
