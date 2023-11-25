import Header from "./Header";
//import useNowplayingmovie from '../hooks/useNowplayingmovie';
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
//import usePopularmovies from "../hooks/usePopularmovies";
//import useUpcomingmovies from "../hooks/useUpcomingmovies";
import useTopratedmovies from "../hooks/useTopmovies";

import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);
  
  // const fun = useNowplayingmovie();
  // fun();
  // const fun1=usePopularmovies();
  // fun1();
  // const fun2=useUpcomingmovies();
  // fun2();

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
