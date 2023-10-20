

import { API_OPTIONS } from "../utils/constant";

import { addNowPlayingMovies } from "../utils/movieslice";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

 const usenowplayingmovies = () => {

  const dispatch = useDispatch();

  const movidata = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?",
      API_OPTIONS
    );

    let data = await res.json();

    console.log(data.results);

    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    movidata();
  }, []);
};


export default usenowplayingmovies;