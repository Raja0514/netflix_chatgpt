import React from "react";

import { IMG_URL } from "../utils/constant";

const Movircard = ({ poster }) => {
  return (
    <div className="w-32 md:w-48 pr-4 m-4 ">
      <img src={IMG_URL + poster} alt="poster" className="rounded-lg" />
    </div>
  );
};

export default Movircard;
