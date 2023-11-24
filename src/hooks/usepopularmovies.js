

import { API_OPTIONS } from "../utils/constant";

import { addPopularMovies } from "../utils/movieslice";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

 const usepopularmovies = () => {

  const dispatch = useDispatch();

  const movidata = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    let data = await res.json();

    //console.log(data.results);

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    movidata();
  }, []);
};


export default usepopularmovies;