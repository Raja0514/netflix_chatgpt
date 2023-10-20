import { configureStore } from "@reduxjs/toolkit";

import movieslice from "./movieslice";
import userslice from "./userslice";



const appstore = configureStore({
  reducer: {
    user:userslice,
    movies:movieslice
  },
});

export default appstore;
