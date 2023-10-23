import { API_OPTIONS } from "../utils/constant";

import { addTopRatedMovies } from "../utils/movieslice";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

const usetopratedmovies = () => {
  const dispatch = useDispatch();

  const movidata = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated? language=en-US page=1",
      API_OPTIONS
    );

    let data = await res.json();

    console.log(data.results);

    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    movidata();
  }, []);
};

export default usetopratedmovies;
