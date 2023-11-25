import Header from "./Header";
import useNowplayingmovie from '../hooks/useNowplaying';
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularmovies from "../hooks/usePopular";
import useUpcomingmovies from "../hooks/useUpcoming";
import useTopratedmovies from "../hooks/useTopmovies";

import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);
  
  useNowplayingmovie();
  
  usePopularmovies();
  
  useUpcomingmovies();


  useTopratedmovies();
  

  return (
    <div>
      <Header />
      {showgptsearch ? (
        <Gptsearch />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}

      {/*

        main container
            videobackground
            video title
        seconddary container
           list of movies
           video cards

        */}
    </div>
  );
};

export default Browse;
