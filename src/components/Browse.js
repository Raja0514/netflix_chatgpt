import Header from "./Header";
import usenowplayingmovie from "../hooks/usenowplayingmovie";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usepopularmovies from "../hooks/usepopularmovies";
import useupcomingmovies from "../hooks/useupcomingmovies";
import usetopratedmovies from "../hooks/usetopratedmovies";

const Browse = () => {
  
  usenowplayingmovie();
  usepopularmovies();
  useupcomingmovies();
  usetopratedmovies();
  

  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />

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
