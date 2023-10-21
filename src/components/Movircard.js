import React from "react";

import { IMG_URL } from "../utils/constant";

const Movircard = ({ poster }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_URL + poster} alt="poster" />
    </div>
  );
};

export default Movircard;
