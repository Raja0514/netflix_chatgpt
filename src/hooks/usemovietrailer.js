import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNewTrailer } from "../utils/movieslice";

const useMoviestrailer=(movieid)=>{


    const dispatch=useDispatch();


    //const [trailerid,settrailerid]=useState(null)

  const movieapi = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTIONS
    );

    const resjon = await data.json();

    const filterdata = resjon.results.filter((mov) => mov.type === "Trailer");

    const trailer = filterdata.length ? filterdata[0] : resjon.results[0];

    console.log(trailer);
    
    dispatch(addNewTrailer(trailer))
  };

  useEffect(() => {
    movieapi();
  }, []);
}

export default useMoviestrailer

