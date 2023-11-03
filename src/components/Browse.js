import Header from "./Header";
import usenowplayingmovie from "../hooks/usenowplayingmovie";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usepopularmovies from "../hooks/usepopularmovies";
import useupcomingmovies from "../hooks/useupcomingmovies";
import usetopratedmovies from "../hooks/usetopratedmovies";

import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showgptsearch = useSelector((store) => store.gpt.showgptsearch);

  usenowplayingmovie();
  usepopularmovies();
  useupcomingmovies();
  usetopratedmovies();

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
