import { configureStore } from "@reduxjs/toolkit";

import movieslice from "./movieslice";
import userslice from "./userslice";
import gptslice from "./gptslice";
import configslice from "./configslice";



const appstore = configureStore({
  reducer: {
    user:userslice,
    movies:movieslice,
    gpt:gptslice,
    config:configslice
  },
});

export default appstore;
