import { API_OPTIONS } from "../utils/constant";

import { addUpcomingMovies } from "../utils/movieslice";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

const useupcomingmovies = () => {
  const dispatch = useDispatch();

  const movidata = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    let data = await res.json();

    //console.log(data.results);

    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    movidata();
  }, []);
};

export default useupcomingmovies;
